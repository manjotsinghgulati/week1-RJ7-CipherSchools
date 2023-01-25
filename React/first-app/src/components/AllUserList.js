import React from "react";
import UserDetails from "./UserDetails";

const AllUserList = () => {
  let allUsers = [
    {
      name: "Alex",
      email: "alex@abc.com",
      phone: "1234567890",
    },
    {
      name: "Bob",
      email: "bob@abc.com",
      phone: "1234567890",
    },
    {
      name: "Cathy",
      email: "cathy@abc.com",
      phone: "1234567890",
    },
  ];

//   let array = allUsers.map((user, index) => {
//    <UserDetails key = {index} user={user} />;
//   })

    return (
        <div>
            {allUsers.map((user, index) => (
            <UserDetails key={index} user={user}/>
            ))}
        </div>
    )
};

export default AllUserList;
