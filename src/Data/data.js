//Validation library
import * as Yup from 'yup';

//SVG
import { ReactComponent as User } from '../Assets/Icons/user.svg';
import { ReactComponent as Commentary } from '../Assets/Icons/message.svg';
import { ReactComponent as Task } from '../Assets/Icons/file-check.svg';
import { ReactComponent as Whatsapp } from '../Assets/Icons/modalWhatsapp.svg';
import { ReactComponent as Phone } from '../Assets/Icons/modalPhone.svg';
import { ReactComponent as Message } from '../Assets/Icons/modalMessage.svg';

const navbarLabels = [
	{ label: 'Contactos', icon: <User stroke='white' />, url: '/' },
	{ label: 'Tareas', icon: <Task stroke='white' /> },
	{ label: 'Comentarios', icon: <Commentary stroke='white' /> },
];

const modalOptions = [
	{ label: 'Llamada telefonica', icon: <Phone /> },
	{ label: 'Mensaje de texto', icon: <Message /> },
	{ label: 'Llamada por whatsapp', icon: <Whatsapp /> },
	{ label: 'Mensaje por whatsapp', icon: <Whatsapp /> },
];

const formInitialValues = {
	name: '',
	last_name: '',
	email: '',
	phone: '',
	birthday: '',
	address: '',
	type_contact: '',
	origin: '',
};

const formValidationSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	last_name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	email: Yup.string()
		.email('Invalid email')
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	phone: Yup.number().required('Required'),
	birthday: Yup.date(),
	address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
	type_contact: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	origin: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
});

export { navbarLabels, modalOptions, formInitialValues, formValidationSchema };
