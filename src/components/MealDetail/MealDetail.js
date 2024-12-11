import React from "react";
import Modal from "../UI/Modal";

const MealDetail = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>Hi, this is my meal detail</div>
    </Modal>
  );
};

export default MealDetail;
