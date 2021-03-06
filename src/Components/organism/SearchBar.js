import React from 'react';
import PropTypes from 'prop-types';

//UI
import { ReactComponent as Search } from '../../Assets/Icons/search.svg';

/**
 * @description Render a search bar to find specific contact.
 * @param {*} param0
 * @returns
 */
function SearchBar(props) {
	return (
		<div className='mx-auto relative text-gray-400 font-semibold w-11/12'>
			<input
				className='border-1 border-gray-300 bg-gray-100 w-full h-10 md:h-12 lg:h-16 px-5 pr-16 rounded-2xl focus:outline-none text-md lg:text-lg'
				type='search'
				name='search'
				placeholder='Buscar'
			/>
			<button type='submit' className='absolute right-0 top-0 mt-3.5 mr-4'>
				<Search className='w-4 h-4' stroke='#4432a8' />
			</button>
		</div>
	);
}

SearchBar.propTypes = {};

export default SearchBar;
