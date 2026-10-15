
import MainLayout from "../components/layout/MainLayout"
import About from "../features/home/components/About"
import Hero from "../features/home/components/Hero"
import Skills from "../features/skills/components/Skills"

function App() {
  return (
    <MainLayout>
      <>
        <Hero />
        <About />
        <Skills />
      </>
    </MainLayout>
  )
}

export default App
