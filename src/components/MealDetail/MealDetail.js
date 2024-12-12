import React from "react";
import Modal from "../UI/Modal";

const MealDetail = ({ onClose, detail }) => {
  return (
    <Modal onClose={onClose}>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <img
          alt={detail.name}
          src={detail.src}
          className="w-full h-48 object-cover rounded-t-lg sm:h-56 md:h-64 lg:h-72 xl:h-80"
        />
        <div className="p-4">
          <h1 className="text-xl font-semibold text-gray-800 truncate">
            {detail.name}
          </h1>
          <h2 className="text-gray-600 text-sm mt-2">{detail.des}</h2>
          <h3 className="text-lg font-bold text-green-600 mt-3">
            {detail.price}
          </h3>
        </div>
      </div>
    </Modal>
  );
};

export default MealDetail;
