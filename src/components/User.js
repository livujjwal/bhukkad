import { useState } from "react";

const User = (props) => {
    const [count] = useState(0)
    const [count2] = useState(20)
  const { name } = props;

  return (
    <div className="about-card">
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
      <h1>Role : Founder</h1>
      <h2>Name : {name}</h2>
      <h4>Education : BTech</h4>
      <h4>Location : Noida</h4>
      <h4>Contact : ujjwal@gmail.com</h4>
    </div>
  );
};

export default User;
