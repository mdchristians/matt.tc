/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import styled from '@emotion/styled';
import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const IconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 3rem;
`;
const IconWrapper = styled.a`
  height: 50px;
  width: 50px;
  background-color: ${p => p.color};
  color: #FFFFFF !important;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px -5px #AAC7FA;
  transition: all 0.5s ease-in-out 0s;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  &:hover {
    box-shadow: 0 15px 35px 0px #AAC7FA;
  }
`;

const Hero = ({ sx, children }) => {
  const { theme } = useThemeUI();
  
  return (
    <div
      sx={{
        textAlign: 'center',
        marginTop: '-6rem',
        h1: {
          fontSize: 6,
          fontFamily: 'heading',
          mb: 0
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        ...sx
      }}
    >
      <h1>Matt Christians</h1>
      Frontend Engineer at <a href="https://hireology.com">Hireology</a>
      <IconRow>
        <IconWrapper color={theme.colors.primary} href="https://github.com/mdchristians">
          <FiGithub />
        </IconWrapper>
        <IconWrapper color={theme.colors.primary} href="https://www.linkedin.com/in/mattchristians">
          <FiLinkedin />
        </IconWrapper>
        <IconWrapper color={theme.colors.primary} href="https://twitter.com/Matt_Christians">
          <FiTwitter />
        </IconWrapper>
      </IconRow>
    </div>
  )
}

export default Hero;