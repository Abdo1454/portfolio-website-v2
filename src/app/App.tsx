
import MainLayout from "../components/layout/MainLayout"
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
      </>
    </MainLayout>
  )
}

export default App
