import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button,Box, Step, Stepper} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import styles from "./CreateAccount.module.css";
import { Link } from "react-router-dom";
function CreateAccount() {
  const data = ["", "or", ""];
  return (
    <div>
      <Box sx ={{ minwidth: 275, maxwidth: 680 }} className = {styles.card}>
        <div className={styles.container}>
        <TwitterIcon sx={{ color: "rgb(25 161 242)", fontSize: 45 }} />
        <h1 className={styles.h1}>Join Twitter today</h1>
        
        <Button className={styles.btn} variant="contained">
          {" "}
          <GoogleIcon sx={{mr: 1}} /> Sign Up with Gmail
        </Button>
        
        <Button className={styles.btn} variant="contained">
          <AppleIcon sx={{mr: 1}} />
          Sign Up with Apple
        </Button>
        
        
          
          <Stepper className={ styles.stepper}>
            {data.map((label) => (
              <Step   key={label}>{label} </Step>
            ))}
          </Stepper>
         
          <form className={styles.container}>
            
            <Link className={styles.container} to="/signup">
              <Button className={styles.btn} variant="contained">
                Create account
              </Button>
              </Link>
            <br />
          
            </form>
            <p className={styles.p}>
              By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy, </a>including Cookie Use.
            </p>
          
         
            <h3 className={styles.h3}>Have an account already? <Link  to="/">SignIn</Link></h3>
         
        
      </div>
      </Box>
    </div>
  );
}

export default CreateAccount;