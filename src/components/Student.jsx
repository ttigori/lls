import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import studentImg from '../assets/media/images/student.png';
import { deleteS } from '../actions/student';

const Student = ({
  id, first_name, last_name, age, gender,
}) => {
  const dispatch = useDispatch();

  const deleteStudent = () => {
    dispatch(deleteS(id));
  };

  return (
    <div className="card">
      <img className="card-img-top" src={studentImg} alt="" />
      <div className="card-body">
        <div className="card-item">
          <span> Nom: </span>
          {' '}
          {last_name}
        </div>

        <div className="card-item">
          <span> Prenom: </span>
          {' '}
          {first_name}
        </div>

        <div className="card-item">
          <span> Sexe: </span>
          {' '}
          {gender}
        </div>

        <div className="card-item">
          <span> Age: </span>
          {' '}
          {age}
        </div>

        <div className="btn-container">

          <Link to={`/${id}/edit`}>
            <button type="button" className="btn edit">Modifier</button>
          </Link>

          <button onClick={deleteStudent} type="button" className="btn delete">Supprimer</button>

        </div>

      </div>
    </div>
  );
};

export default Student;
