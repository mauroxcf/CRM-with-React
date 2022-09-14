import React from 'react';
import PropTypes from 'prop-types';

//BL
import { navbarLabels } from '../../Data/data';

//UI
import IconWithText from '../../Components/molecule/IconWithText';
import { Link } from 'react-router-dom';

/**
 * @description renders a navbar on the footer.
 * @param {*} param0
 * @returns
 */
function FooterNavbar({ section, setSection }) {
	return (
		<nav className='fixed bottom-0 left-0 right-0 h-20 bg-blue-900 w-full rounded-t-3xl z-20'>
			<div className='flex flex-row justify-between mx-auto w-3/5'>
				{navbarLabels.map((item, index) => (
					<Link to={item.url}>
						<IconWithText
							label={item.label}
							key={index}
							icon={item.icon}
							section={section}
							setSection={setSection}
						/>
					</Link>
				))}
			</div>
		</nav>
	);
}

FooterNavbar.propTypes = {
	/* section of the CRM to render */
	section: PropTypes.string,
	/* function that changes the value of section */
	setSection: PropTypes.func,
};

export default FooterNavbar;
