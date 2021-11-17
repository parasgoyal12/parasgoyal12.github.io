import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
      <a target='_blank' href="https://drive.google.com/file/d/1yDuMo2Xw5M81hAMTtiJ5n9VcwUUaO3Gq/view?usp=sharing">Resume</a> 
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
