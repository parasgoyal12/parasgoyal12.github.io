import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I'm Paras and I am a Computer Science Undergraduate." />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I am CSE Senior @IIT Ropar. I am an upcoming software engineer at Microsoft.
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact Me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
