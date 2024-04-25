import React from 'react'
import '../componets/home/Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='main'>
                <h2>WelCome to Popx </h2>
                <p>Lorem ipsum, dolor sit <br />
                    amet consectetur adipisicing <br />
                    elit. Possimus totam
                    repellendus libero, .</p>

                <Link to="/register">
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" >Register Here</button>
                    </div>
                </Link>


                <Link to="/login">
                    <div className="d-grid gap-2">
                        <button className="btn btn-light" >Already Account?Login</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Home
