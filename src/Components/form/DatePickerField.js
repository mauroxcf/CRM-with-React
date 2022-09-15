import React from 'react';
import { useField, useFormikContext, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import formatDate from '../../utils/formattedDate';

function DatePickerField({ ...props }) {
	const { setFieldValue } = useFormikContext();
	const [field] = useField(props);
	return (
		<div className='flex flex-col gap-2'>
			<DatePicker
				className='border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-1 px-4 h-10'
				{...field}
				{...props}
				selected={(field.value && new Date(field.value)) || null}
				placeholderText={props.labelText}
				onChange={(val) => {
					setFieldValue(field.name, formatDate(val));
				}}
			/>
			<ErrorMessage
				className='text-sm text-red-400 pl-2'
				name={field.name}
				component='div'
			/>
		</div>
	);
}

export default DatePickerField;
