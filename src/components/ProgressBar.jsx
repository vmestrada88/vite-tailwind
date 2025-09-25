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

export default ProgressBar