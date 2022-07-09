import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Render contact basic information.
 * @param {*} param0
 * @returns
 */
function NameWithNumber({ fullName, number, numberExt }) {
	return (
		<div className='flex flex-col gap-1'>
			<p className='text-md text-black font-semibold'>{fullName}</p>
			<p className='text-md text-blue-900 font-medium'>{`(+${numberExt}) ${number}`}</p>
		</div>
	);
}

NameWithNumber.propTypes = {
	/* contact name */
	fullName: PropTypes.string,
	/* contact number */
	number: PropTypes.number,
	/* contact ext number */
	numberExt: PropTypes.number,
};

export default NameWithNumber;
