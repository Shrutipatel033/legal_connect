import ContactHero from "../../components/Contacts/ContactHero";
import ContactInfoCards from "../../components/Contacts/ContactInfo";
import ContactForm from "../../components/Contacts/ContactForm";
import ContactFAQ from "../../components/Contacts/FAQContact";
import ContactCTA from "../../components/Contacts/ContactCTA";
const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
};

export default Contact;