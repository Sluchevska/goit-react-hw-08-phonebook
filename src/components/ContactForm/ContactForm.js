import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { LabelInput, Input, Button } from './ContactForm.styled';
import contactsActions from '../../redux/contacts/contacts-actions';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { useSelector } from 'react-redux';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts)
 


  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };
  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkNumber = number => {
    return contacts.find(contact => contact.number === number);
  };


  const handleSubmit = e => {
    e.preventDefault();
    if (checkName(name)) {
      alert(`${name} is already in your contacts!`);
    } else if (checkNumber(number)) {
      alert(`${number} is already in your contacts!`);
    } else {
      dispatch(contactsOperations.addContact({name, number} ));
    }
      resetState();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <LabelInput >Name</LabelInput>
        <Input
          type="text"
          name="name"
          value={name}
        
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <LabelInput>Number</LabelInput>
        <Input
          type="tel"
          name="number"
       
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />

        <Button type="submit">Add contact</Button>
      </form>
    </div>
  );
}
