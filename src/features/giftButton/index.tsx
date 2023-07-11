import React, { useState } from "react";
import Modal from "react-modal";
import { FaGift } from "react-icons/fa";
import styles from "./index.module.css";
const GiftButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        className="flex items-center bg-purple-500 text-white rounded-full px-4 py-2"
        onClick={handleModalOpen}
      >
        <FaGift className="ml-1" /> For friend
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        shouldCloseOnOverlayClick={true}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <div className={styles.modal_content}>
          <button className={styles.close_button} onClick={handleModalClose}>
            &times;
          </button>
          <h2>Referral Bonus</h2>
          <p>You have received a referral bonus for inviting a friend!</p>
        </div>
      </Modal>
    </>
  );
};

export default GiftButton;
