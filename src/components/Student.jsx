import React from 'react';
import studentImg  from '../assets/media/images/student.png';




const Student = () => {


  return(
    <div className="card" style={{width: '18rem', padding: '10px'}}>
      <img className="card-img-top" src={studentImg} alt="Image élève"/>
      <div class="card-body">
        <div style={{marginBottom: '10px'}}>
          <span>
            Nom: Adrien
          </span>
        </div>

        <div style={{marginBottom: '10px'}}>
          <span>
            Prenom: Adrien
          </span>
        </div>

        <div style={{marginBottom: '10px'}}>
          <span>
            Sexe: Masculin
          </span>
        </div>

        <div style={{justifyContent: 'space-between', display: 'flex'}}>

          <button>Modifier</button>
          <button>Supprimer</button>

        </div>

      </div>
  </div>
  );
}



export default Student;