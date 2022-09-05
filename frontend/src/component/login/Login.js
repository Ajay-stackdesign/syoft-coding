import React, { useEffect, useState } from 'react'
import { clearErrors, login } from '../../actions/userActions'
import { useSelector, useDispatch } from "react-redux"
import { useAlert } from 'react-alert'
import { useNavigate } from "react-router-dom"
import "./Login.scss"
import { Link } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const { isAuthenticated, error } = useSelector(state => state.user)
    const alert = useAlert()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            navigate("/")
        }
    }, [dispatch, error, navigate, isAuthenticated, alert])
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <label><center>Email</center></label>
                <input className='text' type="email" name="email" placeholder="Enter the email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label><center>Password</center></label>
                <input className='text' type="password" name="password" placeholder="Enter the password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <input className='submit' type="submit" value="submit" />

                <p>Create New Account</p>
                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login