import { useDispatch, useSelector } from "react-redux";
import {contactsActions, getVisibleContacts} from "redux/contacts";


import {
  Span,
  Button,
  ContactItems,
  ContainerItems,
} from "./ContactList.styled";

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts.getVisibleContacts);
  return (
    <ContainerItems>
      {contacts.map(({ id, name, number }) => (
        <ContactItems key={id}>
          <Span>{name}: </Span>
          <Span>{number} </Span>
          <Button
            type="button"
            onClick={() => dispatch(contactsActions.deleteContact(id))}
          >
            Delete contact
          </Button>
        </ContactItems>
      ))}
    </ContainerItems>
  );
}

export default ContactList;
