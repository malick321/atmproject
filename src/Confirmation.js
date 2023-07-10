import React from "react";
import ATMEmpty from "./Atm";
import ATMCard from "./Atmcard";
import Details from "./Atmdetails";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/'); // Navigate to the home page
  };
  const storedCardDetails = localStorage.getItem("cardDetails");
  const cardDetails = storedCardDetails ? JSON.parse(storedCardDetails) : null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: "#ccc",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          height: "90%",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#e4edf0",
        }}
      >
        {/* First Structure */}
        <div
          style={{
            width: "45%",
            height: "90%",
            position: "relative",
            backgroundColor: "#ffff",
            borderRadius: "8px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
            padding: "20px",
          }}
        >
          <div
            style={{ backgroundColor: "#27113a", width: "100%", height: "40%" }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "5%",
              left: "40%",
              border: "1px solid red",
            }}
          >
            <ATMEmpty style={{ width: "80%", height: "60%" }} />
          </div>
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "10%",
              border: "1px solid red",
            }}
          >
            {cardDetails && <ATMCard cardDetails={cardDetails} />}
          </div>
          <div style={{ position: "absolute", top: "60%", left: "15%" }}>
            {cardDetails && <Details cardDetails={cardDetails} />}
          </div>
        </div>

        {/* Second Structure */}
        <div
          style={{
            width: "45%",
            height: "90%",
            position: "relative",
            backgroundColor: "#ffff",
            borderRadius: "8px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
            padding: "20px",
          }}
        >
          <div
            style={{ backgroundColor: "#27113a", width: "100%", height: "40%" }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "5%",
              left: "40%",
              border: "1px solid red",
            }}
          >
            <ATMEmpty style={{ width: "80%", height: "60%" }} />
          </div>
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "10%",
              border: "1px solid red",
            }}
          >
            {cardDetails && <ATMCard cardDetails={cardDetails} />}
          </div>
          <div
            style={{
              position: "absolute",
              top: "60%",
              width: "70px",
              height: "70px",
              left: "45%",
              borderRadius: "50%",
              backgroundColor: "purple",
            }}
          >
            <svg
              style={{ position: "absolute", top: "20%", left: "20%" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              width="40px"
              height="40px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              top: "70%",
              left: "40%",
              width: "250px",
              height: "200px",
            }}
          >
            {/* Thank You */}
            <p style={{ fontWeight: "600", fontSize: "20px", marginTop: "20px" }}>
              THANK YOU!
            </p>
            <p style={{ marginTop: "10px", marginLeft: "-40px", fontSize: "16px" }}>
              We have added your card details.
            </p>
          </div>
          <div style={{position: "absolute",
              top: "85%",
              left: "40%",
              width: "250px",
              height: "200px",}}>
            <button style={{
              width:"60%",
              height:"20%",
              color:"white",
              fontSize:"large",
              borderRadius:"5px",backgroundColor:"#27113a"
            }} onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
