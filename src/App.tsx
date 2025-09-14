import { useState } from 'react'
import { TrendingUp, BarChart3, Calculator, BookOpen, Users, Calendar, Instagram, Trophy, Target } from 'lucide-react'
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

function App() {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
    { id: 'wharton', label: 'Wharton Competition', icon: Trophy },
    { id: 'nec', label: 'NEC Challenge', icon: Target },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'instagram', label: 'Instagram', icon: Instagram },
    { id: 'analysis', label: 'Market Analysis', icon: BarChart3 },
    { id: 'calculator', label: 'Calculator', icon: Calculator },
    { id: 'education', label: 'Education', icon: BookOpen },
    { id: 'signup', label: 'Join Us', icon: Users },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutUs />
      case 'dashboard':
        return <Dashboard />
      case 'wharton':
        return <WhartonInvestmentCompetition />
      case 'nec':
        return <NationalEconomicsChallenge />
      case 'calendar':
        return <CalendarComponent />
      case 'instagram':
        return <InstagramEmbed />
      case 'analysis':
        return <MarketAnalysis />
      case 'calculator':
        return <EconomicCalculator />
      case 'education':
        return <EducationalContent />
      case 'signup':
        return <SignUp />
      default:
        return <AboutUs />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-paly-blue/10 to-paly-green/10 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-paly-blue" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
                Paly Economics Club
              </h1>
            </div>
            <nav className="hidden md:flex space-x-2 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-paly-blue text-white'
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue"
              >
                {tabs.map((tab) => (
                  <option key={tab.id} value={tab.id}>
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
    </div>
  )
}

export default App
