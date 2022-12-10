import PropTypes from 'prop-types';
import { List, ListItem } from './Contacts.styled';
import { Button } from 'components/inputForm/InputForm.styled';

export const Contacts = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, id, number }) => {
        return (
          <ListItem key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </ListItem>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
