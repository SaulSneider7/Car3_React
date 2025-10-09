import datos from '../data/data.json'

function Galeria() {
    return(
        <div>
            {datos.peliculas.map(pelicula => (
                <div key={pelicula.id}>
                    <h3>{pelicula.titulo}</h3>
                    <p>{pelicula.año}</p>
                </div>
            ))}
        </div>
    )
}

export default Galeria;