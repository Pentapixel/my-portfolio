import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main.svg';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hi There! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          We're 
          <strong className={s.mainName}> PentaPixel.</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              "Blockchain Developer",
              'Web Developer',
              'Continuously Learning',
              "Mobile App developer",
              "Game developer",
              "Email Marketing",
              "Wordpress Developer",
              "Customer Support",
              "Content Writer",
              "Backend Developer",
              "FrontEnd Developer",
              "2d, 3d Designer",
              'UI/UX Designer',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
