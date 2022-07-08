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
		<body className='container min-h-screen absolute top-0 min-w-full md:overflow-x-hidden'>
			<main className='pt-8'>{children}</main>
			<FooterNavbar section={section} setSection={setSection} />
		</body>
	);
}

ViewTemplate.propTypes = {
	/* section of the CRM to render */
	section: PropTypes.string,
	/* function that changes the value of section */
	setSection: PropTypes.func,
};

export default ViewTemplate;
