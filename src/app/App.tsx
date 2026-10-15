
import MainLayout from "../components/layout/MainLayout"
import Experience from "../features/experience/components/Experience"
import About from "../features/home/components/About"
import Hero from "../features/home/components/Hero"
import Projects from "../features/projects/components/Projects"
import Skills from "../features/skills/components/Skills"
import Contact from "../features/contact/components/Contact"

function App() {
  return (
    <MainLayout>
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </>
    </MainLayout>
  )
}

export default App
