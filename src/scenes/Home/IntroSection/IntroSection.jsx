import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I fell in love with programming & Designing of course I have at least
              learnt something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}>
                  {' '}
                  Web Technologies and Products with their designs.
                </b>
              </i>
            </p>

            <p>
              A passionate Full Stack Software Developer & UI/UX Designer 🚀 <br />
              I
              have an experience of building{' '}
              <i>
                <b className={s.purple}>Web & Mobile</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  HTML, CSS, SCSS, Bootstrap, TailwindCss, WordPress, JavaScript, Reactjs, Api integrations, Redux, React Native, Solidity, Solana, Blockchain,  Nodejs, NestJs, AngularJs, VueJs, MongoDB, MYSQL
                </b>
              </i>{' '}
              and some other cool libraries
              <i>
                <br /><br />
                I have an experience of Designing
                <b className={s.purple}>Web, Mobile, Posters</b>
              </i>{' '}
              applications with
              <br />
              <i>
                <b className={s.purple}>
                  Adobe XD, Adobe Photoshop, Adobe illustrator, Figma
                </b>
              </i>{' '}
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/hassnaseer"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/Mr.Malik1122/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/malik-hassam-314667190/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
