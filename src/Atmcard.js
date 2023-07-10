import React from "react";

const ATMCard = ({ cardDetails }) => {
  if (!cardDetails) {
    return <div>No card details available</div>;
  }

  const formattedCardNumber = cardDetails.cardNumber
    .split("")
    .map((char, index) => {
      if (index > 0 && index % 16 === 0) return ` ${char}`;
      return char;
    })
    .join("");

  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "14%",
        width: "430px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "120%",
          background:
            "linear-gradient(to bottom right, #6a3ad4 45%, #d06b90, #8085cb, purple)",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "white",
            top: "7%",
            left: "7%",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "15px",
            height: "16px",
            borderRadius: "50%",
            border: "2px solid white",
            top: "10%",
            left: "17%",
          }}
        ></div>
        {/* Add content for the ATM card */}
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            left: "5%",
            display: "flex",
            flexDirection: "row",
            gap: "5px",
            flexWrap: "wrap",
            maxWidth: "80%",
          }}
        >
          {[...Array(16)].map((_, index) => (
            <React.Fragment key={index}>
              {index > 0 && index % 4 === 0 && (
                <div style={{ width: "4px" }}></div>
              )}
              <input
                type="text"
                name="cardNumberInput"
                style={{
                  height: "5px",
                  width: "5px",
                  borderRadius: "50%",
                  padding: "3px",
                  background: "none",
                  outline: "none",
                  textAlign: "center",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "bold",
                }}
                maxLength="1"
                readOnly
                value={formattedCardNumber[index] || ""}
              />
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            top: "85%",
            left: "10%",
            position: "absolute",
            color: "white",
            borderRadius: "3px",
          }}
        >
          <span>{cardDetails.cardholderName}</span>
        </div>
        <div
          style={{
            top: "85%",
            left: "70%",
            position: "absolute",
            color: "white",
            fontStyle: "oblique",
            float: "right",
          }}
        >
          <span>{`${cardDetails.expiryMonth}/${cardDetails.expiryYear}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ATMCard;
