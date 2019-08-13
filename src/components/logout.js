import axios from "axios";

import Firebase from "../model/firebase";

export const logout = (props) => {
    axios.defaults.headers.common["Authorization"] = "";
    Firebase.database().ref('islogin').set(0);
    sessionStorage.clear();
    props.history.push('/');
}