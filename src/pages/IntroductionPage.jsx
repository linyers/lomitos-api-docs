import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PathsContext from "../context/PathsContext";

export default function IntroductionPage() {
  const { setActualPath, setPageNav } = useContext(PathsContext);

  useEffect(() => {
    setPageNav([]);
  }, []);


  return (
    <>
      <h2 className="font-bold text-6xl mb-8">Introduccion</h2>

      <p className="text-lg">
        Lomitos API nace con la idea de recopilar las lomiterias de Santiago del
        Estero. Lomitos API puede ser utilizado para cualquier tipo de proyecto
        y se puede contribuir añadiendo nuevas lomiterias. Para poder agregar
        nuevas lomiterias necesitara un{" "}
        <Link
          onClick={(e) => setActualPath('/authentication')}
          className="text-blue-400 hover:text-blue-500"
          to="/authentication"
        >
          usuario
        </Link>
        .
      </p>

      <p className="text-lg mt-10">Esta API incluye caracteristicas como:</p>

      <ul className="text-lg mt-5 px-5 font-bold">
        <li>👾 Autenticacion con JWT</li>
        <li>🚀 Subida de archivos</li>
        <li>🥪 Filtrar lomitos por su rating y/o el horario</li>
        <li>🚬 Operaciones CRUD</li>
        <li>📄 Archivos de Postman</li>
      </ul>
    </>
  );
}
