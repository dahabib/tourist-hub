import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IiOqZEmWklGwXuIYLgurslrlO2KXmlJmGUhzRMYLxKqigVMBkvBxV57DUVnpkApB4H1A2f6c3wlngTZE8MWGlFN00GnH6DtYb');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;