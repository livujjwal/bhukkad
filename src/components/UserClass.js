import React from "react";
import { USER_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dedault",
        location: "Dedault",
      },
    };
  }
  async componentDidMount() {
    const response = await fetch(USER_URL);
    const data = await response.json();
    console.log(data);
    this.setState({
      userInfo: data,
    });
  }
  render() {
    const { name,location,avatar_url,bio } = this.state.userInfo;

    return (
      <div className="w-6/12 flex flex-col items-center justify-center gap-2 pt-4 mx-auto">
        <h1>Developer</h1>
        <UserContext.Consumer >
          {({loggedInUser}) => <h1 >{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>{name}</h2>
        <img className="rounded-full w-80 8-40" src={avatar_url}/>
        <h2> {bio}</h2>
      </div>
    );
  }
}
export default UserClass;
