import React from 'react';

//BL
import { navbarLabels } from '../../Data/data';

//UI
import IconWithText from '../../Components/molecule/IconWithText';

/**
 * @description renders a navbar on the footer.
 * @param {*} param0
 * @returns
 */
function FooterNavbar() {
	return (
		<nav className='fixed bottom-0 left-0 right-0 h-20 bg-blue-900 w-full rounded-t-3xl'>
			<div className='flex flex-row justify-between mx-auto w-3/5'>
				{navbarLabels.map((item, index) => (
					<IconWithText label={item.label} key={index} icon={item.icon} />
				))}
			</div>
		</nav>
	);
}

export default FooterNavbar;
