import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';
import styles from './Root.module.css';

function App() {
	return (
		<main className={styles.container}>
			<NavBar />

			<div className={styles.outlet}>
				<Outlet />
			</div>
		</main>
	);
}

export default App;
