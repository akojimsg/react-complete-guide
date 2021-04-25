import { useState } from 'react'
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {

	const [showModal, setShowModal] = useState(false);

	const deleteHandler = (e) => {
		setShowModal(true)
	}

	const closeHandler = (e) => {
		setShowModal(false)
	}

	return (
		<div className='card'>
			<h1>{props.text}</h1>
			<div className='actions'>
				<button className='btn' onClick={deleteHandler}>Delete</button>
			</div>
			{showModal && <Modal accept={closeHandler} cancel={closeHandler} />}
			{showModal && <Backdrop click={closeHandler} />}
		</div>
	)
}

export default Todo