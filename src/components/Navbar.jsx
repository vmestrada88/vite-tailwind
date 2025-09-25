export const Navbar = ({ 
  brand = "TailwindComponents",
  brandIcon = "TC",
  menuItems = [
    { label: "Components", href: "#" },
    { label: "Utilities", href: "#" },
    { label: "Resources", href: "#" }
  ]
}) => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{brandIcon}</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">{brand}</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
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

export default Navbar