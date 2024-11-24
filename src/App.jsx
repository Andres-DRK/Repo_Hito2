import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import RegisterPage from './pages/components/RegisterPage';
import Loginpage from './pages/components/Loginpage';






function App() {

  return (
    <>
      <Navbar></Navbar>
      {/*<Home></Home>*/}
      <RegisterPage></RegisterPage>
      <Loginpage></Loginpage>
      <Footer></Footer>
    </>
  )
}

export default App