import { useState } from 'react'
import ComponentShowcase from './ComponentShowcase'

function App() {
  const [currentView, setCurrentView] = useState('basics')

  const BasicExamples = () => (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Aprendiendo Tailwind CSS</h1>
        <p className="text-blue-100">Conceptos básicos para entrevistas</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button 
            onClick={() => setCurrentView('basics')}
            className={`px-4 py-2 rounded ${currentView === 'basics' ? 'bg-blue-800' : 'bg-blue-500 hover:bg-blue-700'}`}
          >
            Conceptos Básicos
          </button>
          <button 
            onClick={() => setCurrentView('components')}
            className={`px-4 py-2 rounded ${currentView === 'components' ? 'bg-blue-800' : 'bg-blue-500 hover:bg-blue-700'}`}
          >
            Componentes Avanzados
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Sección 1: Spacing y Colors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Spacing y Colors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Padding ejemplos */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-4 bg-red-100 rounded-t-lg">
                <h3 className="font-semibold text-red-800">Padding p-4</h3>
                <p className="text-red-600">16px de padding en todos lados</p>
              </div>
              <div className="px-6 py-3">
                <p className="text-gray-600">px-6 py-3: horizontal 24px, vertical 12px</p>
              </div>
            </div>

            {/* Margin ejemplos */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="mb-4 p-3 bg-green-100 rounded">
                <h3 className="font-semibold text-green-800 mb-2">Margin Bottom</h3>
                <p className="text-green-600">mb-4 = 16px</p>
              </div>
              <div className="mt-6 p-3 bg-blue-100 rounded">
                <h3 className="font-semibold text-blue-800">Margin Top</h3>
                <p className="text-blue-600">mt-6 = 24px</p>
              </div>
            </div>

            {/* Colors */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold mb-4">Colores Comunes</h3>
              <div className="space-y-2">
                <div className="p-2 bg-gray-200 text-gray-800 rounded">Gray</div>
                <div className="p-2 bg-blue-500 text-white rounded">Blue</div>
                <div className="p-2 bg-green-500 text-white rounded">Green</div>
                <div className="p-2 bg-red-500 text-white rounded">Red</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección 2: Flexbox */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">2. Flexbox Layout</h2>
          
          {/* Flex básico */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-4">Flex básico - justify-between</h3>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
              <div className="bg-blue-500 text-white px-4 py-2 rounded">Izquierda</div>
              <div className="bg-green-500 text-white px-4 py-2 rounded">Centro</div>
              <div className="bg-red-500 text-white px-4 py-2 rounded">Derecha</div>
            </div>
          </div>

          {/* Flex column */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="font-semibold mb-4">Flex Column - space-y-4</h3>
            <div className="flex flex-col space-y-4 p-4 bg-gray-50 rounded">
              <div className="bg-purple-500 text-white p-3 rounded">Elemento 1</div>
              <div className="bg-indigo-500 text-white p-3 rounded">Elemento 2</div>
              <div className="bg-pink-500 text-white p-3 rounded">Elemento 3</div>
            </div>
          </div>
        </section>

        {/* Sección 3: Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">3. CSS Grid</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-4">Grid responsive - cols-1 md:cols-2 lg:cols-4</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white p-4 rounded-lg text-center font-semibold">
                  Card {i + 1}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección 4: Estados y Pseudo-clases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Estados Hover y Focus</h2>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold mb-4">Botones con Hover</h3>
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Hover me (bg-blue-500 → hover:bg-blue-700)
                </button>
                <button className="w-full bg-green-500 hover:scale-105 text-white font-bold py-2 px-4 rounded transition-transform duration-200">
                  Scale on Hover (hover:scale-105)
                </button>
                <button className="w-full bg-purple-500 hover:shadow-lg text-white font-bold py-2 px-4 rounded transition-shadow duration-200">
                  Shadow on Hover (hover:shadow-lg)
                </button>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold mb-4">Inputs con Focus</h3>
                <input 
                  type="text" 
                  placeholder="Focus me"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Email with focus:ring-green-500"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )

  return currentView === 'basics' ? <BasicExamples /> : <ComponentShowcase />
}

export default App
