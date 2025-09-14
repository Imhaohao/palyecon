import { useState } from 'react'
import { BookOpen, Play, CheckCircle, ArrowRight } from 'lucide-react'

const EducationalContent = () => {
  const [selectedTopic, setSelectedTopic] = useState('basics')

  const topics = [
    {
      id: 'basics',
      title: 'Economic Basics',
      description: 'Learn fundamental economic concepts',
      lessons: [
        { title: 'Supply and Demand', completed: true },
        { title: 'Market Equilibrium', completed: true },
        { title: 'Price Elasticity', completed: false },
        { title: 'Consumer Behavior', completed: false },
      ]
    },
    {
      id: 'macroeconomics',
      title: 'Macroeconomics',
      description: 'Study economy-wide phenomena',
      lessons: [
        { title: 'GDP and Economic Growth', completed: false },
        { title: 'Inflation and Deflation', completed: false },
        { title: 'Monetary Policy', completed: false },
        { title: 'Fiscal Policy', completed: false },
      ]
    },
    {
      id: 'microeconomics',
      title: 'Microeconomics',
      description: 'Individual and firm decision making',
      lessons: [
        { title: 'Production Theory', completed: false },
        { title: 'Cost Analysis', completed: false },
        { title: 'Market Structures', completed: false },
        { title: 'Game Theory', completed: false },
      ]
    }
  ]

  const selectedTopicData = topics.find(topic => topic.id === selectedTopic)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Educational Content
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Learn economics through interactive lessons and resources
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Topics Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Topics
            </h3>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full text-left p-3 rounded-md transition-colors ${
                    selectedTopic === topic.id
                      ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-3" />
                    <div>
                      <p className="font-medium">{topic.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-6">
              <BookOpen className="h-6 w-6 text-primary-600 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedTopicData?.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedTopicData?.description}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {selectedTopicData?.lessons.map((lesson, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center">
                    {lesson.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ) : (
                      <div className="h-5 w-5 border-2 border-gray-300 dark:border-gray-600 rounded-full mr-3" />
                    )}
                    <span className="font-medium text-gray-900 dark:text-white">
                      {lesson.title}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button className="flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
                      <Play className="h-4 w-4 mr-1" />
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span>Progress</span>
                <span>
                  {selectedTopicData?.lessons.filter(l => l.completed).length} / {selectedTopicData?.lessons.length} completed
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((selectedTopicData?.lessons.filter(l => l.completed).length || 0) / (selectedTopicData?.lessons.length || 1)) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Quick Resources */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Resources
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                  Economic Glossary
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Definitions of key economic terms and concepts
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400">
                  <span className="text-sm">View Glossary</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                  Practice Quizzes
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Test your knowledge with interactive quizzes
                </p>
                <div className="flex items-center text-primary-600 dark:text-primary-400">
                  <span className="text-sm">Take Quiz</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationalContent
