import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { add } from '../actions/student';

const StudentCreate = () => {
  const [last_name, setLastName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { students } = useSelector((state) => state.student);

  const dispatch = useDispatch();
  const addStudent = (e) => {
    e.preventDefault();
    if (last_name && first_name && age && gender) {
      dispatch(add({
        id: students.length += 1,
        last_name,
        first_name,
        age,
        gender,
      }));

      setRedirect(true);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (

    <div className="student-create-container">
      <form onSubmit={addStudent} className="student-create">
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Nom</label>
          <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="last_name" />
        </div>

        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">Prenom</label>
          <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="first_name" />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input onChange={(e) => setAge(e.target.value)} type="text" className="form-control" id="age" />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Sexe</label>
          <select onChange={(e) => setGender(e.target.value)} id="gender" className="form-select" aria-label="Default select example">
            <option value="none" selected disabled hidden> Selectionnez le sexe </option>
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
          </select>
        </div>

        <div style={{
          textAlign: 'center', justifyContent: 'space-around', display: 'flex', marginTop: 50,
        }}
        >
          <button onClick={addStudent} type="submit" className="btn add">Ajouter</button>
          <button onClick={() => setRedirect(true)} type="button" className="btn delete">Annuler</button>
        </div>

      </form>

    </div>

  );
};

export default StudentCreate;
