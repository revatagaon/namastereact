import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Bijapur"
      }
    }
    console.log("Child Constructor");
  }

  async componentDidMount() {
    // console.log("Child Did Mount");
    const data = await fetch("https://api.github.com/users/revatagaon")
    const json = await data.json()
    this.setState({ userInfo: json })
  }

  render() {
    // const { name, location, contact } = this.props
    // const { count } = this.state;
    const { name, location, avatarUrl } = this.state.userInfo
    console.log("Child Render");
    return (
      <div className="user-card">
        {/* <h1>Name : {this.props.name}</h1> */}
        {/* <h1>Count = {count}</h1>
        <button>Increase Count</button> */}
        <img src={avatarUrl} />
        <h1>Name = {name}</h1>
        <h3>Location= {location}</h3>
        {/* <h3>Contact = {contact}</h3> */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h2 className="text-xl font-bold">{loggedInUser}</h2>}
        </UserContext.Consumer>
      </div>
    )
  }
  /*
  - Parent Constuctor
  - Parent Render
    - Praveen Constructor
    - Praveen Render

    - Sangu Constructor
    - Sangu Render

    - Praveen componentDidMount
    - Sangu componentDidMount

  - Prant componentDidMount
  */
}
export default UserClass;