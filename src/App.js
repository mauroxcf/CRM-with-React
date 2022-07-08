import { useState } from 'react';
import './App.css';
import MainSection from './Layouts/Main/MainSection';
import ViewTemplate from './Layouts/Template/ViewTemplate';

function App() {
	const [section, setSection] = useState('Contactos');
	return (
		<ViewTemplate section={section} setSection={setSection}>
			<MainSection section={section} />
		</ViewTemplate>
	);
}

export default App;
