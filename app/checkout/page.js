'use client'

/*
TO DO:
- Shipping adress same as customer info
- Order confirmation
- Jauge de progression
- Order success page
- Styling
- Checkout component
*/

import { useEffect, useContext, useState } from "react"
import CartContext from "@/modules/CartContext";
import Checkout from "@/components/Checkout";
import moment from "moment";


export default function CheckoutPage() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [country, setCountry] = useState("")
  const [zip, setZip] = useState("")
  const [city, setCity] = useState("")
  const [adress1, setAdress1] = useState("")
  const [adress2, setAdress2] = useState("")

  const [shippingMethod, setShippingMethod] = useState({method: "", price: 0})

  const [payment, setPayment] = useState("")

  const [totalPrice, setTotalPrice] = useState(0)
  const [order, setOrder] = useState({})

  const [customerInfo, setCustomerInfo] = useState(true)
  const [shippingInfo, setShippingInfo] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState(false)
  const [isButtonClicked, setIsButtonClicked] = useState(1)

  const countryList = ["Japan", "France", "United States of America","Brasil", "Spain", "Italy", "Switzerland", "Portugal", "Vietnam", "China", "India", "Australia", "New-Zealand", "Germany", "England", "Poland"]
  
  const { setToggleCart, cartItems,removeFromCart, clearCart, increaseQty, decreaseQty } = useContext(CartContext);

  useEffect(() => {
    setToggleCart(false)
    calculatePrice()
    createOrder()
  }, [])

  useEffect(() => {
    createOrder()
  }, [email, firstName, lastName, country, zip, city, adress1, adress2, shippingMethod, totalPrice, payment, cartItems ])

  useEffect(() => {
    console.log(totalPrice)
  }, [totalPrice])

  useEffect(() => {
    console.log(order)
  }, [order])

  const calculatePrice= () => {
    console.log(cartItems) 
    let price = 0;
    const map = cartItems.map((item) => price += item.price * item.quantity)
    price += shippingMethod.price

    setTotalPrice(price)
  }

  const createOrder = () => {
    setOrder({
      info : 
        {
          email: email,
          firstName: firstName,
          lastName: lastName,
          country: country,
          zip: zip,
          city: city,
          adress1: adress1,
          adress2: adress2
        },
      items : cartItems,
      shippingMethod : shippingMethod,
      payment : payment,
      totalPrice : totalPrice + shippingMethod.price,
      date : moment().format("MM/DD/YYYY"),
      status : "in process",   
    })
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  };

  return (
    <div className="border flex flex-col align-middle justify-center items-center content-center mx-5 px-6 bg-white font-montserrat">
      <h1 className="text-4xl my-5">Checkout</h1>
      <div className="border flex flex-raw  justify-between content-between w-full">
        <div className="w-4/6 mx-5">
          
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
                    {countryList.sort().map((country, key) => <option key={key} value={country}>{country}</option>)}
                </select>
                </div>
              </label>

              <div className="flex flex-raw">
                <label>
                  <div className="mb-7 mr-8">
                    <p className="font-semibold text-base text-gray-700 mb-1">* ZIP Code :</p>
                    <input
                      type="text"
                      onChange={(event) => setZip(event.target.value)}
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
                      onChange={(event) => setCity(event.target.value)}
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
                    onChange={(event) => setAdress1(event.target.value)}
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
                    onChange={(event) => setAdress2(event.target.value)}
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
                        onChange={(event) => setShippingMethod({method: event.target.value, price: 800})}
                        name="Shipping"
                        className="mr-3"
                      /> 
                      <label htmlFor="Premium shipping">Premium shipping <span className="text-sm text-slate-400 italic">(+ 800y)</span></label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Fast shipping"
                        value="Fast shipping"
                        onChange={(event) => setShippingMethod({method: event.target.value, price: 400})}
                        name="Shipping"
                        className="mr-3"
                      /> 
                      <label htmlFor="Fast shipping">Fast shipping <span className="text-sm text-slate-400 italic">(+ 400y)</span></label>                      
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="Standard shipping"
                        value="Standard shipping"
                        onChange={(event) => setShippingMethod({method: event.target.value, price: 0})}
                        name="Shipping"
                        className="mr-3"
                      /> 
                      <label htmlFor="Standard shipping">Standard shipping <span className="text-sm text-slate-400 italic">(FREE)</span></label>                      
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
                  <p className="font-semibold text-base text-gray-700 mb-1">* Payment Method :</p>
                  <div className="flex justify-around mb-5">
                    <div className={isButtonClicked !== 1 
                      ?"bg-slate-100 border-2 border-slate-300 rounded-lg text-black uppercase text-lg py-1 px-4" 
                      :"bg-slate-100 ring-4 ring-green-500 rounded-lg text-black uppercase text-lg py-1 px-4" } 
                      onClick={() => {setPayment("Creditcard"); setIsButtonClicked(1)}}>Credit Card</div>
                    <div className={isButtonClicked !== 2 
                      ?"bg-blue-800 border-2 border-slate-300 rounded-lg text-white uppercase text-lg py-1 px-4" 
                      :"bg-blue-800 ring-4 ring-green-500 rounded-lg text-white uppercase text-lg py-1 px-4" } 
                      onClick={() => {setPayment("Paypal"); setIsButtonClicked(2)}}>Paypal
                    </div>
                    <div className={isButtonClicked !== 3 
                      ?"bg-red-700 border-2 border-slate-300 rounded-lg text-white uppercase text-lg py-1 px-4" 
                      :"bg-red-700 ring-4 ring-green-500 rounded-lg text-white uppercase text-lg py-1 px-4" } 
                      onClick={() => {setPayment("Paypay"); setIsButtonClicked(3)}}>Paypay
                    </div>
                      
                  </div>        
                </div>
              </label>



              
            </div>
            : <></>
            }
  </>
          </form>
        </div>

        <div className="w-2/6 mx-5 flex flex-col items-center">
          <h1 className="font-bold text-xl">Invoice</h1>
          <Checkout totalPrice={order.totalPrice} shipping={order.shippingMethod}/>
        </div>
        
      </div>
      
      
    </div>
    
  )
}
