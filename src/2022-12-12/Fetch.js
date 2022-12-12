import React from "react";

const Fetch = () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  let user;

  function getUser() {
    const response = fetch(url);
    return response.then((response) => response.json());
  }

  async function callFunc() {
    user = await getUser();
    console.log(user.name);
  }

  callFunc();

  return <div>{user}</div>;
};

export default Fetch;
