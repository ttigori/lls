import React from 'react';
import Student from '../components/Student';
import students from '../data/students';


const Classroom = () => {


  return(
    <div className="classroom">

      <div style={{marginLeft: '10px', marginBottom:'50px', marginTop: '25px'}}>

        <button className="btn add">Ajouter un élève</button>

      </div>


      <div className="students">
        {students.map(student => {
          return(
            <Student
              first_name = {student.fist_name}
              last_name = {student.last_name}
              gender = {student.gender}
              age = {student.age}
            />
          );
        })}
      </div>

    </div>


  );
}



export default Classroom;