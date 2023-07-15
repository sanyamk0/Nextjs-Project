import styles from "@/app/styles/contact.module.css";
import Link from "next/link";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              <MdEmail />
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>Response Time: 72 Hours</p>
            <Link href="/">
              Send Email<span>-&gt;</span>
            </Link>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdVoiceChat />
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9AM - 6PM ET</p>
            <p className={styles.last_para}>Weekends: 9AM - 5PM ET</p>
            <Link href="/">
              Chat Now<span>-&gt;</span>
            </Link>
          </div>
          <div className={styles.grid_card}>
            <i>
              <MdForum />
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected</p>
            <p className={styles.last_para}>Response Time: 72 Hours</p>
            <Link href="/" className={styles.anchorLink}>
              Ask The Community<span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
