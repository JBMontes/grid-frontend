import '../styles/Home.css'
import { Link } from 'react-router-dom'
export default function Home(){
    return(
    <div className="home">

        <div className='homePrompt'>

            <h1> Welcome to The Grid</h1>

            <br />

           <Link to='/grid'> <button>View All</button></Link>

            </div>

    </div>

    )
}