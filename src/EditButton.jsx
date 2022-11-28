import { AiOutlineArrowRight } from "react-icons/ai";
import EditCSS from '../styles/Edit.module.css'

const EditButton = (props) =>{
    return(
        <div className={EditCSS.task_block} key={props.taskId}>
            <input type="text" className={EditCSS.edit_input} onChange={(e)=>props.setNewText(e.target.value)} placeholder="Click to edit"></input>&nbsp;
            <button className={EditCSS.submitbtn} onClick={()=>{props.resetId();props.editList(props.editText, props.taskId)}}><AiOutlineArrowRight/></button>
        </div>
    );
}

export default EditButton;