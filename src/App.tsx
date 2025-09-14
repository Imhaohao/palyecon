import { useState } from 'react'
import { TrendingUp, BarChart3, Calculator, BookOpen, Users, Calendar, Instagram, Trophy, Target, Sun, Moon, Menu, X } from 'lucide-react'
import Dashboard from './components/Dashboard'
import MarketAnalysis from './components/MarketAnalysis'
import EconomicCalculator from './components/EconomicCalculator'
import EducationalContent from './components/EducationalContent'
import AboutUs from './components/AboutUs'
import InstagramEmbed from './components/InstagramEmbed'
import CalendarComponent from './components/Calendar'
import NationalEconomicsChallenge from './components/NationalEconomicsChallenge'
import WhartonInvestmentCompetition from './components/WhartonInvestmentCompetition'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const tabs = [
    { id: 'dashboard', label: 'Home', icon: TrendingUp },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'wharton', label: 'Wharton Competition', icon: Trophy },
    { id: 'nec', label: 'NEC Challenge', icon: Target },
    { id: 'analysis', label: 'Market Analysis', icon: BarChart3 },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'signup', label: 'Join Us', icon: Users },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'about':
        return <AboutUs />
      case 'wharton':
        return <WhartonInvestmentCompetition />
      case 'nec':
        return <NationalEconomicsChallenge />
      case 'analysis':
        return <MarketAnalysis />
      case 'calculator':
        return <EconomicCalculator />
      case 'education':
        return <EducationalContent />
      case 'signup':
        return <SignUp />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-paly-blue/10 to-paly-green/10 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center">
              <img 
                src="/src/images/econ.png" 
                alt="Paly Economics Club Logo" 
                className="h-10 w-10 mr-3 rounded-full object-cover"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'block'
                }}
              />
              <TrendingUp className="h-8 w-8 text-paly-primary hidden" />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Paly Economics Club
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Excellence in Economics
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-paly-primary text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>

            {/* Theme Toggle and Mobile Menu */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4">
              <nav className="flex flex-col space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id)
                        setMobileMenuOpen(false)
                      }}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-paly-primary text-white'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
