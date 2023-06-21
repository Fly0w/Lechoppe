// florian.budniewski@hotmail.com
// dofuspowa62300xD!

'use client'
import Link from "next/link"
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation"
import AuthContext from "@/modules/AuthContext";

const LoginForm = ({  }) => {
  const [email, setEmail] = useState("florian.budniewski@hotmail.com")
  const [password, setPassword] = useState("dofuspowa62300xD!")
  const [loginStatus, setLoginStatus] = useState("")

  const router = useRouter()
  const { login } = useContext(AuthContext)

  useEffect(() => {

    },[])

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  };

  const handleSubmit = (e) => {
    console.log("Sending")
    e.preventDefault(); //Preventing browser auto refresh
    try {
      const loginUser = login({email : email, password: password})
      console.log(loginUser)
      setLoginStatus(loginUser)

      if(loginUser) {
        router.push("/")
      } 
    } catch (error) {
      console.log(error)
    }
   };


  return (
    <section className="form_login">
      <h1 className="text-center text-4xl">Login</h1>
      <p className="text-center text-red-600 mb-1">{loginStatus}</p>
      <form 
        onSubmit={(e) => handleSubmit(e)}
        className="mt-5 w-full flex-col"
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <label>
          <div className="mb-7">
            <p className="font-semibold text-base text-gray-700 mb-1">Email adress :</p>
            <input
            value={email}
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
            value={password}
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

export default LoginForm