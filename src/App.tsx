import { useState, useEffect, useRef } from 'react'
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
import ComingSoon from './components/ComingSoon'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'

function AppContent() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const mainTabs = [
    { id: 'dashboard', label: 'Home', icon: TrendingUp },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'competitions', label: 'Competitions', icon: Trophy, hasSubmenu: true },
    { id: 'signup', label: 'Join Us', icon: Users },
    { id: 'tools', label: 'Tools', icon: Calculator, hasSubmenu: true },
  ]

  const competitionSubmenu = [
    { id: 'wharton', label: 'Wharton Competition', icon: Trophy },
    { id: 'nec', label: 'NEC Challenge', icon: Target },
  ]

  const toolsSubmenu = [
    { id: 'analysis', label: 'Market Analysis', icon: BarChart3 },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'education', label: 'Education', icon: BookOpen },
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
        return <ComingSoon />
      case 'calculator':
        return <ComingSoon />
      case 'education':
        return <ComingSoon />
      case 'signup':
        return <SignUp />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-paly-blue/10 to-paly-green/10 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center">
              <img 
                src="/econ.png" 
                alt="Paly Economics Club Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 rounded-full object-cover"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'block'
                }}
              />
              <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-paly-primary hidden" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  <span className="hidden sm:inline">Paly Economics Club</span>
                  <span className="sm:hidden">Paly Econ</span>
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                  Excellence in Economics
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav ref={dropdownRef} className="hidden lg:flex space-x-1">
              {mainTabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <div key={tab.id} className="relative">
                    <button
                      onClick={() => {
                        if (tab.hasSubmenu) {
                          setDropdownOpen(dropdownOpen === tab.id ? null : tab.id)
                        } else {
                          setActiveTab(tab.id)
                          setDropdownOpen(null)
                        }
                      }}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab.id || dropdownOpen === tab.id
                          ? 'bg-paly-primary text-white'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {tab.label}
                      {tab.hasSubmenu && (
                        <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    {tab.hasSubmenu && dropdownOpen === tab.id && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                        {(tab.id === 'competitions' ? competitionSubmenu : toolsSubmenu).map((subItem) => {
                          const SubIcon = subItem.icon
                          return (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                setActiveTab(subItem.id)
                                setDropdownOpen(null)
                              }}
                              className={`w-full flex items-center px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                activeTab === subItem.id
                                  ? 'text-paly-primary bg-paly-primary/10'
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              <SubIcon className="h-4 w-4 mr-3" />
                              {subItem.label}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
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
                {mainTabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <div key={tab.id}>
                      <button
                        onClick={() => {
                          if (tab.hasSubmenu) {
                            setDropdownOpen(dropdownOpen === tab.id ? null : tab.id)
                          } else {
                            setActiveTab(tab.id)
                            setMobileMenuOpen(false)
                            setDropdownOpen(null)
                          }
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeTab === tab.id || dropdownOpen === tab.id
                            ? 'bg-paly-primary text-white'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center">
                          <Icon className="h-4 w-4 mr-2" />
                          {tab.label}
                        </div>
                        {tab.hasSubmenu && (
                          <svg className={`h-3 w-3 transition-transform ${dropdownOpen === tab.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </button>
                      
                      {/* Mobile Submenu */}
                      {tab.hasSubmenu && dropdownOpen === tab.id && (
                        <div className="ml-4 mt-2 space-y-1">
                          {(tab.id === 'competitions' ? competitionSubmenu : toolsSubmenu).map((subItem) => {
                            const SubIcon = subItem.icon
                            return (
                              <button
                                key={subItem.id}
                                onClick={() => {
                                  setActiveTab(subItem.id)
                                  setMobileMenuOpen(false)
                                  setDropdownOpen(null)
                                }}
                                className={`w-full flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                                  activeTab === subItem.id
                                    ? 'text-paly-primary bg-paly-primary/10'
                                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                              >
                                <SubIcon className="h-4 w-4 mr-3" />
                                {subItem.label}
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>
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
