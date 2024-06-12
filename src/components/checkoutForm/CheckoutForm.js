import React, { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tab,
  Table,
  TableBody,
  Spinner,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Chip,
} from "@nextui-org/react";

export default function CheckoutForm() {
  const [id, setId] = useState(null);
  const [secret, setSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

    if (!clientSecret) {
      return;
    }

    setSecret(clientSecret);

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setId(paymentIntent.id);
    });

    // stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
    //   switch (paymentIntent.status) {
    //     case "succeeded":
    //       setMessage("Payment succeeded!");
    //       break;
    //     case "processing":
    //       setMessage("Your payment is processing.");
    //       break;
    //     case "requires_payment_method":
    //       setMessage("Please process the payment.");
    //       break;
    //     default:
    //       setMessage("Something went wrong.");
    //       break;
    //   }
    // });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `http://localhost:3000/thank-you?clientId=${id}&clientSecret=${secret}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        <Card
          isFooterBlurred
          radius="lg"
          className=" bg-no-repeat bg-center border-none bg-[url('https://images.unsplash.com/photo-1524824267900-2fa9cbf7a506?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
        >
          <CardFooter className="absolute bottom-0">
            <div className="flex flex-col">
              <h1 className=" text-white text-4xl font-bold mb-4">Modern Home</h1>
              <p className=" text-white text-2xl mb-4">
                <em>45000 PKR </em>
              </p>
              <hr className=" border-t border-white mb-4" />
              <p className=" text-white text-medium leading-6 tracking-wider">
                <em>Booked </em>for <em>250 guest</em>
              </p>
              <p className=" text-white text-medium leading-6 tracking-wider">
                <em>Tue, July 23, 2022 </em>
              </p>
            </div>
          </CardFooter>
        </Card>

        <div className=" bg-white p-8">
          <div className=" flex flex-col gap-4 border-b pb-4 mb-4">
            <h2 className=" text-lg">Receipt Summary</h2>
            <div>
              <Table hideHeader className="table w-full text-sm text-gray-600 mb-2">
                <TableHeader>
                  <TableColumn>Keys</TableColumn>
                  <TableColumn>Values</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key={1}>
                    <TableCell>249.50 x 2 nights</TableCell>
                    <TableCell className="price text-right">499.00 USD</TableCell>
                  </TableRow>
                  <TableRow key={2}>
                    <TableCell>Discount</TableCell>
                    <TableCell className="price text-right">0.00 USD</TableCell>
                  </TableRow>
                  <TableRow key={3}>
                    <TableCell>Subtotal</TableCell>
                    <TableCell className="price text-right">499.00 USD</TableCell>
                  </TableRow>
                  <TableRow key={4}>
                    <TableCell>Tax</TableCell>
                    <TableCell className="price text-right">47.41 USD</TableCell>
                  </TableRow>
                  <TableRow key={5} className="total text-lg font-bold">
                    <TableCell>Total</TableCell>
                    <TableCell className="price text-right">546.41 USD</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="payment-info">
            <h3 className="payment-heading text-base mb-4">Payment Information</h3>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <PaymentElement id="payment-element" />

              <Button
                className="text-medium font-medium"
                color="success"
                type="submit"
                disabled={isLoading || !stripe || !elements}
              >
                <span>{isLoading ? <Spinner size="sm" /> : "Book Securely"}</span>
              </Button>
              {/* Show any error or success messages */}
              {message && (
                <Chip color="danger" className="self-center">
                  {message}
                </Chip>
              )}
            </form>

            <p className="footer-text text-xs text-center mt-4">
              <i className="fas fa-lock"></i>
              Your credit card information is encrypted
            </p>
          </div>
        </div>
      </div>
    </div>
    // <form id="payment-form" onSubmit={handleSubmit}>
    //   <PaymentElement id="payment-element" options={paymentElementOptions} />
    //   <button disabled={isLoading || !stripe || !elements} id="submit">
    //     <span id="button-text">{isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}</span>
    //   </button>
    //   {/* Show any error or success messages */}
    //   {message && <div id="payment-message">{message}</div>}
    // </form>
  );
}
