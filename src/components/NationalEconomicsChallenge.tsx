import { Trophy, BookOpen, Users, Award, Target, Calendar } from 'lucide-react'

const NationalEconomicsChallenge = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-paly-green to-paly-blue rounded-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Trophy className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">National Economics Challenge</h1>
          <p className="text-xl mb-6 opacity-90">
            Compete in the premier economics competition for high school students nationwide
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#signup"
              className="bg-paly-gold hover:bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Register Your Team
            </a>
            <a
              href="https://www.councilforeconed.org/programs/national-economics-challenge/"
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
          About the National Economics Challenge
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              The National Economics Challenge (NEC) is the country's most prestigious 
              high school economics competition. Organized by the Council for Economic 
              Education, it tests students' knowledge of economic concepts and their 
              ability to apply economic reasoning to real-world situations.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-paly-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Competition Format</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Multiple choice questions, critical thinking essays, and team presentations
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-paly-blue mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Team Structure</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Teams of 3-4 students compete in two divisions: David Ricardo and Adam Smith
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-paly-gold mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    National champions receive scholarships and recognition from top universities
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-paly-green/10 to-paly-blue/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Competition Timeline
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-paly-green" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Spring Semester</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Registration opens</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-paly-blue" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">March</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">State competitions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-paly-gold" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">April</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">National finals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competition Divisions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Competition Divisions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-paly-green pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              David Ricardo Division
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For students taking their first economics course. Focuses on fundamental 
              economic concepts and basic economic reasoning.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Basic supply and demand</li>
              <li>• Market structures</li>
              <li>• Economic indicators</li>
              <li>• Personal finance</li>
            </ul>
          </div>
          
          <div className="border-l-4 border-paly-blue pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Adam Smith Division
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              For students with advanced economics knowledge. Covers complex economic 
              theories and advanced analytical skills.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Advanced microeconomics</li>
              <li>• Macroeconomics</li>
              <li>• International economics</li>
              <li>• Economic policy analysis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Preparation Resources */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          How We Prepare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg">
            <BookOpen className="h-12 w-12 text-paly-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Study Sessions
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Weekly study sessions covering all competition topics with practice questions and mock exams.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 rounded-lg">
            <Users className="h-12 w-12 text-paly-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Team Building
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Form strong teams and practice collaborative problem-solving and presentation skills.
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900 dark:to-accent-800 rounded-lg">
            <Trophy className="h-12 w-12 text-paly-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Competition Prep
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Mock competitions and strategy sessions to prepare for the real competition experience.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-paly-green to-paly-blue rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
        <p className="text-xl mb-6 opacity-90">
          Join our team and compete for national recognition in economics!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#signup"
            className="bg-white hover:bg-gray-100 text-paly-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Join NEC Team
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

export default NationalEconomicsChallenge
