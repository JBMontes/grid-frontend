import '../styles/Home.css'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className="home">

            <div className='homePrompt'>

                <h1> Welcome to The Grid</h1>
                <p> This task management app allows you to keep track of those important tasks.
                    Click the 'View All' button to see what you have in store for the days to come or the 'New Task' button to keep track of more tasks.
                </p>
                <br />

                <Link to='/grid'> <button>View All</button></Link>

            </div>

        </div>

    )
}