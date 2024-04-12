import React,{useState} from "react";
import axios from "axios";

const Signup=()=>{
    const[user,setUser]=useState[{name:"",email:"",password:"",confirmPassword:""}]

    function updateUser(e){
        let key=e.target.value
        setUser({...user,[key]:e.target.value})
    }

// signup Api-https://instagram-express-app.vercel.app/api/auth/signup






}



function implementSignup(){
     return(
        <div>
            <h1>Signup</h1>
            <form>
                <input type="text" placeholder="Name" name="name"/>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="password" placeholder="Confirm Password" name="name"/>
                <button>Submit</button>
             </form>
        </div>
    )
}










//const[name,setName]=useState("");
// const[email,setEmail]=useState("");
// const[password,setPassword]=useState("");
// const[confirmpassword,setConfirmPassword]=useState("");


// function updateName(e){
//     setUser({...user,name:e.target.value})
// }

// function updateEmail(){
//     setUser({...user,email:e.target.value})
// }

// function updatePassword(){
//     setUser({...user,password:e.target.value})
// }

// function updateConfirmPassword(e){
//     setUser({...user,confirmPassword:e.target.value})
// }


