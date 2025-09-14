import { TrendingUp, DollarSign, Users, Award, Target, Calendar, BarChart3 } from 'lucide-react'

const WhartonInvestmentCompetition = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-paly-blue to-paly-navy rounded-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Wharton Global High School Investment Competition</h1>
          <p className="text-xl mb-6 opacity-90">
            Manage a virtual portfolio and compete against students worldwide in this prestigious investment competition
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#signup"
              className="bg-paly-gold hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Register Your Team
            </a>
            <a
              href="https://globalyouth.wharton.upenn.edu/programs/wharton-global-high-school-investment-competition/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-paly-navy px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Official Website
            </a>
          </div>
        </div>
      </div>

      {/* About the Competition */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          About the Wharton Investment Competition
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              The Wharton Global High School Investment Competition is a free, 
              online investment simulation for high school students worldwide. 
              Teams compete to build the best-performing portfolio using real-time 
              market data and professional-grade tools.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <DollarSign className="h-6 w-6 text-paly-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Virtual Portfolio</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Start with $100,000 virtual cash to invest in stocks, bonds, and ETFs
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <BarChart3 className="h-6 w-6 text-paly-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Real Market Data</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access real-time market data and professional investment research tools
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-paly-gold mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Global Competition</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Compete against thousands of students from around the world
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-paly-blue/10 to-paly-navy/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Competition Timeline
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-paly-blue" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Fall Semester</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Registration and portfolio setup</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-paly-green" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">October - December</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Active trading period</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-paly-gold" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">January</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Final rankings announced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competition Features */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Competition Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 p-6 rounded-lg">
            <Target className="h-8 w-8 text-paly-blue mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Investment Strategy
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Develop and execute investment strategies using fundamental and technical analysis
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 p-6 rounded-lg">
            <Users className="h-8 w-8 text-paly-green mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Team Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Work in teams of 4-7 students to make investment decisions and manage risk
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900 dark:to-accent-800 p-6 rounded-lg">
            <BarChart3 className="h-8 w-8 text-paly-gold mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Portfolio Analysis
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Track performance, analyze returns, and optimize portfolio allocation
            </p>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Financial Literacy
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-blue rounded-full mr-3"></div>
                Understanding stock markets and investment vehicles
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-green rounded-full mr-3"></div>
                Risk management and portfolio diversification
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-gold rounded-full mr-3"></div>
                Financial statement analysis and company valuation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-blue rounded-full mr-3"></div>
                Economic indicators and market trends
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Skills
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-green rounded-full mr-3"></div>
                Team collaboration and communication
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-blue rounded-full mr-3"></div>
                Data analysis and decision-making
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-gold rounded-full mr-3"></div>
                Presentation and reporting skills
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-paly-green rounded-full mr-3"></div>
                Time management and project planning
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* How We Prepare */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          How We Prepare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg">
            <TrendingUp className="h-12 w-12 text-paly-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Investment Training
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn fundamental analysis, technical analysis, and portfolio management strategies.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 rounded-lg">
            <Users className="h-12 w-12 text-paly-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Team Formation
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Form balanced teams with diverse skills and interests for optimal performance.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900 dark:to-accent-800 rounded-lg">
            <Award className="h-12 w-12 text-paly-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Competition Strategy
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Develop winning strategies and practice with mock competitions and simulations.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-paly-blue to-paly-navy rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Invest?</h2>
        <p className="text-xl mb-6 opacity-90">
          Join our team and compete in the world's premier high school investment competition!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#signup"
            className="bg-white hover:bg-gray-100 text-paly-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Join Wharton Team
          </a>
          <a
            href="#contact"
            className="border-2 border-white hover:bg-white hover:text-paly-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default WhartonInvestmentCompetition
