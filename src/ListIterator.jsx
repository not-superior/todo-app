import { useState } from "react";
import EditButton from './EditButton';
import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import ListCSS from '../styles/ListIterator.module.css'

const TodoList = (props) =>{

    const[editID, setEditId] = useState(0);
    const[editText, setEditText] = useState("");

    const resetEditid = () =>{
        setEditId(0);
    }

    return(
        props.todoList.map((tasks, index)=>(   
            tasks.id!==editID ?
            <React.Fragment key={tasks.id}>
                &nbsp;
                <div className={ListCSS.task_block} >
                    <input type="checkbox" className={ListCSS.checkbox} checked={tasks.completed} onChange={()=>props.complete(tasks.id)}></input>
                    <p className={ListCSS.tasks} id={tasks.id}>{index + 1}.&nbsp;{tasks.text}</p> &nbsp;
                    <button className={ListCSS.editbtn} onClick={()=>setEditId(tasks.id)}><AiOutlineEdit/></button> &nbsp;
                    <button className={ListCSS.delbtn} onClick={()=>props.deleteList(tasks.id)}><AiOutlineDelete/></button> &nbsp;
                </div>
            </React.Fragment>
            :            
            <React.Fragment key={tasks.id}>
                &nbsp;
                <EditButton taskId = {tasks.id} editText = {editText} setNewText = {setEditText} resetId = {resetEditid} editList = {props.editList} value={tasks.text}></EditButton>
            </React.Fragment>
            )
        )
    );
}

export default TodoList;