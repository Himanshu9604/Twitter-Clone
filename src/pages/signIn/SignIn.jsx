import React, {  useState } from "react";
import styles from "./SignIn.module.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Button,TextField,Box,Stepper,Step } from "@mui/material"
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { isLogin } from "../Atom"
import { useRecoilState } from "recoil";
import CloseIcon from '@mui/icons-material/Close';


const Login = () => {
  

  const dataa = [
    "","or",""
   ];
  const obj = {
    email: "",
    password: "",
  };
  const [success,setSuccess]=useState()
  const [login,setLogin]=useRecoilState(isLogin)
  const [errors, setErrors] = useState({});
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [isUser, setIsuser] = useState("");
  const [formValues, setFormValues] = useState(obj);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    obj[name] = value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

    const handlesubmit = (e) => {
    e.preventDefault();
    const error = validate(formValues);
    if (Object.keys(error).length !== 0) {
      setErrors(error);

      return;
    }

    const user = FindUser(data);
    if (user) {
      
      setIsuser("Login SuccesFully");
      setSuccess(true)
      setTimeout(() => {
        Navigate("/home");
        setLogin(true)
      }, 1000);
    } else {
      setIsuser("Details not match");
      setSuccess(false)
    }

    setFormValues(obj);
  };

  const successStyle = {
    color: "green",
  };
  
  const errorStyle = {
    color: "red",
  };

  const validate = (validate) => {
    const error = {};
    const email = validate.email;
    const password = validate.password;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      error.email = "email is required !";
    } else if (!regex.test(email)) {
      error.email = "this email is not valid !";
    }

    if (!password) {
      error.password = "Password is required !";
    } 

    return error;
  };

  const FindUser = (data) => {
    const value = data.find(
      (user) =>
        user.email === formValues.email && user.password === formValues.password
    );
    return value;
  };

  return (
    <div>
      <Box sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
        
            <div className={styles.icon}>
                 <Link  to="/home">  <CloseIcon sx={{fontSize:30,color:"white" ,marginLeft:"0.5rem", }}/></Link>
            </div>
            <div className={styles.container}>
            <div>
                  <TwitterIcon sx={{ color: "rgb(25 161 242)",fontSize:45 }}/>
            </div>
            
               <h1 className={styles.h1}>Sign in to Twitter</h1>
            <div className={styles.contain}>
                <Button className={styles.btn}  variant="contained">
                  <GoogleIcon sx={{mr: 1}}/> Signin with Gmail
                 </Button>
                <Button className={styles.btn} variant="contained">
                    <AppleIcon sx={{mr: 1}}/> Sign in with Apple
                </Button>
              </div>
              <Stepper className={ styles.stepper} >
                    {dataa.map((label) => (
                    <Step key={label}>{label} </Step>
                    ))}
                  </Stepper>
                  <form className={styles.contain} onSubmit={handlesubmit}>
                  <TextField className={styles.input}  type="email"
                    name="email" id="filled-basic" label="Email" variant="filled"   sx={{
                      color: "white",
                     
                      borderRadius: "5px",
                      border: "1px solid white",
                      "& label": { color: "white" },
                      "& input": { color: "white" },
                    }} onChange={handleChange} value={formValues.email}/>
                   <p>{errors.email}</p>
          
                  <TextField className={styles.input}  type="password"
                      name="password" id="filled-basic"  label="Password" variant="filled"  sx={{
                        color: "white",
                       
                        borderRadius: "5px",
                        border: "1px solid white",
                        "& label": { color: "white" },
                        "& input": { color: "white" },
                      }} onChange={handleChange} value={formValues.password}/>
                      <p>{errors.password}</p>
                      <h2 className={styles.h2} style={success ? successStyle : errorStyle}>{isUser}</h2>

                  <Button className={styles.btn}  type="submit"  color='primary' variant="contained">LogIn</Button>
                  <Button className={styles.btn}  variant="contained">Forgot Password</Button><br/>
              </form> 
                 <h3 className={styles.h3}>
                    Don't have an account? <Link  to="/joinus">Join Us</Link>
                </h3>
                
             
       
             </div>
        
      </Box>
    </div>
 
   
  );
};

export default Login;