import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

/**
 * @description Render a different section between contacts, task and commentary.
 * @param {*} param0
 * @returns
 */
function MainSection({ section }) {
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
	return <>{renderSwitch(section)}</>;
}

MainSection.propTypes = {
	/* section of the CRM to render in this component */
	section: PropTypes.string,
};

export default MainSection;
