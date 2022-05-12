import Pages from './pages/Pages';
import Category from './component/Category';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Search from './component/Search';
import styled from 'styled-components';
import { GiForkKnifeSpoon } from 'react-icons/gi';

function App() {
	return (
		<div className="App">
			<Router>
				<Nav>
					<Logo to={'/'}> Yum Yum</Logo>
					<GiForkKnifeSpoon />
				</Nav>
				<Search />
				<Category />
				<Pages />
			</Router>
		</div>
	);
}

const Logo = styled(Link)`
	text-decoration: none;
	font-size: 2rem;
	font-weight: 600;
	color: red;
	font-family: 'Water Brush', cursive;
`;

const Nav = styled.div`
	padding: 4rem 0rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	svg {
		font-size: 2rem;
		color: orange;
		margin-left: 1rem;
	}
`;

export default App;
