import classes from './Header.module.scss';

import SearchButton from './../../components/Button/SearchButton/SearchButton';

const Header = () => (
	<header className={classes.Header}>
		<SearchButton />
	</header>
);

export default Header;
