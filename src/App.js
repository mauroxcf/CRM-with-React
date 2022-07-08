import './App.css';
import ContactList from './Components/organism/ContactList';
import SearchBar from './Components/organism/SearchBar';
import ViewTemplate from './Layouts/Template/ViewTemplate';

function App() {
	return (
		<ViewTemplate>
			<SearchBar />
			<ContactList />
		</ViewTemplate>
	);
}

export default App;
