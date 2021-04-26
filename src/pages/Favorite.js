import { useContext } from 'react'
import MeetupList from '../component/meetups/MeetupList'
import FavoritesContext from '../component/store/favorites-context'

const FavoritesPage = (props) => {

	const favoritesCtx = useContext(FavoritesContext)

	let content = ''

	if (0 === favoritesCtx.totalFavorites) {
		content = <p>You do not have any favorite item. Please add some to view here.</p>
	} else {
		content = <MeetupList meetups={favoritesCtx.favorites} />
	}

	return <section>
		<h1>My Favorites Meetup</h1>
		{content}
	</section>
}

export default FavoritesPage