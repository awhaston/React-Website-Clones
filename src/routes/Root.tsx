import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

function App() {
	return (
		<main>
			<NavBar />
			<Outlet />
		</main>
	);
}

export default App;
