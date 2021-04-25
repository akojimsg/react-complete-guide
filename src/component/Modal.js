const Modal = (props) => {
	return (
		<div className='modal'>
			<p>Are you sure you want to Delete?</p>
			<button className='btn btn--alt' onClick={props.cancel}>Cancel</button>
			<button className='btn' onClick={props.accept}>Confirm</button>
		</div>
	)
}

export default Modal