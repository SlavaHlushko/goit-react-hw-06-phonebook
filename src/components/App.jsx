import { InputForm } from './inputForm/InputForm';
import { Contacts } from './contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter';
import { Container, Heading, Title } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { addContact, removeContact } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.array);

  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const formSubmitHandler = newData => {
    newData.id = nanoid();
    if (checkContactAvailability(newData)) {
      alert(`${newData.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newData));
  };

  const checkContactAvailability = newData => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
    );
  };

  const contactDeleteHandler = contactId => {
    dispatch(removeContact(contactId));
  };

  const changeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <Container>
      <Heading>PhoneBook</Heading>
      <InputForm onSubmit={formSubmitHandler} />
      {contacts.length > 0 && <Title>Contacts</Title>}
      {contacts.length > 0 && (
        <Filter filterValue={filter} onValueChange={changeFilter} />
      )}
      <Contacts contacts={visibleContacts} onDelete={contactDeleteHandler} />
    </Container>
  );
};
