import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function Search() {
	const [input, setInput] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
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
	margin: 0rem 20rem;

	div {
		position: relative;
		width: 100%;
	}

	input {
		border: none;
		background: linear-gradient(35deg, yellow, orange);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 3rem;
		border-radius: 1rem;
		outline: none;
	}

	svg {
		position: abslute;
		top: 50%;
		left: 0%;
		transform: translate(100%, -50%);
		color: white;
	}
`;

export default Search;
