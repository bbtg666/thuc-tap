import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link, Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken"
import classNames from "classnames";
import axios from "axios";


import Firebase from "../model/firebase";
import "./TopMenu.css";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      title: "Đăng nhập",
      isLogin: 0
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // Logout() {
  //   axios.defaults.headers.common["Authorization"] = "";
  //   Firebase.database().ref('islogin').set(0);
  //   sessionStorage.clear();
  // }

  componentDidMount() {

    Firebase.database()
      .ref("/islogin")
      .on("value", snapshot => {
        this.setState({ isLogin: snapshot.val() });
      });

  }

  render() {
    return (
      <div style={{ color: "#333" }}>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <NavLink
              style={{
                margin: "0px",
                padding: "0px"
              }}
            >
              <div className="">
                <Link className="d-flex navbar-brand " to="/">
                  <img
                    src="https://image.flaticon.com/icons/svg/854/854878.svg"
                    alt="icon"
                    width="32"
                    height="32"
                    className="ml-3"
                  />
                </Link>
              </div>
            </NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/live">Live</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/aboutus">About me</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className={classNames({hidden: this.state.isLogin===0})}>
                <DropdownToggle nav caret style={{color: "#000"}}>
                  {/* {sessionStorage.getItem('user')? jwt.decode(sessionStorage.getItem('user'), 'giang').name : ""} */}
                  quan
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.props.logout}>
                    Đăng xuất
                    </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className={classNames({hidden: this.state.isLogin===1})}>
                <NavLink>
                  <Link to="/login">Đăng nhập</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    );
  }
}
