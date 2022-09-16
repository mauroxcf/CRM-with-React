import React, { useState } from 'react';
import PropTypes from 'prop-types';

//UI
import { ReactComponent as UpArrow } from '../../Assets/Icons/upArrow.svg';

function ContactComments({ comments }) {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className='flex flex-col gap-2 w-full border-1 border-gray-300 bg-gray-100 rounded-2xl p-4'>
			<div
				className='flex flex-row gap-2 cursor-pointer items-center'
				onClick={() => setShowMore(!showMore)}
			>
				<p className='text-md text-blue-900 font-bold'>Comentarios</p>
				<UpArrow
					className={`transition ease-in-out ${!showMore && 'rotate-180'}`}
				/>
			</div>
		</div>
	);
}

ContactComments.propTypes = {};

export default ContactComments;
