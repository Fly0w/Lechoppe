'use client'

/*
TO DO:
- Shipping adress same as customer info
- Add prices for different shipping methods
- Payment info (credit card, paypal ...)
- Order confirmation
- Jauge de progression
- Order success page
- Styling
- Checkout component
*/

import { useEffect, useContext, useState } from "react"
import CartContext from "@/modules/CartContext";
import Checkout from "@/components/Checkout";


export default function CheckoutPage() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [country, setCountry] = useState("")
  const [shippingMethod, setShippingMethod] = useState("")

  const [customerInfo, setCustomerInfo] = useState(false)
  const [shippingInfo, setShippingInfo] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState(false)

  const countryList = ["Japan", "France", "United States of America","Brasil", "Spain", "Italy", "Switzerland", "Portugal", "Vietnam", "China", "India", "Australia", "New-Zealand", "Germany", "England", "Poland"]
  
  const { toggleCart, setToggleCart, cartItems,removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  useEffect(() => {
    setToggleCart(false)

  }, [])
  
  return (
    <div className="border flex flex-col align-middle justify-center items-center content-center mx-5 px-6 bg-white font-montserrat">
      <h1 className="text-4xl my-5">Checkout</h1>
      <div className="flex flex-raw justify-between content-between w-full">
        <div className=" w-4/6">
          
          <form 
            onSubmit={(e) => handleSubmit(e)}
            className="mt-5 w-full flex-col"
            onKeyDown={(e) => handleKeyPress(e)}
          >
{/* Customer Info */}
  <>
            <div className="text-xl font-bold border-t-2 border-black cursor-pointer" onClick={() => {setCustomerInfo(!customerInfo); setShippingInfo(false); setPaymentInfo(false)}}>
              <h2 className="my-3">Customer Info</h2>
            </div>
            
            {customerInfo
            ?
            <div>
              <label>
                <div className="mb-7">
                  <p className="font-semibold text-base text-gray-700 mb-1">* Email adress :</p>
                  <input
                    type="text"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    required
                    className="form_textarea w-full"
                  />          
                </div>
              </label>

              <div className="flex flex-raw">
                <label>
                  <div className="mb-7 mr-8">
                    <p className="font-semibold text-base text-gray-700 mb-1">* First Name :</p>
                    <input
                      type="text"
                      onChange={(event) => setFirstName(event.target.value)}
                      placeholder="First Name"
                      required
                      className="form_textarea w-full"
                    />
                  </div>
                </label>    
                <label>
                  <div className="mb-7">    
                    <p className="font-semibold text-base text-gray-700 mb-1">* Last Name :</p>
                    <input
                      type="text"
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder="Last Name"
                      required
                      className="form_textarea w-full"
                    /> 
                  </div>        
                </label>
              </div>

              <label>
                <div className="mb-7">
                  <p className="font-semibold text-base text-gray-700 mb-1">* Country :</p>
                <select 
                  className="h-12 border border-slate-400"  
                  onChange={(event) => setCountry(event.target.value)}>
                    {countryList.sort().map((country) => <option value={country}>{country}</option>)}
                </select>
                </div>
              </label>

              <div className="flex flex-raw">
                <label>
                  <div className="mb-7 mr-8">
                    <p className="font-semibold text-base text-gray-700 mb-1">* ZIP Code :</p>
                    <input
                      type="text"
                      onChange={(event) => setFirstName(event.target.value)}
                      placeholder="ZIP code"
                      required
                      className="form_textarea w-full"
                    />
                  </div>
                </label>    
                <label>
                  <div className="mb-7">    
                    <p className="font-semibold text-base text-gray-700 mb-1">* City :</p>
                    <input
                      type="text"
                      onChange={(event) => setLastName(event.target.value)}
                      placeholder="City"
                      required
                      className="form_textarea w-full"
                    /> 
                  </div>        
                </label>
              </div>

              <label>
                <div className="mb-7">    
                  <p className="font-semibold text-base text-gray-700 mb-1">* Address Line 1 :</p>
                  <input
                    type="text"
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Your address"
                    required
                    className="form_textarea w-full"
                  /> 
                </div>        
              </label>

              <label>
                <div className="mb-7">    
                  <p className="font-semibold text-base text-gray-700 mb-1">Address Line 2 :</p>
                  <input
                    type="text"
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Your address"
                    className="form_textarea w-full"
                  /> 
                </div>        
              </label>

              <div className="flex justify-center mb-5">
                <button className="bg-slate-700 border-2 border-slate-100 rounded-lg text-white uppercase text-lg py-1 px-4" onClick={() => {setCustomerInfo(false); setShippingInfo(true)}}>Continue</button>
              </div>

              
            </div>
            : <></>
            }
  </>          
{/* Shipping Info */}
  <>
            <div className="text-xl font-bold border-t-2 border-black cursor-pointer" onClick={() => {setShippingInfo(!shippingInfo); setCustomerInfo(false); setPaymentInfo(false)}}>
              <h2 className="my-3">Shipping Info</h2>
            </div>

            {shippingInfo
            ?
            <div>
                <div className="mb-7">
                  <p className="font-semibold text-base text-gray-700 mb-1">* Shipping method :</p>
                  <div className="ml-8 flex flex-col ">
                    <div>
                      <input
                        type="radio"
                        id="Premium shipping"
                        value="Premium shipping"
                        onChange={(event) => setShippingMethod(event.target.value)}
                        name="Shipping"
                        className="mr-3"
                      /> 
                      <label htmlFor="Premium shipping">Premium shipping</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Fast shipping"
                        value="Fast shipping"
                        onChange={(event) => setShippingMethod(event.target.value)}
                        name="Shipping"
                        className="mr-3"
                      /> 
                      <label htmlFor="Fast shipping">Fast shipping</label>                      
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Standard shipping"
                        value="Standard shipping"
                        onChange={(event) => setShippingMethod(event.target.value)}
                        name="Shipping"
                        className="mr-3"
                      /> 
                      <label htmlFor="Standard shipping">Standard shipping</label>                      
                    </div>                    
                  </div>
                </div>

              <div className="flex justify-center mb-5">
                <button className="bg-slate-700 border-2 border-slate-100 rounded-lg text-white uppercase text-lg py-1 px-4 " onClick={() => {setShippingInfo(false); setPaymentInfo(true)}}>Continue</button>
              </div>
            </div>
            : <></>
            }
  </>
{/* Payment Info */}
  <>          
            <div className="text-xl font-bold border-t-2 border-black cursor-pointer" onClick={() => {setPaymentInfo(!paymentInfo); setShippingInfo(false); setCustomerInfo(false)}}>
              <h2 className="my-3">Payment Info</h2>
            </div>
            {paymentInfo
            ?
            <div>
              <label>
                <div className="mb-7">
                  <p className="font-semibold text-base text-gray-700 mb-1">* Email adress :</p>
                  <input
                    type="text"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    required
                    className="form_textarea w-full"
                  />          
                </div>
              </label>

              <div className="flex justify-center mb-5">
                <button className="bg-slate-700 border-2 border-slate-100 rounded-lg text-white uppercase text-lg py-1 px-4 " onClick={() => console.log("go to payment page")}>Continue</button>
              </div>

              
            </div>
            : <></>
            }
  </>
          </form>
        </div>
        
        <div className="border flex flex-col mx-5 w-2/6">
          <Checkout />
        </div>
        
      </div>
      
      
    </div>
    
  )
}
