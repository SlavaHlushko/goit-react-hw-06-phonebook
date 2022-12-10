import { InputForm } from './inputForm/InputForm';
import { Component } from 'react';
import { Contacts } from './contacts/Contacts';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter';
import { Container, Heading, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkContactAvailability = newData => {
    const { contacts } = this.state;
    return contacts.find(
      ({ name }) => name.toLowerCase() === newData.name.toLowerCase()
    );
  };

  formSubmitHandler = newData => {
    newData.id = nanoid();
    if (this.checkContactAvailability(newData)) {
      alert(`${newData.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newData],
    }));
  };

  contactDeleteHandler = contactId => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter(({ id }) => {
      return id !== contactId;
    });

    this.setState({
      contacts: filteredContacts,
    });
  };
  
  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normilizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizeFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Container>
        <Heading>PhoneBook</Heading>
        <InputForm onSubmit={this.formSubmitHandler} />
        {contacts.length > 0 && <Title>Contacts</Title>}
        {contacts.length > 0 && (
          <Filter filterValue={filter} onValueChange={this.changeFilter} />
        )}
        <Contacts
          contacts={visibleContacts}
          onDelete={this.contactDeleteHandler}
        />
      </Container>
    );
  }
}
