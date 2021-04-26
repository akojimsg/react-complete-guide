import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import NewMeetupForm from "../component/meetups/NewMeetupForm"
import Loading from '../component/ui/Loading'

const NewMeetupPage = (props) => {

	const history = useHistory()
	const [isLoading, setIsLoading] = useState(false)

	const onAddMeetupHandler = (data) => {
		setIsLoading(true)
		fetch('https://react-getting-started-fc192-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(() => {
				history.replace('/')
			})
		setIsLoading(false)
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={onAddMeetupHandler} />
			{ isLoading && <Loading />}
		</section>
	)
}

export default NewMeetupPage