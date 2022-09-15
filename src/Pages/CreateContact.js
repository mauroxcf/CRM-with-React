import React from 'react';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

//UI
import ViewTemplate from '../Layouts/Template/ViewTemplate';
import FormItem from '../Components/form/FormItem';
import DatePickerField from '../Components/form/DatePickerField';
import FormItemSelect from '../Components/form/FormItemSelect';

//BL
import { formInitialValues, formValidationSchema } from '../Data/data';

/**
 * It's a function that returns a contact form using formik library
 * @returns A Form component that has a FormItem component for each field.
 */
function CreateContact() {
	const navigate = useNavigate();
	return (
		<ViewTemplate>
			<div className='flex flex-col md:h-full w-full gap-4 pt-8 px-4 pb-4'>
				<p className='text-md text-blue-900 font-bold pl-8'>Nuevo contacto</p>
				<div className='flex flex-col gap-2  w-full  '>
					<Formik
						initialValues={formInitialValues}
						validationSchema={formValidationSchema}
						onSubmit={(values, actions) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2));
								actions.setSubmitting(false);
								navigate('/');
							}, 1000);
						}}
					>
						{() => (
							<Form className='flex flex-col gap-4'>
								<div className='flex flex-col gap-3 border-1 border-gray-300 bg-gray-100 rounded-2xl p-4'>
									<FormItem labelText='Nombres' fieldName='firstName' />
									<FormItem labelText='Apellidos' fieldName='lastName' />
									<FormItem labelText='Email' fieldName='email' />
									<FormItem labelText='Cel/Tel' fieldName='number' />
									<DatePickerField
										labelText='Fecha de nacimiento'
										name='birthday'
									/>
									<FormItem labelText='Direccion' fieldName='address' />
									<FormItemSelect
										labelText='Tipo de contacto'
										fieldName='type_contact'
									/>
									<FormItemSelect labelText='Origen' fieldName='origin' />
								</div>
								<div className='flex flex-row justify-between px-2'>
									<Link to='/'>
										<button
											className='cursor-pointer text-lg text-white rounded-full bg-gray-200 py-2 hover:bg-gray-300 px-10 text-center mt-auto'
											type='button'
										>
											Cancelar
										</button>
									</Link>
									<button
										className='cursor-pointer text-lg text-white rounded-full bg-emerald-200 py-2 hover:bg-emerald-400 px-10 text-center mt-auto'
										type='submit'
									>
										Agregar
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</ViewTemplate>
	);
}

export default CreateContact;
