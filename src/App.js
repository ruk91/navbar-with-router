import Navbar from './Navbar';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  let component

  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/pricing":
      component = <Pricing />
      break
    case "/about":
      component = <About />
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        {component}
      </div>
    </>

  )
}

export default App;

