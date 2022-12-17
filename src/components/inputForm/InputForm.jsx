import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Lable, Input, Button } from './InputForm.styled';

export const InputForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const data = { name, number };

  const onInputName = e => {
    setName(e.target.value);
  };

  const onInputNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(data);
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Lable>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={onInputName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </Lable>

      <Lable>
        Phone:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={onInputNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Lable>

      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
