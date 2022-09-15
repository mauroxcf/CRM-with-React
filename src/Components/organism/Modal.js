import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description render a container of a navbar after this one is triggered, and inside render the children.
 * @returns A modal with a list of options
 */
function Modal({ children }) {
	return (
		<div className='relative z-20'>
			<div className='flex flex-col gap-1 w-full p-4 origin-top-right absolute shadow-lg ring-black ring-opacity-5 bg-white rounded-xl'>
				{children}
			</div>
		</div>
	);
}

Modal.propTypes = {
	/** this is used in a special case when it need to save the DOM element in a refState */
	dropdownRef: PropTypes.func,
};

export default Modal;
