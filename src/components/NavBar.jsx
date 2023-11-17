import { Link } from "react-router-dom"
import "../styles/NavBar.css"

export default function NavBar(){

return(
 <div className="navBar">

   <Link to='/'><h1> The Grid</h1></Link> 

<Link to='/grid/about'><h2>👨🏿‍💻</h2></Link>

<Link to='/grid/new'><button>New Task 📝</button></Link>

 </div>
)
}