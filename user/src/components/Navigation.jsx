import { Link } from "react-router-dom"


export const Navigation = () => {

    
    return (
        <div className="flex justify-between py-3">
            <Link to='/tasks'>
                <h1 className="font-bold text-3xl mb-4 " >Task APP</h1>
            </Link>
            <Link className="bg-indigo-700 px-2 py-3 rounded-lg hover:bg-indigo-500 hover:cursor-pointer font-bold" 
            to='/task-create'>¡Crear Tarea!
            </Link>

        </div>
    )
}
