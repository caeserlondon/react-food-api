import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
	return (
		<List>
			<SLink to={'/cuisine/Italian'}>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>
			<SLink to={'/cuisine/American'}>
				<FaHamburger />
				<h4>American</h4>
			</SLink>
			<SLink to={'/cuisine/Thai'}>
				<GiNoodles />
				<h4>Thai</h4>
			</SLink>
			<SLink to={'/cuisine/Chinese'}>
				<GiChopsticks />
				<h4>Chinese</h4>
			</SLink>
		</List>
	);
}

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	text-decoration: none;
	background: linear-gradient(35deg, yellow, orange);
	width: 6rem;
	height: 6rem;
	cursor: pointer;
	transform: scale(0.8);
	box-shadow: 2px 4px 3px 0px rgba(0, 0, 0, 0.4);

	h4 {
		color: red;
		font-size: 0.8rem;
	}
	svg {
		color: red;
		font-size: 1.5rem;
	}
	&.active {
		background: linear-gradient(to right, #f27121, #e94057);

		svg {
			color: white;
		}
		h4 {
			color: white;
		}
	}
	&:hover {
		box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);
	}
`;

export default Category;
