import Card from './Card.jsx'
import Badge from './Badge.jsx'
import Button from './Button.jsx'

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

export default ProductCard