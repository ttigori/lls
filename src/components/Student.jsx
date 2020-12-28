import React from 'react';
import studentImg  from '../assets/media/images/student.png';




const Student = (props) => {

  const {first_name, last_name, age, gender} = props;


  return(
    <div className="card">
      <img className="card-img-top" src={studentImg} alt="Image élève"/>
      <div class="card-body">
        <div className="card-item">
          <span> Nom: </span> {last_name}
        </div>

        <div className="card-item">
          <span> Prenom: </span> {first_name}
        </div>

        <div className="card-item">
          <span> Sexe: </span> {gender}
        </div>

        <div className="card-item">
          <span> Age: </span> {age}
        </div>

        <div className="btn-container">

          <button className="btn edit">Modifier</button>
          <button className="btn delete">Supprimer</button>

        </div>

      </div>
  </div>
  );
}



export default Student;