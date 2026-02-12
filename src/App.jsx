import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
