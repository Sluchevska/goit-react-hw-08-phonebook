import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { TitleH1, TitleH2 } from 'components/App/App.styled';
import { Container } from 'views/RegisterView/RegisterView.styled';

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
