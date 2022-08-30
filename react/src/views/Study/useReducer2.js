// 22.08.22 (월) - 스터디

/* eslint-disable */ 
import React, { useState, useReducer } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"
import Student from "./components/student.js"

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const reducer= (state, action) => {
  switch(action.type) {
    case 'add-student':
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: true,
      }
      return {
        count: state.count + 1,
        students: [...state.students, newStudent]
      };
      case 'delete-student' :
        return {
          count: state.count -1,
          students : state.students.filter(student => student.id !== action.payload.id),
        }
      case 'mark-student' :
        return {
          count: state.count,
          students : state.students.map(student => {
            if(student.id === action.payload.id) {
              return {...student, isHere: !student.isHere}
            }
        })
      }
      default:
        return state;
  }
};


function HookPage() {
  const initialState = {
    count: 0,
    students: []
    // students: [
    //   {
    //     id: Date.now(),
    //     name: 'James',
    //     isHere: false,
    //   },
    // ],
  }; 
// 22.08.22 (월)

  const [name, setName] = useState('');
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div>　</div>
          <div>　</div>
          <div>
            <h1>출석부</h1>
            <p>총 학생 수: {studentsInfo.count}</p>
            <input
              type= "text"
              placeholder= "이름을 입력해주세요"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
              dispatch({type: 'add-student', payload: {name}});
            }}>추가</button>
            {studentsInfo.students.map(student => {
              return <Student 
                key= {student.id} 
                name= {student.name} 
                dispatch= {dispatch}
                id= {student.id}
                isHere= {student.isHere}
              />;
            })}
          </div>
        </Container>
      </div>
      <IndexFooter />
    </>
  );
}

export default HookPage;

