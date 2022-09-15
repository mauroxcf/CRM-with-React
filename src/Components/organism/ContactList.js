import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

/**
 * @description Render a list of contact from the database.
 * @returns
 */
function ContactList({ contactData }) {
	return (
		<div className='flex flex-col gap-2 w-11/12 h-[60vh] mx-auto'>
			<p className='text-md text-blue-900 font-bold pl-2'>Lista de contactos</p>
			<div className='flex flex-col gap-2 border-1 border-gray-300 bg-gray-100 w-full rounded-2xl overflow-y-auto p-4'>
				{contactData.map((singleContact, index) => (
					<ContactItem singleContact={singleContact} key={index} />
				))}
			</div>
		</div>
	);
}

ContactList.propTypes = {
	/* list of contacts */
	contactData: PropTypes.array,
};

export default ContactList;
