import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {
	let params = useParams();

	const [details, setDetails] = useState({});

	const [activeTab, setActiveTab] = useState('instructions');

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const detailData = await data.json();
		console.log(detailData);

		setDetails(detailData);
	};

	// useEffect(() => {
	// 	fetchDetails();
	// }, [params.name]);

	useEffect(() => {
		fetchDetails();
	}, [params.name]);

	return (
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt={details.title} />
			</div>
			<Info>
				<Button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</Button>
				{activeTab === 'instructions' && (
					<div>
						<p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
						<p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details.extendedIngredients.map((ingredient) => (
							<li key={ingredient.id}>{ingredient.original}</li>
						))}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;

	.active {
		background: linear-gradient(to right, #f27121, #e94057);
		color: white;
	}

	h2 {
		margin-bottom: 2rem;
	}

	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}

	ul {
		margin-top: 3rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	background: linear-gradient(35deg, yellow, orange);
	color: red;
	border: 2px solid red;
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div`
	margin-left: 10rem;
`;

export default Recipe;
