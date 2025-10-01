import './hero.css'

function Hero() {
    return(
        <section className="hero" id="inicio">
            <div className="container">
                <h2>Bienvenido a Mi Sitio</h2>
                <p>Una solución simple para comenzar tu proyecto web.</p>
                <a href="#contacto" className="btn_hero">Contáctanos</a>
            </div>
        </section>
    )
}

export default Hero;