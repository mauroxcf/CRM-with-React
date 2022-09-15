import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

function FormItemSelect({ labelText, fieldName, options }) {
	return (
		<div className='flex flex-col gap-2'>
			<Field
				as='select'
				name={fieldName}
				className='border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-1 px-4 h-10'
			>
				<option defaultValue>{labelText}</option>
				{options.map((option) => (
					<option value={option.optionValue}>{option.optionLabel}</option>
				))}
			</Field>
			<ErrorMessage
				className='text-sm text-red-400 pl-2'
				name={fieldName}
				component='div'
			/>
		</div>
	);
}

FormItemSelect.propTypes = {
	/* label of the form element */
	labelText: PropTypes.string,
	/* type of the input */
	fieldType: PropTypes.string,
	/* field name to hook in the form */
	fieldName: PropTypes.string,
};

FormItemSelect.defaultProps = {
	options: [
		{ optionLabel: 1, optionValue: 'one' },
		{ optionLabel: 2, optionValue: 'two' },
	],
};

export default FormItemSelect;
