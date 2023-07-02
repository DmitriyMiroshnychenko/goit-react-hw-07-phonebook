import { Container } from './Container';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Notification } from './Notification';
import { Filter } from './Filter';
import { useContacts } from 'hooks/useContacts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircleLoader } from './Loaders/CircleLoader';
import { CircleLoaderBackdrop } from './Loaders/CircleLoader/CircleLoaderBackdrop';

export function App() {
  const { contacts, status } = useContacts();

  return (
    <Container>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        theme={'colored'}
      />

      {(status === 'deleteLoading' || status === 'addLoading') && (
        <CircleLoaderBackdrop>
          <CircleLoader type={'DeleteLoader'} />
        </CircleLoaderBackdrop>
      )}

      <Section tag={'h1'} title={'Phonebook'}>
        <ContactForm />
      </Section>

      <Section tag={'h2'} title={'Contacts'}>
        {status === 'loading' && <CircleLoader type={'ListLoader'} />}
        <>
          {(status === 'resolved' || status === 'deleteResolved') &&
          contacts.length === 0 ? (
            <Notification message={'No contacts added'} />
          ) : (
            <>
              {contacts.length > 0 && <Filter />}
              <ContactList />
            </>
          )}
        </>
      </Section>
    </Container>
  );
}
