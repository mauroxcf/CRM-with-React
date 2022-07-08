import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../Components/organism/SearchBar';
import ContactList from '../../Components/organism/ContactList';

/**
 * @description Render contact section with a search bar, list of contact and other features.
 * @param {*} param0
 * @returns
 */
function Contact(props) {
	return (
		<>
			<SearchBar />
			<ContactList />
		</>
	);
}

Contact.propTypes = {};

export default Contact;
