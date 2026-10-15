
import MainLayout from "../components/layout/MainLayout"
import Experience from "../features/experience/components/Experience"
import About from "../features/home/components/About"
import Hero from "../features/home/components/Hero"
import Projects from "../features/projects/components/Projects"
import Skills from "../features/skills/components/Skills"

function App() {
  return (
    <MainLayout>
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </>
    </MainLayout>
  )
}

export default App
