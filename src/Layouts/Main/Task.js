import ContactComments from '../../Components/organism/ContactComments';

//UI
import ContactInfo from '../../Components/organism/ContactInfo';
import ContactTask from '../../Components/organism/ContactTask';

//BL
import { dummyData } from '../../Data/dummyData';

function Task() {
	const contactInfo = dummyData[0];
	return (
		<div className='flex flex-col md:h-full w-full gap-4 pt-8 px-4 pb-4'>
			<p className='text-md text-blue-900 font-bold pl-8'>Datos de contacto</p>
			<ContactInfo contactInfo={contactInfo} />
			<ContactComments comments={contactInfo.comment} />
			<ContactTask />
		</div>
	);
}

export default Task;
