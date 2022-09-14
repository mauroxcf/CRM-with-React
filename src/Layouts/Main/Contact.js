import React from 'react';
import SearchBar from '../../Components/organism/SearchBar';
import ContactList from '../../Components/organism/ContactList';
import { ReactComponent as UserPlus } from '../../Assets/Icons/user-plus.svg';
import { dummyData } from '../../Data/dummyData';
import { Link } from 'react-router-dom';

/**
 * @description Render contact section with a search bar, list of contact and other features.
 * @param {*} param0
 * @returns
 */
function Contact() {
	return (
		<div className='flex flex-col md:h-full w-full mx-auto gap-6 pt-8'>
			<SearchBar />
			<ContactList contactData={dummyData} />
			<Link to='/create_contact'>
				<div className='w-28 h-8 flex flex-row justify-center items-center gap-2 bg-blue-900 rounded-2xl mx-auto'>
					<p className='text-slate-50 text-md'>Agregar</p>
					<UserPlus stroke='white' />
				</div>
			</Link>
		</div>
	);
}

export default Contact;
