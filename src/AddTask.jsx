import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const AddTask = ({openPopUp, statusModal, submitTask, setTask}) =>{
    return(
    <>
    <Modal isOpen={openPopUp} toggle={()=>statusModal(false)}>
        <ModalHeader toggle={()=>statusModal(false)}>
            What's in your mind?
        </ModalHeader>
        <ModalBody>
            <label>Please Enter: </label>&nbsp;
            <input onChange={(e)=>setTask({type: "SET_TASK", payload: e.target.value})}></input>&nbsp;
            <Button color="primary" onClick={()=>{if(submitTask()){statusModal(false)}}}>Add Task</Button>
        </ModalBody>
        <ModalFooter>
            <Button color="danger" onClick={()=>statusModal(false)}>Close</Button>
        </ModalFooter>
    </Modal>
    </>
    );
}

export default AddTask;