import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import NameWithNumber from '../molecule/NameWithNumber';
import { Link } from 'react-router-dom';
import { ReactComponent as Pencil } from '../../Assets/Icons/pencil.svg';
import { ReactComponent as Trash } from '../../Assets/Icons/trash.svg';
import { ReactComponent as CirclePlus } from '../../Assets/Icons/circlePlus.svg';
import Modal from './Modal';
import ModalItem from '../molecule/ModalItem';
import { modalOptions } from '../../Data/data';

/**
 * @description Render a contact info.
 * @returns
 */
function ContactItem({ singleContact }) {
	const dropdownRef = useRef();
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (
				showModal &&
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target)
			) {
				setShowModal(false);
			}
		};

		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [showModal]);

	return (
		<div className='flex flex-col'>
			<div className='flex flex-row gap-1'>
				<div className='w-3/5'>
					<NameWithNumber
						fullName={singleContact.firstName + ' ' + singleContact.lastName}
						number={singleContact.number}
						numberExt={singleContact.numberExt}
					/>
				</div>
				<div
					className='w-2/5 flex flex-row justify-between items-center'
					ref={dropdownRef}
				>
					<Link to={`/update_contact/${singleContact.id}`}>
						<Pencil className='cursor-pointer' stroke='#4432a8' />
					</Link>
					<CirclePlus
						onClick={() => setShowModal(!showModal)}
						className='cursor-pointer'
						stroke='#4432a8'
					/>
					<Trash className='cursor-pointer' stroke='#4432a8' />
				</div>

				<hr />
			</div>
			{showModal && (
				<Modal>
					{modalOptions.map((option, index) => (
						<>
							<ModalItem key={index} text={option.label} icon={option.icon} />
							<hr />
						</>
					))}
				</Modal>
			)}
		</div>
	);
}

ContactItem.propTypes = {
	/* contains basic information of the contact */
	singleContact: PropTypes.object,
};

export default ContactItem;
