import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-md), 5vw, var(--fz-xl));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = ({ lang = 'en' }) => {
  const isTr = lang === 'tr';
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>{isTr ? 'Merhaba, ben' : 'Hi, I am'}</h1>;

  const two = (
    <h2 className="big-heading">
      Metehan &quot;Ciaodar&quot; Çavdar.{' '}
      <span
        style={{
          opacity: 0.4,
          fontSize: '0.45em',
          fontWeight: 'normal',
          fontFamily: 'var(--font-sans)',
          verticalAlign: 'middle',
          marginLeft: '10px',
        }}></span>
    </h2>
  );
  const three = (
    <>
      <p>
        {isTr
          ? 'Oyunlar, mekanikler, tasarımlar ve modlar geliştiriyorum. Unity, genel bilgisayar grafikleri prensipleri ve backend geliştirme konularında son derece yetkinim. Etkileşimli deneyimler oluşturmayı ve yeni oyun fikirleri üzerinde denemeler yapmayı seviyorum.'
          : 'I develop games, mechanics, designs, and mods. I am highly proficient in Unity, general computer graphics principles, and backend development. I love crafting engaging experiences and experimenting with new game ideas.'}
      </p>
    </>
  );
  const four = (
    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
      <a className="email-link" href="https://ciaodar.itch.io" target="_blank" rel="noreferrer">
        {isTr ? 'Jam oyunlarıma göz at!' : 'Check out my jam games!'}
      </a>
      <a
        className="email-link"
        href="https://www.nexusmods.com/profile/Ciaodar/mods"
        target="_blank"
        rel="noreferrer">
        {isTr ? 'Modlarıma göz at!' : 'Check out my mods!'}
      </a>
    </div>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  lang: PropTypes.string,
};

export default Hero;
