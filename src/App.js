import { Route, Switch } from 'react-router-dom'
import Layout from './component/layout/Layout'

import AllMeetupsPage from './pages/AllMeetups'
import FavoritesPage from './pages/Favorite'
import NewMeetupPage from './pages/NewMeetup'

const App = () => {
	return <Layout>
		<Switch>
			<Route path='/' exact>
				<AllMeetupsPage />
			</Route>
			<Route path='/new-meetup'>
				<NewMeetupPage />
			</Route>
			<Route path='/favorites'>
				<FavoritesPage />
			</Route>
		</Switch>
	</Layout>
}

export default App;