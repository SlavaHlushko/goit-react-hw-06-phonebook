import { InputForm } from 'components/inputForm/InputForm';
import { Contacts } from 'components/contacts/Contacts';
import { Filter } from 'components/filter/Filter';

import { Div, Header, PContact, Section } from './App.styled';

export const App = () => {
  return (
    <Div>
      <Header>Phonebook</Header>
      <Section>
        <InputForm />
      </Section>
      <PContact>Contacts</PContact>
      <Filter />
      <Contacts />
    </Div>
  );
};
