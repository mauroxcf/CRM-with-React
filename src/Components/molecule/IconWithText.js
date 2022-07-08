import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Render a icon with a text below.
 * @param {*} param0
 * @returns
 */
function IconWithText({ label, icon, section, key }) {
	return (
		<div className='flex flex-col cursor-pointer' key={key}>
			<div className={`w-full h-4 ${section && 'bg-emerald-400'}`} />
			<div className='mx-auto'>{icon}</div>
			<p className='text-center text-slate-50 text-sm md:text-md lg:text-lg'>
				{label}
			</p>
		</div>
	);
}

IconWithText.propTypes = {
	/* text to show of the section */
	label: PropTypes.string,
	/* icon svg to render */
	icon: PropTypes.element,
	/* turn on a green color if the section is selected */
	section: PropTypes.bool,
	/* key of the container */
	key: PropTypes.number,
};

export default IconWithText;
