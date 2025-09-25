import { 
  Button, 
  Card, 
  Badge, 
  Input, 
  Textarea, 
  Navbar, 
  HeroSection, 
  ProductCard, 
  UserProfileCard, 
  SystemStatusCard, 
  LoginForm, 
  ContactForm, 
  ResponsiveGrid 
} from './components'

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Professional Component Library */}
        <HeroSection 
          title="Component"
          subtitle="Library"
          description="Reusable UI components built with Tailwind CSS for agile development"
          primaryAction={{ text: "Primary Action", onClick: () => console.log('Primary clicked') }}
          secondaryAction={{ text: "Secondary Action", onClick: () => console.log('Secondary clicked') }}
        />

        {/* Button Component Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Button System</h2>
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

        {/* Card Components & Badge System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Cards & Badge System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Card Example */}
            <ProductCard 
              title="Premium Product"
              description="Product component with pricing, badges and integrated call-to-action."
              price="$99"
              badge={{ text: "Featured", color: "blue" }}
              ctaText="Buy Now"
              onCTAClick={() => console.log('Product clicked')}
            />

            {/* User Profile Card */}
            <UserProfileCard 
              name="Victor Mestrada"
              role="Full Stack Developer"
              badges={[
                { text: "React", color: "green" },
                { text: "Node.js", color: "blue" },
                { text: "Tailwind", color: "purple" }
              ]}
              ctaText="View Profile"
              onCTAClick={() => console.log('Profile clicked')}
            />

            {/* System Status Card */}
            <SystemStatusCard 
              title="System Status"
              status={{ text: "Online", color: "green" }}
              metrics={[
                { label: "CPU Usage", value: 75, color: "green" },
                { label: "Memory", value: 50, color: "blue", showPercentage: true }
              ]}
            />
          </div>
        </section>

        {/* Form Components Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Form Components</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Authentication Form */}
            <LoginForm 
              title="Login Form"
              onSubmit={(data) => console.log('Login data:', data)}
              showRememberMe={true}
              showForgotPassword={true}
            />

            {/* Contact Form */}
            <ContactForm 
              title="Contact Form"
              onSubmit={(data) => console.log('Contact data:', data)}
            />
          </div>
        </section>

        {/* Responsive Breakpoint System */}
        <section className="mb-16">
          <ResponsiveGrid />
        </section>
      </div>
    </div>
  )
}