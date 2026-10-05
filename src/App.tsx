import {Outlet} from 'react-router-dom';
import Nav from './component-global/Nav';
import Footer from './component-global/Footer';

function App() {
let name = 'PicoPeeps';

  return (
    <>
    <Nav/>
    <main>
      <Outlet context={name}/>
    </main>
    <Footer/>
    </>
  )
}

export default App
