import Button from './Button.jsx'

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

export default HeroSection