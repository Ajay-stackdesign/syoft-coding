import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { clearErrors, register } from '../../actions/userActions'
import "./Register.scss"

const Register = () => {
    const navigate = useNavigate()
    const alert = useAlert()
    const dispatch = useDispatch()
    const { isAuthenticated, error, success } = useSelector(state => state.user)
    // console.log(user)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const [phone, setPhone] = useState()
    const [role, setRole] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (phone.length < 10 || phone.length > 10) {
            alert.error("Phone number should be 10 digits")
            return
        }
        dispatch(register(username, email, password, phone, role))
    }

    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            navigate("/")
        }
    }, [dispatch, error, navigate, isAuthenticated, alert, success])
    return (
        <div>
            <label><center>Register</center></label>
            <form onSubmit={handleSubmit}>
                <label><center>UserName</center></label>
                <input type="text" name="username" placeholder="Enter the UserName" value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label><center>Email</center></label>

                <input type="email" name="email" placeholder="Enter the email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label><center>Password</center></label>

                <input type="password" name="password" placeholder="Enter the email" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <label><center>Phone Number</center></label>

                <input type="number" placeholder='Enter the Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label><center>Categories</center></label>

                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">Choose Role</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="user">User</option>
                </select>
                <input type="submit" value="submit" />

                <p>Please click to<Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}

export default Register