import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Styles from "./Login.module.css"
import { useState } from 'react';
import { login } from '../../Auth/axtion';
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./login.css"

export const Signin = () => {

    const { loading, error } = useSelector((state) => state.auth)


    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const { email, password } = input
    const dispatch = useDispatch()
    console.log(email, password)

    const navigate = useNavigate()

    const handleSubmit = () => {

        dispatch(login(email, password))
        if (!error) {
            alert("Login Success")
            navigate("/")
        }

    }





    return <>

        {loading && <p>loading...</p>}
        {error && <p>error</p>}







        <div className="container">
        <Box
            component="form"
            sx={{
                '& > :not(style)': { l: 1, width: '50ch', marginTop: "40px" },
            }}
            noValidate
            autoComplete="off"
        >
            <div className={Styles.heading}><h1 >Login</h1></div>
            <TextField id="standard-basic" label="email" variant="standard" value={email} onChange={(e) => setInput({ ...input, email: e.target.value })} />
            <br />
            <TextField id="standard-basic" label="password" variant="standard" value={password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Login
            </Button>
        </Box>
            </div>
    </>
}