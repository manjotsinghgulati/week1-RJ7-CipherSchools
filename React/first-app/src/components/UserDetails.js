import React from "react";

const UserDetails = ({user = {} }) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
        </div>

    )

}

export default UserDetails;