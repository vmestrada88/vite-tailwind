import Card from './Card.jsx'
import Button from './Button.jsx'
import { Input } from './FormComponents.jsx'

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

export default LoginForm