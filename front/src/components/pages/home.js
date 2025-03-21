import '../stylesPages/home.css'
import yagoImage from "./../../assets/Yago-GNC.jpg"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='divBody'>
            <h1>Yago Gabriel Nigro Caserta</h1>
            <h3>Estudiante de ingeniera en sistemas de infromación</h3>
            <h4>19 años</h4>
            <div className="buttomProyects">
                <Link to="./experience" className='linkButtom'>Proyectos</Link>
            </div>
        </div>
    );
}

export default Home;