import React, { useState } from "react";
import Modal from "react-modal";
import { FaGift } from "react-icons/fa";
import styles from "./index.module.css";
const GiftButton: React.FC = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const handleWidtgetToggle = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <>
      <button
        className="flex items-center bg-purple-500 text-white rounded-full px-4 py-2"
        onClick={handleWidtgetToggle}
      >
        <FaGift className="ml-1" /> For friend
      </button>
      <Modal
        isOpen={isWidgetOpen}
        onRequestClose={handleWidtgetToggle}
        shouldCloseOnOverlayClick={true}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <div className={styles.modal_content}>
          <button className={styles.close_button} onClick={handleWidtgetToggle}>
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
