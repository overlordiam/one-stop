import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price*100;
  const publishableKey = "pk_test_51HD4CYAvzXftaa0su4jxFyuPUpPlA8ChsnI1gjuIq7HVQAu92YY2DIMdeZH0CHImjtwwd9ahsIq6FYyivhdNHn0M00iJSYvpbO";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label = "Pay Now"
      name = "Crwn Clothing Ltd."
      billingAddress
      shippingAddress
      image = "https://svgshare.com/i/CUz.svg"
      description = {`Your total is $${price}`}
      amount = {priceForStripe}
      panelLabel = "Pay Now"
      token = {onToken}
      stripeKey = {publishableKey}
      />
  );
};

export default StripeCheckoutButton;
