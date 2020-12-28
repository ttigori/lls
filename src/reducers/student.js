import {
  ADD_STUDENT,
  GET_STUDENTS,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from '../actions/types';

import studentsData from '../data/students';

const initialState = {
  students: studentsData,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_STUDENT: {
      console.log('PAYLOAD', payload);
      const newStudents = state.students;
      newStudents.push(payload);
      return {
        ...state,
        students: newStudents,
      };
    }
    case GET_STUDENTS: {
      return {
        ...state,
      };
    }
    case DELETE_STUDENT: {
      let newStudents = state.students;
      newStudents = newStudents.filter((student) => !payload.includes(student.id));

      return {
        ...state,
        students: newStudents,
      };
    }
    case UPDATE_STUDENT: {
      const { newData: newStudent } = payload;
      const newStudents = state.students;
      const index = newStudents.findIndex((student) => student.id === newStudent.id);
      if (index !== -1) {
        newStudents.splice(index, 1, newStudent);
      }

      return {
        ...state,
        products: newStudents,
      };
    }
    default:
      return state;
  }
};
