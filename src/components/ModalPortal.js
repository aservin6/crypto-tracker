import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const Backdrop = (props) => {
  return (
    // Backdrop component, displays the grayed out background when a modal is shown
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full h-screen z-10 bg-black bg-opacity-30"
    ></div>
  );
};

const ModalPortal = (props) => {
  return (
    // Creates a portal for both the Backdrop and Modal component that exists outside the "root" element
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onClose={props.onClose}
          showModal={props.showModal}
          transactions={props.transactions}
          onAddTransaction={props.onAddTransaction}
          userCoins={props.userCoins}
          setUserCoins={props.setUserCoins}
        />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};

export default ModalPortal;
