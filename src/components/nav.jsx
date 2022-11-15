import "../styles/components/nav.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="Navbar">
            <ul className='Navbar-menu'>
                <li className='borde'> <a onClick={()=> navigate(`/home`) } href='#'>Home</a> </li>
                <li className='borde'> <a onClick={()=> navigate(`/deseados`) } href='#'>Deseados</a> </li>
            </ul>
        </nav>
    );
}



export default Navbar;

