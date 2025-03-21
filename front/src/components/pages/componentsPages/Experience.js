import './../stylesComponentsPages/experience.css';

const Experience = () => {
    return (
        <div className='experienceDivBody'>

            <div className='experienceDivElement'>
                <h2>Mi pagina web</h2>
                <div className='experienceDivElementImg'>
                    <img src="/Proyectos/proyecto1.png"></img>
                </div>
                <ul className="experienceDivElementUl">
                    <li className='experienceDivElementUlLi'><box-icon type='logo' name='javascript'></box-icon></li>
                    <li className='experienceDivElementUlLi'><box-icon type='logo' name='css3'></box-icon></li>
                    <li className='experienceDivElementUlLi'><box-icon type='logo' name='git'></box-icon></li>
                    <li className='experienceDivElementUlLi'><box-icon type='logo' name='react'></box-icon></li>

                </ul>
            </div>
            {/*<div className='experienceDivElement'></div>
            <div className='experienceDivElement'></div>
            <div className='experienceDivElement'></div>
            <div className='experienceDivElement'></div>
            <div className='experienceDivElement'></div>
            <div className='experienceDivElement'></div>
            <div className='experienceDivElement'></div>*/}
        </div>
    );
};

export default Experience;