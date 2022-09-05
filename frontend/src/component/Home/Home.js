import React from 'react'
import { useSelector } from "react-redux"
import { logout } from '../../actions/userActions'
import { useDispatch } from "react-redux"
import "./Home.scss"
import { Link } from 'react-router-dom'

const Home = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, user } = useSelector(state => state.user)

    console.log(user)

    const handleCLick = () => {
        dispatch(logout())
    }
    return (
        <div className='home'>
            <div>
                <img src='' alt="" />
            </div>
            <div className='middle__home'>
                <ul >
                    <li><Link className='link' to="/" >Home</Link></li>
                    <li><Link className='link' to="/getall">See All Product List</Link></li>
                    <li><Link className='link' to="/create">create</Link></li>
                </ul>
            </div>
            <div className='last__home'>
                <li>{isAuthenticated ? (<button style={{ "borderRadius": "5px", "color": "black" }} onClick={handleCLick}>Logout</button>) : "username"}</li>
            </div>
        </div>
    )
}

export default Home