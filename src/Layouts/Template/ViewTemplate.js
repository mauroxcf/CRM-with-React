import React from 'react';
import FooterNavbar from '../Footer/FooterNavbar';

/**
 * @description Render a template view with a navbar.
 * @param {*} param0
 * @returns
 */
function ViewTemplate({ children }) {
	return (
		<body className='container min-h-screen absolute top-0 min-w-full md:overflow-x-hidden'>
			<main className='pt-8'>{children}</main>
			<FooterNavbar />
		</body>
	);
}

export default ViewTemplate;
