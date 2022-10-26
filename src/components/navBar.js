import  CartWidget  from './CartWidget'
import { ShoppingCart } from 'react-feather';

const Navbar = () => {
    return (
        <div>
            <ul className='Navbar-menu'>
                <li className='borde'> <a href='#'>Home</a> </li>
                <li className='borde'> <a href='#'>Deseados</a> </li>
                <CartWidget/>
            </ul>
            
        </div>
    );
}



export default Navbar;


