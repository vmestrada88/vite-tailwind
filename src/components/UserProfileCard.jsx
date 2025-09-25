import Card from './Card.jsx'
import Badge from './Badge.jsx'
import Button from './Button.jsx'

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

export default UserProfileCard