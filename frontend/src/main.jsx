import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51SF9CSEk57Ad89Pv7fP2nuvcX9X6DN7ZzjmK9TIMhmWNpx6jZUu1uEqcPUU2mp3yYrQY3xeCFr57APaXKEnl8mMz00vfJ59n4l"
);
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
    <Elements stripe={stripePromise}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </Elements>
    
  
);