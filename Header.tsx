import { Plus } from 'lucide-react'
function Header(){
    return (
        <header className='flex items-center justify-between px-6 py-4 shadow-lg bg-white'>
            <h1 className="text-3xl font-bold text-blue-600">
                Quadro de Demandas
            </h1>

            <button className="flex gap-2 items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg shadow-blue-900 hover:bg-blue-700 font-semibold">
                <Plus className='size-4 stroke-3' />
                Nova demanda
            </button>
        </header>
    )
}

export default Header