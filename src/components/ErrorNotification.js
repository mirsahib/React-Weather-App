import React, { useState } from "react";

function ErrorNotification(props) {
  const [display, setDisplay] = useState("block");

  const closeModal = () => {
    setDisplay("none");
    props.handleErrorState();
  };
  return (
    <>
      <div
        className="modal"
        id="myModal"
        aria-modal={true}
        style={{ display: display }}
      >
        <div className="modal-dialog">
          <div className="modal-content" style={{ color: "black" }}>
            <div className="modal-header">
              <h4 className="modal-title">
                {props.errorMessage.cod.toString()}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">{props.errorMessage.message}</div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  closeModal();
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorNotification;
