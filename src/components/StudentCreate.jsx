import React, { useState } from 'react';

const StudentCreate = () => {
  const [last_name, setLastName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');

  return (

    <div className="student-create-container">
      <form className="student-create">
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Nom</label>
          <input type="text" className="form-control" id="last_name" />
        </div>

        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">Prenom</label>
          <input type="text" className="form-control" id="first_name" />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="text" className="form-control" id="age" />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Sexe</label>
          <select id="gender" className="form-select" aria-label="Default select example">
            <option value="1">Masculin</option>
            <option value="2">Feminin</option>
          </select>
        </div>

        <div style={{
          textAlign: 'center', justifyContent: 'space-around', display: 'flex', marginTop: 50,
        }}
        >
          <button type="submit" className="btn add">Ajouter</button>
          <button type="button" className="btn delete">Annuler</button>
        </div>

      </form>

    </div>

  );
};

export default StudentCreate;
