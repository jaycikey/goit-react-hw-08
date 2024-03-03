import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/phone/selectors";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </ul>
  );
};

export default ContactList;
