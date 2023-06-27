import React, { Fragment, useState } from "react";

const UpdateClinic = ({ clinic, onUpdate }) => {
  const [updatedClinic, setUpdatedClinic] = useState(clinic);

  const updateClinic = () => {
    onUpdate(updatedClinic);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${clinic.id}`}
      >
        Update
      </button>

      <div className="modal" id={`id${clinic.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Update Clinic Records</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setUpdatedClinic(clinic)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={updatedClinic.patientId}
                onChange={(e) =>
                  setUpdatedClinic({
                    ...updatedClinic,
                    patientId: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="form-control"
                value={updatedClinic.clinicDate}
                onChange={(e) =>
                  setUpdatedClinic({
                    ...updatedClinic,
                    clinicDate: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedClinic.natureOfAilment}
                onChange={(e) =>
                  setUpdatedClinic({
                    ...updatedClinic,
                    natureOfAilment: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedClinic.medicinePrescribed}
                onChange={(e) =>
                  setUpdatedClinic({
                    ...updatedClinic,
                    medicinePrescribed: e.target.value,
                  })
                }
              />

              <input
                type="text"
                className="form-control"
                value={updatedClinic.procedureUndertaken}
                onChange={(e) =>
                  setUpdatedClinic({
                    ...updatedClinic,
                    procedureUndertaken: e.target.value,
                  })
                }
              />

              <input
                type="date"
                className="form-control"
                value={updatedClinic.dateOfNextAppointment}
                onChange={(e) =>
                  setUpdatedClinic({
                    ...updatedClinic,
                    dateOfNextAppointment: e.target.value,
                  })
                }
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateClinic}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setUpdatedClinic(clinic)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateClinic;