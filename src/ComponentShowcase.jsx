import { Button, Card, Badge, Input, Navbar } from './components'

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Responsive */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Componentes <span className="text-blue-600">Tailwind</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Ejemplos de componentes que aparecen en entrevistas técnicas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Botón Principal</Button>
            <Button variant="secondary" size="lg">Botón Secundario</Button>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Botones</h2>
          <Card className="p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button disabled>Disabled</Button>
            </div>
          </Card>
        </section>

        {/* Cards and Badges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Cards y Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card 1 */}
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Producto Premium</h3>
                  <Badge color="blue">Nuevo</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Descripción del producto con características principales y beneficios.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$99</span>
                  <Button size="sm">Comprar</Button>
                </div>
              </div>
            </Card>

            {/* User Profile Card */}
            <Card>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JD</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Juan Desarrollador</h3>
                    <p className="text-gray-500">Frontend Developer</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge color="green">React</Badge>
                  <Badge color="blue">TypeScript</Badge>
                  <Badge color="purple">Tailwind</Badge>
                </div>
                <Button variant="secondary" size="sm" className="w-full">
                  Ver Perfil
                </Button>
              </div>
            </Card>

            {/* Status Card */}
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Estado del Sistema</h3>
                  <Badge color="green">Activo</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">CPU</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                      </div>
                      <span className="text-sm text-gray-500">75%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Memoria</span>
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                      </div>
                      <span className="text-sm text-gray-500">50%</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Forms Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Formularios</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Login Form */}
            <Card>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Iniciar Sesión</h3>
                <form className="space-y-6">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="tu@email.com"
                  />
                  <Input
                    label="Contraseña"
                    type="password"
                    placeholder="••••••••"
                  />
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <Button className="w-full" size="lg">
                    Iniciar Sesión
                  </Button>
                </form>
              </div>
            </Card>

            {/* Contact Form */}
            <Card>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contacto</h3>
                <form className="space-y-6">
                  <Input
                    label="Nombre completo"
                    placeholder="Juan Pérez"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                  </div>
                  <Button variant="success" className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </section>

        {/* Responsive Breakpoints Demo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Responsive Design</h2>
          <Card className="p-8">
            <p className="text-gray-600 mb-6">
              Cambia el tamaño de la ventana para ver los breakpoints:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <div className="bg-red-500 text-white p-4 rounded-lg text-center">
                <div className="block sm:hidden">XS (base)</div>
                <div className="hidden sm:block md:hidden">SM (≥640px)</div>
                <div className="hidden md:block lg:hidden">MD (≥768px)</div>
                <div className="hidden lg:block xl:hidden">LG (≥1024px)</div>
                <div className="hidden xl:block 2xl:hidden">XL (≥1280px)</div>
                <div className="hidden 2xl:block">2XL (≥1536px)</div>
              </div>
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="bg-gray-300 p-4 rounded-lg text-center text-gray-700">
                  Item {i + 2}
                </div>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}