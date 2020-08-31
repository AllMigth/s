import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_lUSrwZbNaEeIj7kml4WTXqdC00VYLvERQs")
  }
  return stripePromise
}