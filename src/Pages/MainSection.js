import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Layouts/Main/Contact';
import { useState } from 'react';
import ViewTemplate from '../Layouts/Template/ViewTemplate';
import Task from '../Layouts/Main/Task';
import Comments from '../Layouts/Main/Comments';

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
				return <Task />;
			case 'Comentarios':
				return <Comments />;
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
