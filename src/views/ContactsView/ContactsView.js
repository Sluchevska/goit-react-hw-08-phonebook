import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { TitleH1, Container, TitleH2 } from 'components/App/App.styled';

function ContactsView() {
  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default ContactsView;
