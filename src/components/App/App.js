import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Container, TitleH1, TitleH2 } from './App.styled';
import AppBar from '../AppBar/AppBar'
import { Route, Switch } from 'react-router';
import HomeView from '../../views/HomeView/HomeView';
import RegisterView from '../../views/RegisterView/RegisterView';
import ContactsView from '../../views/ContactsView/ContactsView';
import LoginView from '../../views/LoginView/LoginView';


export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/register" component={RegisterView} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path="/contacts" component={ContactsView} />
        
      </Switch>
      {/* <TitleH1>Phonebook</TitleH1>
      <ContactForm />
      <TitleH2>Contacts</TitleH2>
      <Filter />
      <ContactList /> */}
    </Container>
  );
}
