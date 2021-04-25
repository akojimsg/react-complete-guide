import { useState } from "react"

const Calculator = (props) => {

	const [values, setValues] = useState({
		FirstNumber: 0,
		SecondNumber: 0,
		Result: 0
	})

	const handleClick = () => {
		setValues({ ...values, Result: Number(values.FirstNumber) + Number(values.SecondNumber) })
		console.log(values)
	}

	return (
		<div className='card'>
			<input value={values.FirstNumber} onChange={(e) => setValues({ ...values, FirstNumber: e.target.value })} />
			<input value={values.SecondNumber} onChange={(e) => setValues({ ...values, SecondNumber: e.target.value })} />
			<div className='actions--alt'>
				<button className='btn' onClick={handleClick}>Add the numbers</button>
			</div>
			<div className='result'>
				<p>The sum of the numbers is: {values.Result}</p>
			</div>
		</div>
	)
}

export default Calculator