import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact, Education } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const TrIndexPage = ({ location }) => (
  <Layout location={location} lang="tr">
    <StyledMainContainer className="fillHeight">
      <Hero lang="tr" />
      <About lang="tr" />
      <Education lang="tr" />
      <Jobs lang="tr" />
      <Featured lang="tr" />
      <Projects lang="tr" />
      <Contact lang="tr" />
    </StyledMainContainer>
  </Layout>
);

TrIndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default TrIndexPage;
