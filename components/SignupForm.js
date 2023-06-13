'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';

const SignupForm = ({  }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter();

  useEffect(() => {

    },[])


  const handleSubmit = async (e) => {
    console.log("Sending")
    e.preventDefault(); //Preventing browser auto refresh
    try {
      //Send the info to the db to create user's credentials
      const response = await fetch("/api/users/sign-up", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const data= await response.json()
        
      console.log(data)

      if(response.ok) {
        // router.push("/")
      } 
    } catch (error) {
      console.log(error)
    }
   };


  return (
    <section className="form_login">
      <h1 className="text-center text-4xl">
        Login
      </h1>
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
              placeholder="Email"
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
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
              className="form_textarea w-full"
            />           
          </div>

        </label>
        
        
        <div className="my-3 flex flex-raw justify-center">
          <button className="login_btn" type="Submit">Login</button>
          <Link href="/sign-up">
            <button className="signup_btn" onClick={() => console.log("Redirect Sign up")}>Sign up</button>
          </Link>
             
        </div>
      </form>

      <Link href="/">
        <p className="mt-5 flex justify-center font-montserrat hover:underline">I forgot my password</p>
      </Link>


    </section>
  )
}

export default SignupForm