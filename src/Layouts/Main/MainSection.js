import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';
import { useState } from 'react';
import ViewTemplate from '../Template/ViewTemplate';

/**
 * @description Render a different section between contacts, task and commentary.
 * @param {*} param0
 * @returns
 */
function MainSection() {
	const [section, setSection] = useState('Contactos');
	function renderSwitch(section) {
		switch (section) {
			case 'Contactos':
				return <Contact />;
			case 'Tareas':
				return <div>Datos de contacto</div>;
			case 'Comentarios':
				return <div>Ver comentarios</div>;
			default:
				break;
		}
	}
	return (
		<ViewTemplate section={section} setSection={setSection}>
			{renderSwitch(section)}
		</ViewTemplate>
	);
}

MainSection.propTypes = {
	/* section of the CRM to render in this component */
	section: PropTypes.string,
};

export default MainSection;
