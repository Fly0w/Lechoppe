'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const SignupForm = ({  }) => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")
  
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  const [validUsername, setValidUsername] = useState(false)

  const [loginStatus, setLoginStatus] = useState("")

  const router = useRouter()

  useEffect(() => {
    passwordCheck(password1, password2)
    },[password1, password2])

  useEffect(() => {
    emailCheck(email)
    },[email])

  useEffect(() => {
    usernameCheck(username)
    },[username])

  const usernameCheck = (username) => {
    const usernameValid = (username.length >= 4 && password1.length <= 15);

    if (usernameValid){
      setValidUsername(true)
    } else {
      setValidUsername(false)
    }
  }

  const emailCheck = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email);

    if (emailValid){
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  const passwordCheck = (password1, password2) => {
    const specialCharRegex = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    const numberRegex = /(?=.*?[0-9])/;
    const caseRegex = /^(?=.*[a-z])(?=.*[A-Z])/;

    const hasSpecialChar = specialCharRegex.test(password1);
    const hasNumber = numberRegex.test(password1);
    const hasCase = caseRegex.test(password1);
    const isLongEnough = (password1.length >= 6 && password1.length <= 64);
    const isPasswordMatch = (password1 === password2)

    const spec = document.getElementById("passwordSpec");
    const numb = document.getElementById("passwordNumber");
    const casing = document.getElementById("passwordCase");
    const pwlength = document.getElementById("passwordLength");

    if (!hasSpecialChar){
      spec.style.color = "rgb(185, 65, 105)";
    }else{
      spec.style.color = "rgb(0, 135, 36)";
    }
    if (!hasNumber){
      numb.style.color = "rgb(185, 65, 105)";
    }else{
      numb.style.color = "rgb(0, 135, 36)";
    }
    if (!hasCase){
      casing.style.color = "rgb(185, 65, 105)";
    }else{
      casing.style.color = "rgb(0, 135, 36)";
    }
    if (!isLongEnough){
      pwlength.style.color = "rgb(185, 65, 105)";
    }else {
      pwlength.style.color = "rgb(0, 135, 36)";
    }

    if(isPasswordMatch){
      setPasswordMatch(true)
    }else {
      setPasswordMatch(false)
    }
      
    if (hasSpecialChar && hasNumber && hasCase && isLongEnough){
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault(); //Preventing browser auto refresh
    console.log("Sending")

    setLoginStatus("")

      try {
        if(validEmail && validUsername && validPassword && passwordMatch){
          //Send the info to the db to create user's credentials
          const response = await fetch("/api/users/sign-up", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              username: username,
              password: password1
            })
          });
          const data= await response.json()  
          console.log(data)
          setLoginStatus(data)

          if(response.ok){
            router.push("/")
          }
        } else {
          alert("Invalid information. Please correct your information")
        }

      } catch (error) {
 
        console.log(error)
      }
    
    }
    


  return (
    <section className="form_signup">
      <h1 className="text-center text-4xl font-montserrat">
        Create your account !
      </h1>
      <p className="text-center text-red-600 mb-1">{loginStatus}</p>
      <form 
        onSubmit={(e) => handleSubmit(e)}
        className="mt-5 w-full flex-col"
      >
        <label>
          <div className="mb-7">
            <p className="font-semibold text-base text-gray-700 mb-1">Email adress :</p>
            <input
              type="text"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your Email"
              required
              className="form_textarea w-full"
            />          
          </div>
        </label>

        <label>
          <div className="mb-7">
            <p className="font-semibold text-base text-gray-700 mb-1">Username : <span className="text-xs text-slate-500 font-normal">(Between 4 and 15 characters)</span></p>
            <input
              type="text"
              onChange={(event) => setUsername(event.target.value)}
              placeholder="X_x_G@m3rS_x_X"
              required
              className="form_textarea w-full"
            />          
          </div>
        </label>

        <label>
          <div className="mb-7">
            <p className="font-semibold text-base text-gray-700 mb-1">Password :</p>
            <input
              type="password"
              onChange={(event) => setPassword1(event.target.value)}
              placeholder="Your Password"
              required
              className="form_textarea w-full"
            />
            <div className="flex flex-rax flex-nowrap mb-5 ml-4">
              <p className="text-xs text-slate-500 mr-5">Password Requirements</p>
              <ul className="flex flex-raw text-xs text-center justify-evenly">
                <li id='passwordSpec' className="mx-2" style={{"color": "rgb(185, 65, 105)"}}>Special character</li>
                <li id='passwordNumber' className="mx-2" style={{"color": "rgb(185, 65, 105)"}}>Number</li>
                <li id='passwordCase' className="mx-2" style={{"color": "rgb(185, 65, 105)"}}>UPPERCASE and lowercase </li>
                <li id='passwordLength' className="mx-2" style={{"color": "rgb(185, 65, 105)"}}>Length between 6 and 64 characters </li>
              </ul>
            </div>          
            <p className="font-semibold text-base text-gray-700 mb-1">Password Verification:</p> 
            <input
              type="password"
              onChange={(event) => setPassword2(event.target.value)}
              placeholder="Please enter the same Password"
              required
              className="form_textarea w-full"
            />           
          </div>
        </label>
        
        
        <div className="my-3 flex flex-raw justify-center">
          <button className="signup_btn" type="submit">Register</button>
        </div>
      </form>

      <Link href="/log-in">
        <p className="mt-5 flex justify-center font-montserrat hover:underline">Do you already have an account ?</p>
      </Link>


    </section>
  )
}

export default SignupForm