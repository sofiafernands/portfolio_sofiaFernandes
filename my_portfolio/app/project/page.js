export default function Project() {
    return (
      <main className="bg-white shadow rounded-lg p-10 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Proyectos</h1>
        <p className="text-lg text-gray-600 mb-6">
          Aquí puedes ver algunos de mis proyectos desarrollados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Lista de proyectos */}
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Proyecto 1</h2>
            <p className="text-gray-600">Descripción breve del proyecto 1.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Proyecto 2</h2>
            <p className="text-gray-600">Descripción breve del proyecto 2.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Proyecto 3</h2>
            <p className="text-gray-600">Descripción breve del proyecto 3.</p>
          </div>
        </div>
      </main>
    );
  }
  