import './Home.css';
import Navbar from '../../components/navBar';
import Card from '../../components/home/card/Card';


function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h3 className='Tittle'>Bienvenidos a la Tienda falsa de Rick And Morty</h3>
      <Card></Card>
    </div>

  )
}
export default Home;
