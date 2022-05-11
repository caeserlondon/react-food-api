import Pages from './pages/Pages';
import Category from './component/Category';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './component/Search';

function App() {
	return (
		<div className="App">
			<Router>
				<Search />
				<Category />
				<Pages />
			</Router>
		</div>
	);
}

export default App;
