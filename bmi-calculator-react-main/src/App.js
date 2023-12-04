import React from 'react';
// import { Route,Routes } from "react-router-dom";
// import Center from './Companent/Center/Center';
// import Email from './Companent/wmail/email';
// import Adress from './Companent/adress/adress';






  function App(){

  return (

    <div>

      mmm
{/* 
     <Center/>


   
   <Routes>
    <Route path="/email" element={<Email/>}/>
    <Route path="/adress" element={<Adress/>}/>

    </Routes> */}
    </div>
  );
}

export default App;





// const [count,setCount] = useState(0)
// const [todos,setTodos] = useState([])
// const calculation = useMemo( () => expensiveCalculation(count),[count])
// console.log(count);
//   const addTodo = () =>{
//     setTodos((t) => [...t,"new Todo"])
//   }

//   const increment = () =>{
//     setCount((c) => c +1)
//   }

//   return(
//     <div>
//       <div>
//         <h2>new Hook</h2>
//         {todos.map((todo,index) => {
//           return <p key={index}>{todo}</p>
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>

//         <hr/>

//         <div>
//           Count:{count}
//           <button onClick={increment}>+</button>
//           <h2>Expensive Calculation</h2>
//           {calculation}
//         </div>


//     </div>
//   )
 

// const expensiveCalculation = (num) =>{
//   console.log("Calculating");
//   for(let i = 0; i < 1000000000; i++){
//     num += 1
//   }
//   return num
// }