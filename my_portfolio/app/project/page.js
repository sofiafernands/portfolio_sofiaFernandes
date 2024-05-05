import ProjectCard from "../component/ProjectCard";

export default function Project() {
  return (
    <main className="bg-white shadow rounded-lg p-10 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Proyectos</h1>
      <p className="text-lg text-gray-600 mb-6">
        Aquí puedes ver algunos de mis proyectos desarrollados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="Homyo"
          description="El Marketplace de Servicios para el Hogar"
          href="/project/homyo"
        />
        <ProjectCard
          title="E-commerce"
          description="Tienda Virtual de Productos Variados"
          href="/project/e-commerce"
        />
        <ProjectCard
          title="Centro SAT"
          description="Centro de Reparación de Dispositivos Móviles"
          href="/project/mobile_repair_store"
        />
      </div>
    </main>
  );
}
