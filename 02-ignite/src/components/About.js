import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass'

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namste React Web Series</h2>
//       {/* <User name={"Praveen"} location={"Ballolli"} contact={"@followreva"} /> */}
//       <UserClass name={"Praveen Class"} location={"Ballolli Class"} contact={"@followreva Class"} />
//     </div>
//   )
// }

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namste React Web Series</h2>
        <UserClass name={"Praveen Class"} location={"Ballolli Class"} contact={"@followreva Class"} />
        {/* <UserClass name={"Sangu Class"} location={"Gundavan Class"} contact={"@sangu Class"} /> */}
      </div>
    )
  }
}
export default About