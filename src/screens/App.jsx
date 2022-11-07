import '../styles/index.css'
import Card from "../components/Card.jsx"
import Navbar from '../components/nav'
import { itemList } from '../API/itemList'
import  { useState } from 'react'
import image from "../assets/chair.jpg"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <h1>ECOMMERCE</h1>
      <section className="card-container">
        {itemList.map(i => {
          console.log(count)
          return (
            <Card image={image} tittle={i.tittle} price={i.price} />
          )
        })}
      </section>
    </div>
  )
}

export default App;
