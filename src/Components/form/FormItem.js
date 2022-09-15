import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

/**
 * It's a function that returns a div with a label, a field, and an error message
 * @returns A React component that renders a form item.
 */
function FormItem({ labelText, fieldType, fieldName }) {
	return (
		<div className='flex flex-col gap-2'>
			<Field
				type={fieldType}
				name={fieldName}
				className='border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-1 px-4 h-10'
				placeholder={labelText}
			/>
			<ErrorMessage
				className='text-sm text-red-400 pl-2'
				name={fieldName}
				component='div'
			/>
		</div>
	);
}

FormItem.propTypes = {
	/* label of the form element */
	labelText: PropTypes.string,
	/* type of the input */
	fieldType: PropTypes.string,
	/* field name to hook in the form */
	fieldName: PropTypes.string,
};

FormItem.defaultProps = {
	fieldType: '',
};

export default FormItem;
