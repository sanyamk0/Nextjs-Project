import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "@/app/styles/contact.module.css";

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Page</h1>
        <ContactCard />
        <section className={styles.contact_section}>
          <h2>
            We&apos;d love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14667.23756062086!2d77.39815179778131!3d23.21361611464172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e43fe40941%3A0x10377d4af64ac6e9!2sMaulana%20Azad%20National%20Institute%20of%20Technology%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1689415815429!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        className={styles.mapping}
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Page;
