import classes from './Layout.module.scss';

import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

const Layout = (props) => (
	<div className={classes.Layout}>
		<Navigation />
		<div className={classes.Layout__Right}>
			<Header />
			<main className={classes.Main}>{props.children}</main>
		</div>
	</div>
);

export default Layout;
