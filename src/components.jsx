// Common components for professional development work

export const Button = ({ children, variant = 'primary', size = 'md', onClick, disabled }) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {children}
    </div>
  )
}

export const Badge = ({ children, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    purple: 'bg-purple-100 text-purple-800'
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[color]}`}>
      {children}
    </span>
  )
}

export const Input = ({ label, placeholder, type = 'text', error, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

// Textarea Component
export const Textarea = ({ label, placeholder, rows = 4, error, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
        }`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

// Progress Bar Component
export const ProgressBar = ({ 
  value, 
  max = 100, 
  color = 'blue', 
  size = 'md',
  showLabel = false,
  className = '' 
}) => {
  const percentage = (value / max) * 100
  
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500'
  }
  
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  }
  
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`flex-1 bg-gray-200 rounded-full ${sizes[size]} mr-2`}>
        <div 
          className={`${colors[color]} ${sizes[size]} rounded-full transition-all duration-300`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm text-gray-500 ml-2">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  )
}

// Product Card Component
export const ProductCard = ({ 
  title, 
  description, 
  price, 
  badge, 
  ctaText = "Buy Now", 
  onCTAClick,
  className = ""
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {badge && <Badge color={badge.color}>{badge.text}</Badge>}
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">{price}</span>
          <Button size="sm" onClick={onCTAClick}>
            {ctaText}
          </Button>
        </div>
      </div>
    </Card>
  )
}

// User Profile Card Component
export const UserProfileCard = ({ 
  name, 
  role, 
  avatar, 
  badges = [], 
  ctaText = "View Profile", 
  onCTAClick,
  className = ""
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {avatar ? (
            <img src={avatar} alt={name} className="h-12 w-12 rounded-full" />
          ) : (
            <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U'}
              </span>
            </div>
          )}
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-gray-500">{role}</p>
          </div>
        </div>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {badges.map((badge, index) => (
              <Badge key={index} color={badge.color}>
                {badge.text}
              </Badge>
            ))}
          </div>
        )}
        <Button variant="secondary" size="sm" className="w-full" onClick={onCTAClick}>
          {ctaText}
        </Button>
      </div>
    </Card>
  )
}

// System Status Card Component
export const SystemStatusCard = ({ 
  title = "System Status", 
  status = { text: "Online", color: "green" },
  metrics = [],
  className = ""
}) => {
  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <Badge color={status.color}>{status.text}</Badge>
        </div>
        <div className="space-y-3">
          {metrics.map((metric, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-gray-600">{metric.label}</span>
              <div className="flex items-center">
                <ProgressBar 
                  value={metric.value} 
                  max={metric.max || 100}
                  color={metric.color}
                  size="md"
                  className="w-24"
                />
                {metric.showPercentage && (
                  <span className="text-sm text-gray-500 ml-2">
                    {Math.round((metric.value / (metric.max || 100)) * 100)}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

// Login Form Component
export const LoginForm = ({ 
  title = "Login Form",
  onSubmit,
  showRememberMe = true,
  showForgotPassword = true,
  className = ""
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.target)
      onSubmit({
        email: formData.get('email'),
        password: formData.get('password'),
        remember: formData.get('remember') === 'on'
      })
    }
  }

  return (
    <Card className={className}>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">{title}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="email"
            label="Email Address"
            type="email"
            placeholder="user@example.com"
            required
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            required
          />
          {(showRememberMe || showForgotPassword) && (
            <div className="flex items-center justify-between">
              {showRememberMe && (
                <label className="flex items-center">
                  <input 
                    name="remember"
                    type="checkbox" 
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
              )}
              {showForgotPassword && (
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              )}
            </div>
          )}
          <Button type="submit" className="w-full" size="lg">
            Sign In
          </Button>
        </form>
      </div>
    </Card>
  )
}

// Contact Form Component
export const ContactForm = ({ 
  title = "Contact Form",
  onSubmit,
  className = ""
}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.target)
      onSubmit({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      })
    }
  }

  return (
    <Card className={className}>
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">{title}</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="name"
            label="Full Name"
            placeholder="Victor Mestrada"
            required
          />
          <Input
            name="email"
            label="Email"
            type="email"
            placeholder="victor@example.com"
            required
          />
          <Textarea
            name="message"
            label="Message"
            placeholder="Write your message here..."
            rows={4}
            required
          />
          <Button type="submit" variant="success" className="w-full" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </Card>
  )
}

// Responsive Grid Component
export const ResponsiveGrid = ({ 
  title = "Responsive System",
  description = "Resize the browser window to see the responsive breakpoints in action:",
  itemCount = 6,
  className = ""
}) => {
  return (
    <Card className={`p-8 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 text-gray-900">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div className="bg-red-500 text-white p-4 rounded-lg text-center">
          <div className="block sm:hidden">XS (base)</div>
          <div className="hidden sm:block md:hidden">SM (≥640px)</div>
          <div className="hidden md:block lg:hidden">MD (≥768px)</div>
          <div className="hidden lg:block xl:hidden">LG (≥1024px)</div>
          <div className="hidden xl:block 2xl:hidden">XL (≥1280px)</div>
          <div className="hidden 2xl:block">2XL (≥1536px)</div>
        </div>
        {Array.from({ length: itemCount - 1 }, (_, i) => (
          <div key={i} className="bg-gray-300 p-4 rounded-lg text-center text-gray-700">
            Grid Item {i + 2}
          </div>
        ))}
      </div>
    </Card>
  )
}

// Hero Section Component
export const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  primaryAction, 
  secondaryAction, 
  className = "" 
}) => {
  return (
    <section className={`text-center mb-16 ${className}`}>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        {title} {subtitle && <span className="text-blue-600">{subtitle}</span>}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {primaryAction && (
          <Button size="lg" onClick={primaryAction.onClick}>
            {primaryAction.text}
          </Button>
        )}
        {secondaryAction && (
          <Button variant="secondary" size="lg" onClick={secondaryAction.onClick}>
            {secondaryAction.text}
          </Button>
        )}
      </div>
    </section>
  )
}

// Professional Navbar Component
export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">TailwindComponents</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Components
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Utilities
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Resources
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}