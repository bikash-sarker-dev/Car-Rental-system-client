import React from "react";
import UpDateForm from "./UpDateForm";

const UpdateCar = ({ upDateId, setIs }) => {
  return (
    <dialog id="update_Id" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <div className="w-full">
          <div method="dialog ">
            <UpDateForm upDateId={upDateId} setIs={setIs} />
            <button
              onClick={() => document.getElementById("update_Id").close()}
              className="btn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateCar;
