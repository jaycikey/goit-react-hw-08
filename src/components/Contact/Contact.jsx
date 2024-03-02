import { FaUserAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/phone/contactsOperations";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  return (
    <li className={styles.contactItem}>
      <div className={styles.contactInfo} id={id}>
        <div className={styles.contactRow}>
          <FaUserAlt className={styles.contactIcon} />
          <p>{name}</p>
        </div>
        <div className={styles.contactRow}>
          <MdPhone className={styles.phoneIcon} />
          <p>{number}</p>
        </div>
      </div>
      <Button onClick={handleDeleteClick}>Delete</Button>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      >
        Are you sure you want to delete this contact?
      </ConfirmModal>
    </li>
  );
};

export default Contact;
