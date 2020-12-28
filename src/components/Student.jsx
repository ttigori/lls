import React from 'react';
import studentImg  from '../assets/media/images/student.png';




const Student = () => {


  return(
    <div className="card">
      <img className="card-img-top" src={studentImg} alt="Image élève"/>
      <div class="card-body">
        <div className="card-item">
          <span style={{fontSize: '1.2rem', marginRight: '5px'}}>
            Nom:
          </span>
          Adrien
        </div>

        <div className="card-item">
          <span> Prenom: </span> Adrien
        </div>

        <div className="card-item">
          <span>
            Sexe:
          </span>
          Masculin
        </div>

        <div className="btn-container">

          <button className="btn">Modifier</button>
          <button className="btn delete">Supprimer</button>

        </div>

      </div>
  </div>
  );
}



export default Student;