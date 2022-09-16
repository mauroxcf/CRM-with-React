import React, { useState } from 'react';
import PropTypes from 'prop-types';

//UI
import { ReactComponent as UpArrow } from '../../Assets/Icons/upArrow.svg';

/**
 * It's a React component that renders a contact's information
 * @returns A ContactInfo component.
 */
function ContactInfo({ contactInfo }) {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className='flex flex-col gap-2 w-full border-1 border-gray-300 bg-gray-100 rounded-2xl p-4'>
			<p className='text-md text-blue-900 font-bold'>
				{contactInfo.firstName + ' ' + contactInfo.lastName}
			</p>
			<p className='text-md'>{`(+${contactInfo.numberExt}) ${contactInfo.number}`}</p>
			<p className='text-md'>{contactInfo.email}</p>
			<p className='text-md'>{contactInfo.gender}</p>
			<p className='text-md'>{`${contactInfo.country}, ${contactInfo.address}`}</p>
			{showMore && (
				<div className='flex flex-col gap-2'>
					<p className='text-md'>{`Fecha de nacimiento: ${contactInfo.birthday}`}</p>
					<p className='text-md'>{contactInfo.type_contact}</p>
					<p className='text-md'>{contactInfo.origin}</p>
				</div>
			)}
			<div
				className='flex flex-row gap-2 cursor-pointer items-center'
				onClick={() => setShowMore(!showMore)}
			>
				<button className='text-md py-2 text-blue-800 hover:text-blue-900 font-bold'>
					{showMore ? 'Ver menos' : 'Ver mas'}
				</button>
				<UpArrow
					className={`transition ease-in-out ${!showMore && 'rotate-180'}`}
				/>
			</div>
		</div>
	);
}

ContactInfo.propTypes = {
	/* objects that contents contact information */
	contactInfo: PropTypes.object,
};

export default ContactInfo;
