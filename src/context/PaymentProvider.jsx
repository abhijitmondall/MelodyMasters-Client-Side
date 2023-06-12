import { createContext, useState } from "react";

export const PaymentContext = createContext("");

const PaymentProvider = ({ children }) => {
  const [info, setInfo] = useState("");

  const handlePayment = (info) => {
    setInfo(info);
  };

  const paymentInfo = {
    info,
    setInfo,
    handlePayment,
  };

  return (
    <PaymentContext.Provider value={paymentInfo}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;
