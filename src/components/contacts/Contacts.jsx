import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

import { Ul, Li, PContact, Button } from 'components/contacts/Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contactsList } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };
  const contacts = getFilterContacts();

  return (
    <Ul>
      {contacts.length === 0 && <p>There is not any contacts</p>}
      {contacts.map(({ name, number, id }) => {
        return (
          <Li key={id}>
            <PContact>
              {name}: {number}
              <Button type="button" onClick={() => deleteContact(id)}>
                Delete
              </Button>
            </PContact>
          </Li>
        );
      })}
    </Ul>
  );
};
