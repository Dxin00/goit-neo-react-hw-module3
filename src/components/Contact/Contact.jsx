import { FaUser, FaPhone } from 'react-icons/fa';
import css from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
  const handleContactClick = () => {
    if (name === "Dmytro Terokhin") {
      window.open('https://t.me/DmytroTerokhin', '_blank');
    }
  };

  return (
    <div 
      className={css.contact}
      onClick={handleContactClick}
      style={name === "Dmytro Terokhin" ? { 
        cursor: 'pointer',
        backgroundColor: '#e3f2fd',
        transition: 'all 0.3s ease'
      } : {}}
    >
      <div className={css.info}>
        <p className={css.name}>
          <FaUser className={css.icon} /> {name}
        </p>
        <p className={css.number}>
          <FaPhone className={css.icon} /> {number}
        </p>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }} 
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
