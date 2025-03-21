import './../stylesPages/home.css'
import yagoImage from "./../../assets/Yago-GNC.jpg"
function Home() {
    return (
        <div className='divBody'>
            <h1>Yago Gabriel Nigro Caserta</h1>

            <div className="imgContainer">
                <img src={yagoImage} className="img"></img>
            </div>

            <h3>Estudiante de ingeniera en sistemas de infromación</h3>
        </div>
    );
}

export default Home;