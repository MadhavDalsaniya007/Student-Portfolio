import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
