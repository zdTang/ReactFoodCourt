import React from "react";
import Modal from "../UI/Modal";

const MealDetail = ({ onClose, detail }) => {
  return (
    <Modal onClose={onClose}>
      <div>
        <h1>{detail.name}</h1>
        <h2>{detail.des}</h2>
        <h3>{detail.price}</h3>
        <img alt={detail.name} src={detail.src} width={400} height={300} />
      </div>
    </Modal>
  );
};

export default MealDetail;
