import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { update } from '../actions/student';

const StudentEdit = (props) => {
  const [last_name, setLastName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { students } = useSelector((state) => state.student);

  const dispatch = useDispatch();
  const updateStudent = (e) => {
    e.preventDefault();
    if (last_name && first_name && age && gender) {
      dispatch(update({
        id: Number(props.match.params.id),
        last_name,
        first_name,
        age,
        gender,
      }));

      setRedirect(true);
    }
  };

  useEffect(() => {
    const studentFound = students.find((student) => student.id === Number(props.match.params.id));
    setLastName(studentFound.last_name);
    setFirstName(studentFound.first_name);
    setAge(studentFound.age);
    setGender(studentFound.gender);
  }, []);

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (

    <div className="student-create-container">
      <form onSubmit={updateStudent} className="student-create">
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Nom</label>
          <input defaultValue={last_name} onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="last_name" />
        </div>

        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">Prenom</label>
          <input defaultValue={first_name} onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="first_name" />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input defaultValue={age} onChange={(e) => setAge(e.target.value)} type="text" className="form-control" id="age" />
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
          <button onClick={updateStudent} type="submit" className="btn add">Enregistrer</button>
          <button onClick={() => setRedirect(true)} type="button" className="btn delete">Annuler</button>
        </div>

      </form>

    </div>

  );
};

export default StudentEdit;
