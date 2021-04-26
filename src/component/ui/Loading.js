import classes from './Loading.module.css'

const Loading = () => {
	return (
		<div className={classes.loading}>
			<div className={`${classes.la_line_spin_fade_rotating} ${classes.la_2x}`}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

export default Loading