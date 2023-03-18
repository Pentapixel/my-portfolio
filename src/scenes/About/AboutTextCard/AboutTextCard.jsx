import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, We are{' '}
        <span className={s.purple}>PentaPixel</span>
        from <span className={s.purple}> USA.</span>
        <br />
        We partner with enterprises, startups, and startup accelerators. 
        <br />Our approach is highly collaborative, and we think about the long game from the start. 
        <br />
        We mainly focus on enterprise software development and startup development. 
        <br />
        The results of our work lay the foundation for long-term alliances.
      </p>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Strive to build things that make a difference!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
