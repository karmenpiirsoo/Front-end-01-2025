import { Link } from "react-router-dom"


function AboutUs() {
  return (
    <div>
      Welcome to our store!
      We are so happy to see you here. <br />
      To check out our products, you can use the menu above or just press 
      {<Link to="/products"> HERE</Link>}.
      <br />
      To find out more about our stores and locations, please press 
      {<Link to="/stores"> HERE</Link>}.
    </div>
  )
}

export default AboutUs