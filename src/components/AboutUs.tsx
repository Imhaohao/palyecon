import { Users, Target, Trophy, BookOpen, Calendar, Instagram } from 'lucide-react'

const AboutUs = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-paly-navy to-paly-blue rounded-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Paly Economics Club</h1>
          <p className="text-xl mb-6 opacity-90">
            Cultivating economic interest and excellence among students through competitions, 
            learning, and community engagement.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://forms.gle/G4myTSEbCdzu1ZTf6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-paly-gold hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Our Club
            </a>
            <a
              href="https://www.instagram.com/palyecon/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-paly-navy px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow Us
            </a>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex items-start space-x-4">
          <Target className="h-8 w-8 text-paly-blue mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              The Economics Club aims to cultivate interest among students in economics and finance. 
              We provide opportunities for members to compete in prestigious competitions, learn 
              fundamental economic principles, and develop critical thinking skills that will serve 
              them throughout their academic and professional careers.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          What We Do
        </h2>
        
        {/* Featured Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/src/images/img4.png" 
              alt="Club activities" 
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxNTBMMTAwIDE1MEw1MCAxMDBINTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Club Activities
              </span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/src/images/img5.png" 
              alt="Study sessions" 
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxNTBMMTAwIDE1MEw1MCAxMDBINTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Study Sessions
              </span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/src/images/img6.png" 
              alt="Club events" 
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxNTBMMTAwIDE1MEw1MCAxMDBINTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Club Events
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg">
            <Trophy className="h-12 w-12 text-paly-blue mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Competition Training
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Prepare for the Wharton Global High School Investment Competition and 
              National Economics Challenge with expert guidance and practice sessions.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 rounded-lg">
            <BookOpen className="h-12 w-12 text-paly-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Educational Workshops
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn the fundamentals of finance, microeconomics, and macroeconomics 
              through interactive workshops and guest speaker sessions.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900 dark:to-accent-800 rounded-lg">
            <Users className="h-12 w-12 text-paly-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Community Building
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect with like-minded students, build lasting friendships, and 
              create a supportive learning environment for all members.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Leadership Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Advisor */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img 
                src="/mr_dodd.png" 
                alt="Corbin Dodd" 
                className="w-full h-full rounded-full object-cover border-4 border-paly-primary"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDAiIHI9IjE2IiBmaWxsPSIjOUVBMzVCIi8+CjxwYXRoIGQ9Ik0zMiA4MEM0MCA5NiA2NCAxMDQgNjQgMTA0Uzg4IDk2IDk2IDgwVjEwOEgzMlY4MFoiIGZpbGw9IiM5RUEzNUIiLz4KPC9zdmc+'
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Corbin Dodd</h3>
            <p className="text-paly-primary font-medium">Advisor</p>
          </div>

          {/* Co-president Jerry */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img 
                src="/jerry.png" 
                alt="Jerry Yan" 
                className="w-full h-full rounded-full object-cover border-4 border-paly-primary"
                style={{ objectPosition: 'center 20%' }}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDAiIHI9IjE2IiBmaWxsPSIjOUVBMzVCIi8+CjxwYXRoIGQ9Ik0zMiA4MEM0MCA5NiA2NCAxMDQgNjQgMTA0Uzg4IDk2IDk2IDgwVjEwOEgzMlY4MFoiIGZpbGw9IiM5RUEzNUIiLz4KPC9zdmc+'
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jerry Yan</h3>
            <p className="text-paly-primary font-medium">Co-president</p>
          </div>

          {/* Co-president Brian */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img 
                src="/brian.png" 
                alt="Brian Liu" 
                className="w-full h-full rounded-full object-cover border-4 border-paly-primary"
                style={{ objectPosition: 'center 20%' }}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDAiIHI9IjE2IiBmaWxsPSIjOUVBMzVCIi8+CjxwYXRoIGQ9Ik0zMiA4MEM0MCA5NiA2NCAxMDQgNjQgMTA0Uzg4IDk2IDk2IDgwVjEwOEgzMlY4MFoiIGZpbGw9IiM5RUEzNUIiLz4KPC9zdmc+'
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Brian Liu</h3>
            <p className="text-paly-primary font-medium">Co-president</p>
          </div>

          {/* Vice President Cindy */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img 
                src="/cindy.png" 
                alt="Cindy Liang" 
                className="w-full h-full rounded-full object-cover border-4 border-paly-primary"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDAiIHI9IjE2IiBmaWxsPSIjOUVBMzVCIi8+CjxwYXRoIGQ9Ik0zMiA4MEM0MCA5NiA2NCAxMDQgNjQgMTA0Uzg4IDk2IDk2IDgwVjEwOEgzMlY4MFoiIGZpbGw9IiM5RUEzNUIiLz4KPC9zdmc+'
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cindy Liang</h3>
            <p className="text-paly-primary font-medium">Vice President</p>
          </div>

          {/* Competition Manager Allison */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img 
                src="/allison.png" 
                alt="Allison Ma" 
                className="w-full h-full rounded-full object-cover border-4 border-paly-primary"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDAiIHI9IjE2IiBmaWxsPSIjOUVBMzVCIi8+CjxwYXRoIGQ9Ik0zMiA4MEM0MCA5NiA2NCAxMDQgNjQgMTA0Uzg4IDk2IDk2IDgwVjEwOEgzMlY4MFoiIGZpbGw9IiM5RUEzNUIiLz4KPC9zdmc+'
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Allison Ma</h3>
            <p className="text-paly-primary font-medium">Competition Manager</p>
          </div>

          {/* Secretary Kaiden */}
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <img 
                src="/kaiden.png" 
                alt="Kaiden Mu" 
                className="w-full h-full rounded-full object-cover border-4 border-paly-primary"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjY0IiBjeT0iNDAiIHI9IjE2IiBmaWxsPSIjOUVBMzVCIi8+CjxwYXRoIGQ9Ik0zMiA4MEM0MCA5NiA2NCAxMDQgNjQgMTA0Uzg4IDk2IDk2IDgwVjEwOEgzMlY4MFoiIGZpbGw9IiM5RUEzNUIiLz4KPC9zdmc+'
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Kaiden Mu</h3>
            <p className="text-paly-primary font-medium">Secretary</p>
          </div>
        </div>
      </div>

      {/* Competition Schedule */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex items-center mb-6">
          <Calendar className="h-8 w-8 text-paly-blue mr-3" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Competition Schedule
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-paly-blue pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Fall Semester
            </h3>
            <h4 className="text-lg font-medium text-paly-blue mb-2">
              Wharton Global High School Investment Competition
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Compete in this prestigious investment competition where teams manage 
              a virtual portfolio and compete against students worldwide.
            </p>
            <a
              href="#wharton-info"
              className="text-paly-blue hover:text-paly-navy font-medium"
            >
              Learn More →
            </a>
          </div>
          
          <div className="border-l-4 border-paly-green pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Spring Semester
            </h3>
            <h4 className="text-lg font-medium text-paly-green mb-2">
              National Economics Challenge
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Test your knowledge of economic concepts and compete for national 
              recognition in this comprehensive economics competition.
            </p>
            <a
              href="#nec-info"
              className="text-paly-green hover:text-green-700 font-medium"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-paly-green to-paly-blue rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
        <p className="text-xl mb-6 opacity-90">
          Don't miss out on this incredible opportunity to learn, compete, and grow with fellow economics enthusiasts!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://forms.gle/G4myTSEbCdzu1ZTf6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-gray-100 text-paly-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Sign Up Now
          </a>
          <a
            href="mailto:palyeconomics@gmail.com"
            className="border-2 border-white hover:bg-white hover:text-paly-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
