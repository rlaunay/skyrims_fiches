import classes from './SearchButton.module.scss';
import { ReactComponent as SeachLogo } from './../../../assets/img/logo/search-solid.svg';

const SearchButton = () => (
	<button className={classes.SearchButton}>
		<span className={classes.Icon}>
			<SeachLogo />
		</span>
		<p>Rechercher ...</p>
	</button>
);

export default SearchButton;
