import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Search() {
	const [input, setInput] = useState('');

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		navigate('/searched/' + input);
	};

	return (
		<FormStyle onSubmit={submitHandler}>
			<div>
				<FaSearch />
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	margin: 0rem 10rem;

	div {
		position: relative;
		width: 100%;
	}

	input {
		border: none;
		background: linear-gradient(35deg, yellow, orange);
		color: red;
		font-size: 1.5rem;
		padding: 1rem 4rem;
		border-radius: 1rem;
		outline: none;
		margin: auto;
		width: 50vw;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0%;
		font-size: 1.5rem;
		transform: translate(100%, -50%);
		color: red;
		marging-left: 1rem;
	}
`;

export default Search;
