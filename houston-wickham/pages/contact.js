import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/Contact.module.css';
import { toast } from 'react-toastify';

function Contact() {
  const [state, handleSubmit] = useForm('xzbovnwp');

  const handleValidation = (e) => {
    e.preventDefault();
    if (e.target.name.value.length < 1) {
      toast.error('enter your name');
      return;
    }
    if (e.target.email.value.length < 1) {
      toast.error('enter your email');
      return;
    }
    if (e.target.message.value.length < 1) {
      toast.error('enter a message');
      return;
    }
    handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <p id='contact' className={styles.success}>
        Thanks for reaching out!
      </p>
    );
  }
  return (
    <main className={styles.container}>
      <h1 className={styles.heading} id='contact'>
        Contact Me
      </h1>
      <form onSubmit={handleValidation} className={styles.form}>
        <div className={styles.formContainer}>
          <label htmlFor='name'>Full Name:</label>
          <input
            id='name'
            type='name'
            name='name'
            placeholder='First and Last'
            required=''
          />
          <ValidationError prefix='Name' field='name' errors={state.errors} />
        </div>
        <div className={styles.formContainer}>
          <label htmlFor='email'>Email Address:</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='email@domain.tld'
            required=''
          />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </div>
        <div className={styles.formContainer}>
          <label htmlFor='message'>Message:</label>
          <textarea
            id='message'
            name='message'
            placeholder='Enter your message here'
            required=''
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
        </div>
        <div className={styles.formContainer}>
          <input
            type='hidden'
            name='_subject'
            id='email-subject'
            value='Contact Form Submission'
          ></input>
        </div>
        <button type='submit' disabled={state.submitting}>
          Submit
        </button>
      </form>
    </main>
  );
}

export default Contact;
