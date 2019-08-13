import React from 'react'
import jwt from "jsonwebtoken"
import axios from "axios";

export const LocationContext = React.createContext();

export class LocationProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index:""
        }
        this.handleGetLoca = this.handleGetLoca.bind(this);
    }

    handleGetLoca = async ({email, password}) => {
        const user = {
            email: email,
            password: password
          }
          const res = await axios.post("http://13.78.67.3:4000/user/signin", user, {
            headers: {
              "Content-Type": "application/json"
            }
          })
          if (res.data.token) {
            this.setState(() => { 
                return {
                  index: jwt.decode(res.data.token, 'giang').email.split('@')[0]
                }
            })
          }
      }

    render() {
        return <LocationContext.Provider value={{
            index: this.state.index,
            handleGetLoca: this.handleGetLoca
        }}>
            {this.props.children}
        </LocationContext.Provider>
    }
}