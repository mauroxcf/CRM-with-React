import React from 'react';
import PropTypes from 'prop-types';

function ModalItem({ text, icon }) {
	return (
		<div className='flex flex-row justify-between cursor-pointer'>
			<p className='text-sm md:text-md lg:text-lg font-semibold'>{text}</p>
			<div className='w-fit'>{icon}</div>
		</div>
	);
}

ModalItem.propTypes = {
	/* text to show of the section */
	text: PropTypes.string,
	/* icon svg to render */
	icon: PropTypes.element,
};

export default ModalItem;
