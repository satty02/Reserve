import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';


function PaymentForm() {
    const Navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    
    const handlePayment = async (e) => {
      e.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
  
      if (error) {
        console.error(error);
      } else {
        // Handle successful payment here
        console.log(paymentMethod);
        Navigate('/bookings');
      }
    };
  
    return (
      <form className='absolute w-full flex flex-col justify-evenly top-2 pl-1' onSubmit={handlePayment}>
        <CardElement />
        <button className='absolute top-8 left-[35%] px-3' type="submit">Pay</button>
      </form>
    );
  }
  
  export default PaymentForm