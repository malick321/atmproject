import React, { useState } from "react";

const Details = ({
  handleSubmit,
  handleInputChange,
  setCardDetails,
  cardDetails,
  handleFormSubmit,handleExpiryMonthChange,handleExpiryYearChange,
}) => {
  

 
  return (
    <div style={{ flex: "1", padding: "20px", display: "flex" }}>
      {/* Second Div */}
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={handleFormSubmit}
          style={{ maxWidth: "400px", width: "100%" }}
        >
          {/* Add form elements */}
          <label htmlFor="cardholderName">Cardholder Name:</label>
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={cardDetails.cardholderName}
            onChange={handleInputChange}
            style={{
              display: "block",
              marginTop: "5px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px",
              width: "100%",
            }}
          />

          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            style={{
              display: "block",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              padding: "5px",
              width: "100%",
            }}
          />
          <span
            id="cardNumberError"
            style={{
              color: "red",
              fontSize: "12px",
              marginTop: "5px",
              display: "block",
            }}
          ></span>

          <div style={{ display: "flex", gap: "5px", marginBottom: "15px" }}>
            <div>
              <label htmlFor="expiryDateMM" style={{ fontSize: "12px" }}>
                Expiry Date:
              </label>
              <div>
                <input
                  type="text"
                  id="expiryDateMM"
                  name="expiryDateMM"
                  value={cardDetails.expiryMonth}
                  onChange={handleExpiryMonthChange}
                  style={{
                    display: "block",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    padding: "5px",
                    width: "50px",
                  }}
                />
                <span
                  id="expiryMonthError"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "4px",
                    display: "block",
                  }}
                ></span>
              </div>
            </div>
            <div>
              <label htmlFor="expiryDateYY" style={{ fontSize: "12px" }}>
                (MM)(YY):
              </label>
              <div>
                <input
                  type="text"
                  id="expiryDateYY"
                  name="expiryDateYY"
                  value={cardDetails.expiryYear}
                  onChange={handleExpiryYearChange}
                  style={{
                    display: "block",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    padding: "5px",
                    width: "50px",
                  }}
                />
                <span
                  id="expiryYearError"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "3px",
                    marginLeft: "-40px",
                    display: "block",
                  }}
                ></span>
              </div>
            </div>
            <div>
              <label htmlFor="cvc" style={{ marginLeft: "10px" }}>
                CVC:
              </label>
              <div>
                <input
                  type="text"
                  id="cvc"
                  name="cvc"
                  value={cardDetails.cvc}
                  onChange={handleInputChange}
                  style={{
                    display: "block",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginLeft: "10px",
                    padding: "5px",
                    width: "50px",
                  }}
                  maxLength="3"
                />
                <span
                  id="cvcError"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "5px",
                    display: "block",
                  }}
                ></span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              height: "30px",
              color: "white",
              borderRadius: "5px",
              backgroundColor: "#27113a",
            }}
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
