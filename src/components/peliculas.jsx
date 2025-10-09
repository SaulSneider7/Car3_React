import datos from '../data/peliculas.json';

function ListaPeliculas() {
  return (
    <div className="min-h-screen bg-gray-50 p-60">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Lista de Películas
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {datos.peliculas.map((pelicula) => (
          <div
            key={pelicula.id}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {pelicula.titulo}
            </h3>
            <p className="text-gray-500 text-sm">
              <span className="font-medium">Año:</span> {pelicula.año}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              <span className="font-medium">Género:</span> {pelicula.genero}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaPeliculas;
