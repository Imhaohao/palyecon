import { Construction, Clock, Wrench } from 'lucide-react'

const ComingSoon = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-paly-blue/10 to-paly-green/10 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto text-center px-6">
        {/* Icon */}
        <div className="mb-8">
          <div className="relative">
            <Construction className="h-24 w-24 text-paly-primary mx-auto mb-4" />
            <div className="absolute -top-2 -right-2">
              <Clock className="h-8 w-8 text-paly-gold animate-pulse" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            We're working hard to bring you something amazing. This feature is currently under construction.
          </p>

          <div className="bg-gradient-to-r from-paly-navy to-paly-primary rounded-lg p-6 text-white mb-8">
            <h2 className="text-xl font-semibold mb-3">What's Coming?</h2>
            <p className="text-paly-lightBlue">
              Our team is developing exciting new features to enhance your economics learning experience. 
              Stay tuned for updates!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <Wrench className="h-8 w-8 text-paly-primary mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Development</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building with care and attention to detail
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <Clock className="h-8 w-8 text-paly-gold mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Testing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ensuring quality and reliability
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <Construction className="h-8 w-8 text-paly-green mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Launch</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Preparing for an amazing release
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              In the meantime, explore our other features:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#dashboard"
                className="bg-paly-primary hover:bg-paly-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Back to Dashboard
              </a>
              
              <a
                href="https://forms.gle/zmsbaXqVwRTAJx3E8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paly-gold hover:bg-paly-gold/90 text-paly-navy px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Join Our Club
              </a>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">75%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-paly-primary to-paly-green h-2 rounded-full w-3/4 transition-all duration-1000 ease-out"></div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Follow us on <a href="https://www.instagram.com/palyecon" target="_blank" rel="noopener noreferrer" className="text-paly-primary hover:underline">Instagram</a> for updates
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
