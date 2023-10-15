import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./registerstyles.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <>
      <div className="profiledata">
        <img src={user.picture} alt={user.name} />
        <h2 className="dataname">{user.name}</h2>
        <p className="userdata">{user.email}</p>
      </div>
        <LogoutButton />
      </>
    );
  } else {
    return (
        <>
      <div className>
        <h1 className="profileprincipalh1">Inicia sesión para ver tu cuenta</h1>
        <LoginButton />
      </div>
    </>
    );
  }
};
export default Profile;