import React from 'react';
import PropTypes from 'prop-types';
import NameWithNumber from '../molecule/NameWithNumber';
import { ReactComponent as Pencil } from '../../Assets/Icons/pencil.svg';
import { ReactComponent as Trash } from '../../Assets/Icons/trash.svg';
import { ReactComponent as CirclePlus } from '../../Assets/Icons/circlePlus.svg';
import { Link } from 'react-router-dom';

/**
 * @description Render a list of contact from the database.
 * @param {*} param0
 * @returns
 */
function ContactList({ contactData }) {
	return (
		<div className='flex flex-col gap-2 w-11/12 h-[60vh] mx-auto'>
			<p className='text-md text-blue-900 font-bold pl-2'>Lista de contactos</p>
			<div className='flex flex-col gap-2 border-1 border-gray-300 bg-gray-100 w-full rounded-2xl overflow-y-auto p-4'>
				{contactData.map((singleContact, index) => (
					<div className='flex flex-row gap-1' key={index}>
						<div className='w-3/5'>
							<NameWithNumber
								fullName={
									singleContact.firstName + ' ' + singleContact.lastName
								}
								number={singleContact.number}
								numberExt={singleContact.numberExt}
							/>
						</div>
						<div className='w-2/5 flex flex-row justify-between items-center'>
							<Link to={`/update_contact/${singleContact.id}`}>
								<Pencil stroke='#4432a8' />
							</Link>
							<CirclePlus stroke='#4432a8' />
							<Trash stroke='#4432a8' />
						</div>
						<hr />
					</div>
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
