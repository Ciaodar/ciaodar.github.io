import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledEducationSection = styled.section`
  max-width: 700px;

  .education-grid {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 30px;
  }

  .education-item {
    position: relative;
    padding-left: 30px;
    border-left: 2px solid var(--green);

    &:hover {
      border-left-color: var(--green);
    }
  }

  .education-degree {
    color: var(--lightest-slate);
    font-size: var(--fz-xl);
    font-weight: 600;
    margin-bottom: 2px;
  }

  .education-school {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    margin-bottom: 5px;
  }

  .education-details {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
  }
`;

const educationData = [
  {
    degree: 'B.Sc. Computer Engineering',
    school: 'Gazi University',
    details: 'GPA: 2.80 · Expected 2026',
  },
  {
    degree: 'B.Sc. Computer Engineering (Transferred)',
    school: 'Abdullah Gül University',
    details: 'Transferred to Gazi University',
  },
  {
    degree: 'High School Diploma',
    school: 'Kayseri Hisarcıklıoğlu Fen Lisesi',
    details: 'Science High School',
  },
];

const Education = ({ lang = 'en' }) => {
  const isTr = lang === 'tr';

  const educationDataTr = [
    {
      degree: 'B.Sc. Bilgisayar Mühendisliği',
      school: 'Gazi Üniversitesi',
      details: 'Ortalama: 2.80 · Beklenen Mezuniyet: 2026',
    },
    {
      degree: 'B.Sc. Bilgisayar Bilimleri (Yatay Geçiş)',
      school: 'Abdullah Gül Üniversitesi',
      details: 'Gazi Üniversitesine yatay geçiş yapıldı',
    },
    {
      degree: 'Lise Diploması',
      school: 'Kayseri Hisarcıklıoğlu Fen Lisesi',
      details: 'Fen Lisesi',
    },
  ];

  const dataToUse = isTr ? educationDataTr : educationData;
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledEducationSection id="education" ref={revealContainer}>
      <h2 className="numbered-heading">{isTr ? 'Eğitim' : 'Education'}</h2>

      <div className="education-grid">
        {dataToUse.map((edu, i) => (
          <div className="education-item" key={i}>
            <div className="education-degree">{edu.degree}</div>
            <div className="education-school">{edu.school}</div>
            <div className="education-details">{edu.details}</div>
          </div>
        ))}
      </div>
    </StyledEducationSection>
  );
};

Education.propTypes = {
  lang: PropTypes.string,
};

export default Education;
