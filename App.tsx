import Header from './components/Header'
import Card from './components/Card'
import type { Demand } from './types'

const example: Demand = {
  id: 1,
  title: 'Site Lindão',
  client: 'Os mais mió de baum',
  priority: 'high',
  status: 'todo'
}

function App(){
  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main className='p-6'>
        <h2 className="text-2xl font-bold text-gray-800">
          Demandas
          <div className='mt-4 max-w-sm'>
            <Card demand={example} />
          </div>
        </h2>
      </main>
    </div>
  )
}

export default App