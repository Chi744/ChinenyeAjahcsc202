import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import UpdatePatient from "./updatePatient";
import UpdateClinic from "./updateClinic";

const Read = () => {
  const [patients, setPatients] = useState([]);
  const [clinics, setClinics] = useState([]);

  const getPatients = async () => {
    try {
      const response = await axios.get("http://localhost:3001/patients");
      setPatients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getClinics = async () => {
    try {
      const response = await axios.get("http://localhost:3001/clinics");
      setClinics(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/patients/${id}`);
      setPatients(patients.filter((patient) => patient.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClinic = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/clinics/${id}`);
      setClinics(clinics.filter((clinic) => clinic.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updatePatient = async (updatedPatient) => {
    try {
      await axios.put(
        `http://localhost:3001/patients/${updatedPatient.id}`,
        updatedPatient
      );
      setPatients((prevPatients) =>
        prevPatients.map((patient) =>
          patient.id === updatedPatient.id ? updatedPatient : patient
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const updateClinic = async (updatedClinic) => {
    try {
      await axios.put(
        `http://localhost:3001/clinics/${updatedClinic.id}`,
        updatedClinic
      );
      setClinics((prevClinics) =>
        prevClinics.map((clinic) =>
          clinic.id === updatedClinic.id ? updatedClinic : clinic
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPatients();
    getClinics();
  }, []);

  return (
    <Fragment>
      <h1 className="text-center mt-5">PATIENT DATA</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Middle Name</th>
            <th>Date of Birth</th>
            <th>Date of Registration</th>
            <th>Home Address</th>
            <th>Matriculation Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.firstName}</td>
              <td>{patient.surName}</td>
              <td>{patient.middleName}</td>
              <td>{patient.dateOfBirth}</td>
              <td>{patient.dateOfRegistration}</td>
              <td>{patient.homeAddress}</td>
              <td>{patient.matriculationNumber}</td>
              <td>
                <UpdatePatient patient={patient} onUpdate={updatePatient} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePatient(patient.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1 className="text-center mt-5">CLINIC RECORDS</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Clinic Date</th>
            <th>Nature of Ailment</th>
            <th>Medicine Prescribed</th>
            <th>Procedure Undertaken</th>
            <th>Date of Next Appointment</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clinics.map((clinic) => (
            <tr key={clinic.id}>
              <td>{clinic.id}</td>
              <td>{clinic.clinicDate}</td>
              <td>{clinic.natureOfAilment}</td>
              <td>{clinic.medicinePrescribed}</td>
              <td>{clinic.procedureUndertaken}</td>
              <td>{clinic.dateOfNextAppointment}</td>
              <td>
                <UpdateClinic
                  clinic={clinic}
                  onUpdate={updateClinic}
                />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClinic(clinic.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Read;