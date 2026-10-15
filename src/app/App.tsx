
import MainLayout from "../components/layout/MainLayout"
import About from "../features/home/components/About"
import Hero from "../features/home/components/Hero"

function App() {
  return (
    <MainLayout>
      <>
        <Hero />
        <About />
      </>
    </MainLayout>
  )
}

export default App
    