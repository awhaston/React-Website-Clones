import styles from './NavBar.module.css';

type Route = {
	name: string;
	path: string;
};

const routes: Route[] = [
	{
		name: 'Home',
		path: '/',
	},
];

function NavBar() {
	return (
		<div className={`${styles.navbarContainer}`}>
			<span>Wyatt's Frontend Showcase</span>
			<ul>
				{routes.map((route) => {
					return (
						<ul>
							<a href={route.path}>{route.name}</a>{' '}
						</ul>
					);
				})}
			</ul>
		</div>
	);
}

export default NavBar;
