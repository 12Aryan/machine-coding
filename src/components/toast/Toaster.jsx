import React, { useEffect, useState } from "react";

const Toaster = ({ message, delay = 2000, setMessage }) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (message) {
      setShowToast(true);
      const timeoutId = setTimeout(() => {
        setShowToast(false);
        setMessage([])

      }, delay);

     
      return () => clearTimeout(timeoutId);
    }
  }, [message, delay]);

  const handleClose = () => {
    setShowToast(false);
  };

  const styles = {
    'success':{
      backgroundColor: 'green'
    }, 
    'error':{
      backgroundColor: 'red'
    }, 
    'warning':{
      backgroundColor: 'orange'
    },   
    'info':{
      backgroundColor: 'blue'
    },   


  }

  return (
    <>
      {showToast &&
        message.map((item, index) => (
          <>
            <div
              style={{
                position: "absolute",
                top: `${index*50 + 10}px`,
                right: `50px`,
                padding: "12px 24px",
                minWidth: "250px",
                width: "350px",
                maxWidth: "400px",
                display: "flex",
                justifyContent: "space-between",
                color: "white",
                borderRadius: "5px",
                ...styles[item]
              }}
            >
              <span>{item}</span>
              <div
                onClick={handleClose}
                style={{ cursor: "pointer", marginLeft: "10px" }}
              >
                &times;
              </div>
            </div>
          </>
        ))}

        
         
    </>
  );
};

export default Toaster;
