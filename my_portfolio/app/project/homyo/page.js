export default function Homyo() {
    return (
      <main className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 shadow rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-indigo-800">Homyo</h1>
        <p className="text-lg text-indigo-700 mb-6">
          El <b>Marketplace de Servicios para el Hogar</b> es una plataforma que conecta a propietarios y gestores de oficinas con profesionales cualificados. La plataforma ofrece un sistema de pujas que facilita la negociación de precios entre clientes y proveedores, creando un entorno competitivo y beneficioso para ambos.
        </p>
        <div className="text-left text-indigo-700">
          <h2 className="text-xl font-semibold mb-4 text-indigo-800">Características para los Clientes</h2>
          <ul className="list-disc list-inside mb-6">
            <li><b>Espacios Personalizados:</b> Guardar ubicaciones preferidas para solicitar servicios rápidamente.</li>
            <li><b>Solicitudes de Servicio:</b> Crear y publicar solicitudes detalladas, incluyendo fecha, hora y presupuesto.</li>
            <li><b>Selección de Pujas:</b> Revisar y seleccionar la mejor puja de varios proveedores.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mb-4 text-indigo-800">Características para los Proveedores de Servicios</h2>
          <ul className="list-disc list-inside mb-6">
            <li><b>Sistema de Pujas:</b> Ver y competir por solicitudes de servicio disponibles.</li>
            <li><b>Gestión de Perfil:</b> Mostrar habilidades y experiencia para atraer clientes.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mb-4 text-indigo-800">Tecnologías Utilizadas</h2>
          <ul className="list-disc list-inside mb-6">
            <li><b>Frontend:</b> React, JavaScript y Tailwind CSS para una interfaz moderna y responsiva.</li>
            <li><b>Backend:</b> Flask para gestionar la base de datos y las APIs.</li>
            <li><b>Base de Datos:</b> Un sólido backend con Flask, asegurando un manejo eficiente y seguro.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mb-4 text-indigo-800">Características Clave</h2>
          <ul className="list-disc list-inside mb-6">
            <li><b>Sistema de Pujas:</b> Permite precios competitivos y flexibilidad.</li>
            <li><b>Espacios Guardados:</b> Facilita la selección y gestión de ubicaciones.</li>
            <li><b>Programación Flexible:</b> Los clientes eligen la fecha y hora para los servicios.</li>
            <li><b>Interfaz Fácil de Usar:</b> Diseñada with React and Tailwind CSS, asegurando una experiencia fluida.</li>
          </ul>
  
          <h2 className="text-xl font-semibold mb-4 text-indigo-800">Resumen</h2>
          <p className="mb-6 text-indigo-700">
            El Marketplace de Servicios para el Hogar es una solución integral que conecta a clientes y proveedores de servicios con funcionalidades innovadoras, como un sistema de pujas y espacios personalizados. El uso de tecnologías modernas garantiza una plataforma robusta y escalable, ofreciendo una experiencia de usuario amigable y fomentando un mercado competitivo y transparente.
          </p>
  
          <h2 className="text-xl font-semibold mb-4 text-indigo-800">Video</h2>
          <div className="mb-6">
            <video
              controls
              className="rounded-lg shadow-md bg-indigo-200"
              width="100%"
              height="auto"
            >
              <source src="/HOMYO.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
  
          <h2 classame="text-xl font-semibold mb-4 text-indigo-800">Enlaces</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/in/sofia-fernandes-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-500 transition duration-300"
              title="visita mi perfil linkedind"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sofiafernands"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-600 transition duration-300"
              title="visita mi perfil de github"
            >
              GitHub
            </a>
          </div>
        </div>
      </main>
    );
  }
  