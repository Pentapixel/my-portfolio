import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiSass,
} from 'react-icons/di';
import {
  SiRedux,
  SiMysql,
  SiVuetify,
  SiAdobexd,
  SiAdobephotoshop,
  SiGithub,
  SiWordpress,
  SiFigma,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiMysql />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiVuetify />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiAdobexd />
      </li>
      <li className={s.techIcon}>
        <SiAdobephotoshop />
      </li>
      <li className={s.techIcon}>
        <SiGithub />
      </li>
      <li className={s.techIcon}>
        <SiWordpress />
      </li>
      <li className={s.techIcon}>
        <SiFigma />
      </li>
    </ul>
  );
};

export default TechSkills;
