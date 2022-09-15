import React from 'react';
import PropTypes from 'prop-types';

//UI
import FooterNavbar from '../Footer/FooterNavbar';

/**
 * @description Render a template view with a navbar.
 * @param {*} param0
 * @returns
 */
function ViewTemplate({ section, setSection, children }) {
	return (
		<main className='container flex absolute top-0 min-w-full min-h-screen overflow-hidden'>
			<div className='flex w-full pb-20'>{children}</div>
			<FooterNavbar section={section} setSection={setSection} />
		</main>
	);
}

ViewTemplate.propTypes = {
	/* section of the CRM to render */
	section: PropTypes.string,
	/* function that changes the value of section */
	setSection: PropTypes.func,
};

export default ViewTemplate;
