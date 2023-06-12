const PaymentHistoryCard = ({ info, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          src={info?.classImage}
          alt=""
          className="w-[12rem] mx-auto rounded-[3px]"
        />
      </td>
      <td>{info?.className}</td>
      <td>{info?.price}$</td>
      <td>{info?.transactionId}</td>
      <td>{info?.status}</td>
    </tr>
  );
};

export default PaymentHistoryCard;
