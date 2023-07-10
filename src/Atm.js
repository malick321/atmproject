import React from "react";

const ATMEmpty = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "20%",
        width: "22%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "120%",
          backgroundColor: "#ccc",

          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "#2e2e2f",
            marginTop: "18px",
            width: "100%",
            height: "20%",
            borderRadius: "5px",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "10%",
            backgroundColor: "#acb4bc",
            width: "80%",
            height: "18%",
            borderRadius: "5px",
          }}
        >
          <input
            style={{
              borderRadius: "50%",
              width: "8px",
              border: "1px solid white",
              height: "8px",
              position:"absolute",
              top:"20%",
              left:"90%"
            }}
          />
          <input
            style={{
              borderRadius: "50%",
              width: "8px",
              position:"absolute",
              top:"20%",
              left:"85%",
              border: "1px solid white",
              height: "8px",
            }}
          />
          <input
            style={{
              borderRadius: "50%",
              width: "8px",
              position:"absolute",
              top:"20%",
              left:"80%",
              border: "1px solid white",
              height: "8px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ATMEmpty;
