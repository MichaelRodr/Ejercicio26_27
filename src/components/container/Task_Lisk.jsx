import React,{ useReducer, useContext } from "react";
import { Task } from "../../models/Task.class";
//import TaskComponent from "../pure/task";




/**
 * ? se crea el contexto que sera compartido entre componentes
 */

const myContext = React.createContext(null);

const task = () =>{
const state = useContext(myContext);
return (
  <div>

  <li>{state.nombre}</li>
  <li>{state.descripcion}</li>
  <li>{state.completado}</li>
  </div>
)
}

/**
 * ? Acciones a realizar
 */
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const FILTER_TASK = 'FILTER_TASK';



const Task_Lisk = () => {

  //Initial State for Reducer
  const INITIAL_STATE = new Task (
  nombre = 'Estudiar Patrones de Diseño',
  descripcion = 'Patron Redux , useReducer ',
  isComplete = false,
)

/**
 * ? Reducer to change state
 */

const reducer = (state, action) =>{
 switch (action.type) {
  case ADD_TASK:
    return [
      ...state,
      {
        nombre: action.payload.nombre,
        descripcion: action.payload.descripcion,
        completado:isComplete
      }
  
 ]
    
  default:
   return state;
 } 
}

/**
 * ? Asign useReducer to state, reducer and dispatch actions
 */
  const [state, dispatch] = useReducer(reducer,INITIAL_STATE)

  return (
    <myContext.Provider value={state}>

    <div>
      <h1>
        Tasks List
      </h1>
      <ul>
        {task}
      </ul>
    </div>
    </myContext.Provider>
  )
}

export default Task_Lisk

