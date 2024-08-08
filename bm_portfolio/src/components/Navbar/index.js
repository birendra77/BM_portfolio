import React from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import {bm} from "../../images/bm.png";
import { Close, CloseRounded } from "@mui/icons-material";
import { useTheme } from "styled-components";
import { Bio } from "../../data/constants";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1 rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display:flex;
  justify-content: space-between;
  height:60px;
  z-index=1;
  width:100%;
  padding:0 24px;
  max-width:1200px;
`;

const NavLogo = styled(LinkR)`
  width=80%;
  padding:0px;
  display:flex;
  justify-self:flex-start;
  cursor:pointer;
  text-decoration:none;
  align-items:center;
  @media screen and (max-width :640px){
  padding:0 0px;}
`;

const MobileIcon = styled.div`
  display:none;
  @media screen and (max-width :768 x){
    display:block;
    position :absolute;
    top:0;
    right:0;
    font-size:1.5 rem;
    transform:translate(-100%,60%);
    cutsor:pointer;
    color:${({ theme }) => theme.text_primary}
  }
  justify-content: space-between;
  height:60px;
  z-index=1;
  width:100%;
  padding:0 24px;
  max-width:1200px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GitHubButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 30px;
`;

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" style={{  fontSize: 30 }}>
        <ColorText>&lt;</ColorText>B
          <div style={{ color: theme.primary ,fontSize: 30}} >/</div>M
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>Github Profile</GitHubButton>
        </ButtonContainer>
      
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLink
            href="#about"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            About
          </MobileMenuLink>
          <MobileMenuLink
            href="#skills"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Skills
          </MobileMenuLink>
          <MobileMenuLink
            href="#experience"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Experience
          </MobileMenuLink>
          <MobileMenuLink
            href="#projects"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Projects
          </MobileMenuLink>
          <MobileMenuLink
            href="#education"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Education
          </MobileMenuLink>
          <GitHubButton
              href={Bio.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </GitHubButton>
        </MobileMenu>
        
      )}
      
        </NavContainer>
    </Nav>
  );
}

export default Navbar;
