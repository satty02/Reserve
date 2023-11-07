import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import PaymentForm from './paymentForm';


const stripePromise = loadStripe('pk_test_51O8gw8SJ1VpRftu2fxU5en1msUj1gbkhzWknuTo6r0oKNiA4mQY9wRvGvevW2IqWcGco1rrCouWaszlH81voONAk00pSh6vl8C');


function Payments() {
  const [viewPaymentForm, setViewPaymentForm] = useState(false);

  const handleClick = ()=>{
    setViewPaymentForm(!viewPaymentForm);
  }

  return (
    <>
    <div className="absolute top-[20%] left-[825px] rounded-[5px] bg-white w-[229px] h-[78px] shadow-2xl">
                <div className="absolute h-[1.66%] w-full top-[10%] left-[10%] text-base font-medium inline-block">
                    Fare Details
                </div>
                <div className="absolute h-[1.66%] w-[7.64%] top-[5%] left-[70%] font-medium text-gray-100 inline-block">
                    Amount
                </div>
                <div className="absolute h-[1.66%] w-full top-[44%] left-[3%] text-[7px] font-medium text-black inline-block">
                    Taxes will Be Calculated during Payments</div>
                <div className="absolute h-[1.66%] w-full top-[37%] left-[30%] text-base font-medium text-center inline-block">
                    ₹ 750.00
                </div>
                <button onClick={handleClick} className="absolute  top-[70%] rounded-4xs left-[25%] text-2xs font-medium bg-orangered text-white text-center ">
                Proceed to Book
            </button>
                
      </div>
      {
        viewPaymentForm && <div className='absolute top-[50%] left-[825px] rounded-[5px] bg-white w-[229px] h-[78px] shadow-2xl'>  
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </div>
      }
      

    </>
  );
}

export default Payments;
