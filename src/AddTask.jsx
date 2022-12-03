import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


const style = {
    position: "relative"
};

const addbtnStyle = {
    position: "absolute",
    right: "90px",
    bottom: "12px"
};

const inputStyle = {
    position: "absolute",
    left: '68px',
    bottom: "10px",
    textDecoration: 'none',
    outline: 'none',
    border: 'none',
    padding: '5px',
    backgroundColor: '#F2F2F2',
    borderRadius: '6px'
};

const styleBody = {
    display: 'flex'
};

const AddTask = ({openPopUp, statusModal, submitTask, setTask}) =>{
    return(
    <>
    <Modal isOpen={openPopUp} style={style} toggle={()=>statusModal(false)}>
        <ModalHeader toggle={()=>statusModal(false)}>
            What's in your mind?
        </ModalHeader>
        <ModalBody style={styleBody}>
            <label>Enter: </label>&nbsp;
            <input placeholder='Click to enter new task' style={inputStyle} onChange={(e)=>setTask({type: "SET_TASK", payload: e.target.value})}></input>&nbsp;
        </ModalBody>
        <ModalFooter>
            <Button color="primary" style={addbtnStyle} onClick={()=>{if(submitTask()){statusModal(false)}}}>Add Task</Button>
            <Button color="danger" onClick={()=>statusModal(false)}>Close</Button>
        </ModalFooter>
    </Modal>
    </>
    );
}

export default AddTask;