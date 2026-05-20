import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = ({ lang = 'en' }) => {
  const isTr = lang === 'tr';
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Unity',
    'C#',
    'Backend Development',
    'Game Design',
    'Computer Graphics',
    'Bannerlord Modding',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">{isTr ? 'Hakkımda' : 'About Me'}</h2>

      <div className="inner">
        <StyledText>
          <div>
            {isTr ? (
              <>
                <p>
                  Gazi Üniversitesinde son sınıf Bilgisayar Mühendisliği öğrencisiyim. Bugüne kadar
                  20'den fazla game jam'e katıldım ve her yıl Aralık ayında düzenlediğimiz
                  &quot;Ayaz Jam&quot; etkinliğini iki kez organize ettim.
                </p>

                <p>
                  Oyun geliştirme serüvenim lise yıllarımda başladı. İlk oyunumu bir{' '}
                  <code>.bat</code> dosyasında yazıp kayıt sistemi olarak da basit bir metin dosyası
                  kullanmıştım! Daha sonra lise eğitimime odaklanarak oyun geliştirme tutkumu
                  üniversite yıllarına erteledim. Üniversiteye geldiğimde Oyun Topluluğu, Kutu
                  Oyunları Topluluğu ve ACM gibi topluluklarla tanıştım ve bu topluluklarda başkan,
                  başkan yardımcısı ve birim başkanı gibi aktif liderlik rolleri üstlendim.
                </p>

                <p>
                  Şu sıralar Mount &amp; Blade Bannerlord modları geliştirmekle yakından
                  ilgileniyorum.
                </p>

                <p>Son zamanlarda üzerinde çalıştığım teknolojiler ve alanlar:</p>
              </>
            ) : (
              <>
                <p>
                  I am a senior Computer Engineering student at Gazi University. I have participated
                  in over 20 game jams and twice organized &quot;Ayaz Jam&quot;, an event we hold
                  every December.
                </p>

                <p>
                  My journey in game development started in high school. I wrote my first game in a{' '}
                  <code>.bat</code> file and used a simple text file for the save system! Afterward,
                  I focused on my high school studies and postponed my passion for game development
                  until university. There, I was introduced to communities like the Gaming Club,
                  Board Games Club, and ACM, where I took on active leadership roles including
                  president, vice president, and unit head.
                </p>

                <p>
                  Currently, I'm highly interested in developing Mount &amp; Blade Bannerlord mods.
                </p>

                <p>Here are a few technologies and domains I’ve been working with recently:</p>
              </>
            )}
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

About.propTypes = {
  lang: PropTypes.string,
};

export default About;
