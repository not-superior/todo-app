import { useReducer, useState, useEffect } from 'react'
import AppCSS from '../styles/App.module.css'
import TodoList from './ListIterator';
import AddTask from './AddTask';
import Weather from './Weather';

let defaultArr = [];

if(JSON.parse(localStorage.getItem('task-list'))!=null){
  defaultArr = JSON.parse(localStorage.getItem('task-list'));
}

const App = () =>{

  const [changeState, setState] = useState(false);
  const [openModal, setModal] = useState(false);

  const [state, dispatch] = useReducer((state, action) =>{
    switch(action.type){
      case "SET_TASK" :
        return {...state, task: action.payload};

      case "ADD_TASK":
        return {...state, taskList: [...state.taskList, action.taskObj]};
      
      case "DELETE_TASK" || "COMPLETE_TASK" || "EDIT_TASK":
        return {...state, taskList: action.modArr};

      default:
        return state;
    }

  },{task: "", taskList: defaultArr})

  useEffect(() =>{
    localStorage.setItem('task-list', JSON.stringify(state.taskList))
  },
  [state.taskList, changeState])

  const handleSubmit = () =>{
      
    if(state.task==null || state.task==""){
      return false;
    }

    let todoObj = {
      id: Math.random(),
      text : state.task,
      completed : false
    };

    dispatch({type: "ADD_TASK", taskObj: todoObj});
    state.task = "";
    return true;
  }

  const DelList = (delID) =>{
    const filteredArray = state.taskList.filter((todo) => todo.id!==delID);
    dispatch({type: "DELETE_TASK", modArr: filteredArray});
  }

  const editFunc = (editText, id) =>{    
    state.taskList.map((todo) => {
      if(todo.id === id){
        todo.text = editText;
      }
    });

    dispatch({type: "EDIT_TASK", modArr: state.taskList});
    setState(!changeState)
  }

  const isComplete = (complID) =>{
    state.taskList.map((todo) => {
      if(todo.id===complID){
        todo.completed = !todo.completed;
      }
    });
    dispatch({type: "COMPLETE_TASK", modArr: state.taskList});
    setState(!changeState)
  }

  return (
    <>
      <div className={AppCSS.app}>
        <Weather></Weather>
        <h1 className={AppCSS.header}>ToDo App</h1>
        <button className={AppCSS.addbtn} onClick={()=>setModal(!openModal)}>Create Task</button>
        <AddTask setTask = {dispatch} statusModal = {setModal} submitTask = {handleSubmit} openPopUp = {openModal}></AddTask>
      </div>
      <div className={AppCSS.task_content}>
        <TodoList todoList={state.taskList} deleteList={DelList} editList={editFunc} complete={isComplete}/>
      </div>
    </>
  );
}

export default App
