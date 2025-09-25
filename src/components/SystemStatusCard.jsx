import Card from './Card.jsx'
import Badge from './Badge.jsx'
import ProgressBar from './ProgressBar.jsx'

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

export default SystemStatusCard