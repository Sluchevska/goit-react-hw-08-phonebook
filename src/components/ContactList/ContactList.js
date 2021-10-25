import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { BsFillPersonXFill } from 'react-icons/bs';

import {
  Button,
  ContactItems,
  ContainerItems,
  Container,
  SpanHolder,
} from './ContactList.styled';
import { Span } from 'components/AuthNav/AuthNav.styled';

function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {contacts.length > 0 ? (
        <ContainerItems>
          {contacts.map(({ id, name, number }) => (
            <ContactItems key={id}>
              <SpanHolder>{name}: </SpanHolder>
              <SpanHolder>{number} </SpanHolder>
              <Button
                type="button"
                onClick={() => dispatch(contactsOperations.deleteContact(id))}
              >
                <BsFillPersonXFill />
                <Span>Delete contact</Span>
              </Button>
            </ContactItems>
          ))}
        </ContainerItems>
      ) : (
        <p>Currently your phonebook has no contacts. Please add them.</p>
      )}
    </Container>
  );
}

export default ContactList;
