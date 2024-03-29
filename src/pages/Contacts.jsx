import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocumentTitle from "../components/DocumentTitle";
import { selectLoading } from "../redux/phone/selectors";
import { fetchContacts } from "../redux/phone/operations";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBar from "../components/SearchBox/SearchBar";
import Loader from "../components/Loader/Loader";

const Phone = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your phonebook</DocumentTitle>
      <ContactForm />
      <SearchBar />

      {isLoading ? <Loader /> : <ContactList />}
    </>
  );
};

export default Phone;
