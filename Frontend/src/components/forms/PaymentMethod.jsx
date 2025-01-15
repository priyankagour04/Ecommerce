import React, { useState } from 'react'

const PaymentMethod = () => {

      const [paymentMethod, setPaymentMethod] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: "",
      });

    const handlePaymentChange = (e) => {
        setPaymentMethod({
          ...paymentMethod,
          [e.target.name]: e.target.value,
        });
      };

  return (
   <>
  <form className="space-y-6 border border-gray-500 p-5 shadow-md rounded-md">
     
     <div className="pb-6">
       <div className="text-2xl font-semibold">Payment Method</div>
       <div className="space-y-4">
         <div>
           <label className="block text-sm font-medium" htmlFor="cardNumber">
             Card Number
           </label>
           <input
             id="cardNumber"
             name="cardNumber"
             type="text"
             value={paymentMethod.cardNumber}
             onChange={handlePaymentChange}
             className="w-full p-2 mt-1 border rounded"
             placeholder="Enter card number"
           />
         </div>
         <div className="grid grid-cols-2 gap-4">
           <div>
             <label
               className="block text-sm font-medium"
               htmlFor="expirationDate"
             >
               Expiration Date
             </label>
             <input
               id="expirationDate"
               name="expirationDate"
               type="text"
               value={paymentMethod.expirationDate}
               onChange={handlePaymentChange}
               className="w-full p-2 mt-1 border rounded"
               placeholder="MM/YY"
             />
           </div>
           <div>
             <label className="block text-sm font-medium" htmlFor="cvv">
               CVV
             </label>
             <input
               id="cvv"
               name="cvv"
               type="text"
               value={paymentMethod.cvv}
               onChange={handlePaymentChange}
               className="w-full p-2 mt-1 border rounded"
               placeholder="Enter CVV"
             />
           </div>
         </div>
       </div>
     </div>
   </form>
   </>
  )
}

export default PaymentMethod