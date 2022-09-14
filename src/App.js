import { Routes, Route } from 'react-router-dom';
import MainSection from './Layouts/Main/MainSection';
import CreateContact from './Pages/CreateContact';
import UpdateContact from './Pages/UpdateContact';

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainSection />} />
			<Route path='/create_contact' element={<CreateContact />} />
			<Route path='/update_contact/:id' element={<UpdateContact />} />
		</Routes>
	);
}

export default App;
