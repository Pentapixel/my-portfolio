import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import aboutPromoImg from '../../assets/about-promo.svg';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
             About <b className={s.purple}>Us</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={aboutPromoImg} alt="about" />
          </div>
        </div>
        <div className={s.aboutDescription}>
            <h1 className={s.title}>
           Our company
            </h1>
           <p>Pentapixel is thought to be one of the well-known companies offering IT services. The professional company is tightly organized to provide more readily usable outcomes and solutions for application in a variety of sectors.
Our goal is to play a significant role in the technological revolution by developing platforms and products that will enable us to collaborate with businesses that are working to find solutions to the world's most pressing issues.
Our vision is to be a key part of the technological revolution by creating products and platforms where we can partner with highly skilled and trained individuals with companies who are looking to solve the world’s biggest problems.</p>
          </div>
        <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          Days I <b className={s.purple}>Code</b>
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
