import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Education from "./components/Education";
import { useState, useEffect } from "react";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarCanvas from "./components/Canvas/Stars";
import { AnimatePresence } from "framer-motion";
import ProjectDetails from "./components/ProjectDetails";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <StarCanvas />
          <AnimatePresence>
            <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state && (
              <ProjectDetails
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )}
            </div>
          </AnimatePresence>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
