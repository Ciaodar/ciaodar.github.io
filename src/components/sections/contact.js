import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = ({ lang = 'en' }) => {
  const isTr = lang === 'tr';
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">{isTr ? 'Sırada Ne Var?' : 'What’s Next?'}</h2>

      <h2 className="title">{isTr ? 'İletişime Geç' : 'Get In Touch'}</h2>

      <p>
        {isTr
          ? 'Şu anda yeni fırsatlara açığım, mesaj kutum her zaman açıktır.'
          : 'I’m currently looking for any new opportunities, my inbox is always open.'}
      </p>

      <div
        style={{
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '50px',
        }}>
        <a className="email-link" href={`mailto:${email}`} style={{ marginTop: 0 }}>
          {isTr ? 'E-Posta Gönder' : 'Send E-Mail'}
        </a>

        <a className="email-link" href={`https://wa.me/905010168608`} style={{ marginTop: 0 }}>
          {isTr ? 'WhatsApp Mesajı Gönder' : 'Send WhatsApp Message'}
        </a>
      </div>
    </StyledContactSection>
  );
};

Contact.propTypes = {
  lang: PropTypes.string,
};

export default Contact;
