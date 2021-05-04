import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile(props) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
    )
  );
}

export default Profile;
