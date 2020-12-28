import React from 'react';
import { Link } from 'react-router-dom';
import Student from '../components/Student';
import students from '../data/students';

const Classroom = () => (
  <div className="classroom">

    <div style={{ marginLeft: '10px', marginBottom: '50px', marginTop: '25px' }}>

      <Link to="/create">
        <button type="button" className="btn add">Ajouter un élève</button>
      </Link>

    </div>

    <div className="students">
      {students.map((student) => (
        <Student
          first_name={student.fist_name}
          last_name={student.last_name}
          gender={student.gender}
          age={student.age}
          key={`student${student.id}`}
        />
      ))}
    </div>

  </div>

);

export default Classroom;
