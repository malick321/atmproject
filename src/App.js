import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Details from "./Atmdetails";
import ATMCard from "./Atmcard";
import LeftDiv from "./LeftDiv";
import ATMEmpty from "./Atm";
import ConfirmationPage from "./Confirmation";

const Layout = ({ cardDetails, setCardDetails, children }) => (
  <div style={{ display: "flex", height: "100vh",backgroundColor:"#ccc" }}>
    <LeftDiv />
    {children}
    <ATMCard cardDetails={cardDetails} setCardDetails={setCardDetails} />
    <ATMEmpty />
  </div>
);

const App = () => {
  const [cardDetails, setCardDetails] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryYear: "",
    expiryMonth: "",
    cvc: "",
  });
  const handleExpiryMonthChange = (e) => {
    let value = e.target.value;
    // Remove any non-digit characters
    value = value.replace(/\D/g, "");
    if (value.length <= 2) {
      handleInputChange({ target: { name: "expiryMonth", value } });
    }
  };

  const handleExpiryYearChange = (e) => {
    let value = e.target.value;
    // Remove any non-digit characters
    value = value.replace(/\D/g, "");
    if (value.length <= 2) {
      handleInputChange({ target: { name: "expiryYear", value } });
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Validate account number
    if (cardDetails.cardNumber.length !== 16) {
      isValid = false;
      document.getElementById("cardNumberError").textContent =
        "Account number must be 16 digits.";
    } else {
      document.getElementById("cardNumberError").textContent = "";
    }

    // Validate expiry month
    if (cardDetails.expiryMonth === "") {
      isValid = false;
      document.getElementById("expiryMonthError").textContent =
        "Expiry month is required.";
    } else {
      document.getElementById("expiryMonthError").textContent = "";
    }

    // Validate expiry year
    if (cardDetails.expiryYear === "") {
      isValid = false;
      document.getElementById("expiryYearError").textContent = "Cant be blank";
    } else {
      document.getElementById("expiryYearError").textContent = "";
    }

    // Validate cvc
    if (cardDetails.cvc === "") {
      isValid = false;
      document.getElementById("cvcError").textContent = "CVC is required.";
    } else {
      document.getElementById("cvcError").textContent = "";
    }

    return isValid;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(e);
      // Reset form fields
      setCardDetails({
        cardholderName: "",
        cardNumber: "",
        expiryYear: "",
        expiryMonth: "",
        cvc: "",
      });
    }
  };

  const navigate = useNavigate(); // Access the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      // Update the card number input fields
      const cardNumberInputs = document.querySelectorAll("input[name='cardNumberInput']");
      cardNumberInputs.forEach((input, index) => {
        if (index < value.length) {
          input.value = value[index];
        } else {
          input.value = "";
        }
      });
    }

    // Update the card details state
    setCardDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the card details (Add your validation logic here)
    const isValid = true; // Update with your validation logic
    if (isValid) {
      // Save card details to local storage
      localStorage.setItem("cardDetails", JSON.stringify(cardDetails));
      console.log("Card details saved to local storage:", cardDetails);
      navigate("/confirmation"); // Navigate to the confirmation page
    } else {
      // Display an error message or prevent navigation
      console.log("Invalid card details. Please check your inputs.");
    }
  };
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout cardDetails={cardDetails} setCardDetails={setCardDetails}>
            <Details
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              cardDetails={cardDetails}
              setCardDetails={setCardDetails}
              handleFormSubmit={handleFormSubmit}
              validateForm={validateForm}
              handleExpiryYearChange ={handleExpiryYearChange}
              handleExpiryMonthChange={handleExpiryMonthChange}
            />
          </Layout>
        }
      />
      <Route path="/confirmation" element={<ConfirmationPage cardDetails={cardDetails} />} />
    </Routes>
  );
};

export default App;
