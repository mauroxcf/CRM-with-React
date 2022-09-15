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

export { navbarLabels, modalOptions };
