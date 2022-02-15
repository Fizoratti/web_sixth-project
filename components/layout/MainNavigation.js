import Link from 'next/Link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Glass Portal</div>
			<nav>
				<ul>
					<li>
						<Link href='/'>All Servers</Link>
					</li>
					<li>
						<Link href='/new-server'>Add New Server</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
