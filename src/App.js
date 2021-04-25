import Calculator from "./component/Calculator";
import Todo from "./component/Todo";

function App() {
	return (<div>
		<h1>My Todos</h1>
		< Todo text='Learn React' />
		< Todo text='Master React' />
		< Todo text='Explore full react course' />
		<Calculator />
	</div>);
}

export default App;