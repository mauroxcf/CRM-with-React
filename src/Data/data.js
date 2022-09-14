import { ReactComponent as User } from '../Assets/Icons/user.svg';
import { ReactComponent as Commentary } from '../Assets/Icons/message.svg';
import { ReactComponent as Task } from '../Assets/Icons/file-check.svg';

const navbarLabels = [
	{ label: 'Contactos', icon: <User stroke='white' />, url: '/' },
	{ label: 'Tareas', icon: <Task stroke='white' /> },
	{ label: 'Comentarios', icon: <Commentary stroke='white' /> },
];

export { navbarLabels };
