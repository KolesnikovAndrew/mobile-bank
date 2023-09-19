import React from "react";
import Modal from "react-modal";
import styles from "./index.module.css";

interface WidgetProps {
  onToggle: () => void;
  widgetTitle: string;
  isWidgetOpen: boolean;
}

const Widget: React.FC<WidgetProps> = ({
  onToggle,
  children,
  widgetTitle,
  isWidgetOpen,
}) => {
  return (
    <Modal
      isOpen={isWidgetOpen}
      onRequestClose={onToggle}
      shouldCloseOnOverlayClick={true}
      className={styles.modal}
      overlayClassName={styles.overlay}
      ariaHideApp={false}
    >
      <div className={styles.modal_content}>
        <button className={styles.close_button} onClick={onToggle}>
          &times;
        </button>
        <h2>{widgetTitle}</h2>
        <div>{children}</div>
      </div>
    </Modal>
  );
};

export default Widget;
