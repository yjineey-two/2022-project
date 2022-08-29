/* eslint-disable */ 
import React, { useState, useReducer } from 'react'
import { Container } from "reactstrap"
import IndexHeader from "components/Headers/indexHeader.js"
import IndexFooter from "components/Footers/indexFooter.js"

// useReducer
export default function study(props) {
  const [number, setNumber] = useState (0);
  const [count, countDispatch] = useReducer(reducer ,0);

  function reducer(oldCount, action) {
    if (action.type === 'UP') {
      return oldCount + action.payload
      
    } else if (action.type === 'DOWN') {
      return oldCount - action.payload
      
    } else {
      return 0
    }
  };

  function up() {
    countDispatch({type: 'UP', payload: number});
  };

  function down() {
    countDispatch({type: 'DOWN', payload: number});
  };
  
  function reset() {
    countDispatch({type: 'RESET', payload: number});
  };

  function changeNumber(event) {
    setNumber(Number(event.target.value));
  };

  return (
    <>
      <IndexHeader />
      <div className="section profile-content">
        <Container>
          <div>　</div>
          <div>　</div>
        <input type="button" value="-" onClick={down}></input>　
        <input type="button" value="초기화" onClick={reset}></input>　
        <input type="button" value="+" onClick={up}></input>　
        <input type="text" vlaue={number} onChange={changeNumber}></input>　

        <span>{count}</span>
        </Container>
      </div>
      <IndexFooter />      
    </>
  );
}

// // useReducer
// export default function study(props) {
//   const [count, countDispatch] = useReducer(reducer ,0);

//   function reducer(oldCount, action) {
//     if (action === 'down') {
//       return oldCount -1

//     } else if (action === 'reset') {
//       return 0

//     } else {
//       return oldCount + 1
//     }
//   };

//   function down() {
//     countDispatch('down');
//   };

//   function reset() {
//     countDispatch ('reset')
//   };

//   function up() {
//     countDispatch('up');
//   };


//   return (
//     <div>
//       <input type="button" vlaue="-" onClick={down}></input>
//       <input type="button" vlaue="초기화" onClick={reset}></input>
//       <input type="button" vlaue="+" onClick={up}></input>

//       <span>{count}</span>
//     </div>
//   );
// }

// useState
// export default function study(props) {
//   const [count, setCount] = useState(0);

//   function down() {
//     setCount( count - 1 );

//   }

//   function reset() {
//     setCount (0)
//   }

//   function up() {
//     setCount( count + 1 );

//   }


//   return (
//     <div>
//       <input type="button" vlaue="-" onClick={down}></input>
//       <input type="button" vlaue="초기화" onClick={reset}></input>
//       <input type="button" vlaue="+" onClick={up}></input>

//       <span>{count}</span>
//     </div>
//   );
// }
