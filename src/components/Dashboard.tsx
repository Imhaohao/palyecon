import { Users, UserPlus, Calendar, Plus, X, Instagram } from 'lucide-react'
import { useState } from 'react'

const Dashboard = () => {
  const [showCalendarModal, setShowCalendarModal] = useState(false)

  const stats = [
    {
      title: 'Active Members',
      value: '50+',
      change: 'Join the economists in Paly Econ',
      trend: 'up',
      icon: Users,
      color: 'text-paly-blue'
    },
    {
      title: 'Weekly Meetings',
      value: 'Wednesdays',
      change: '12:20 PM Lunch at Room 809',
      trend: 'up',
      icon: Calendar,
      color: 'text-paly-gold'
    },
    {
      title: 'Discord Community',
      value: 'Join Us',
      change: 'Join a community of like-minded peers',
      trend: 'up',
      icon: UserPlus,
      color: 'text-paly-green'
    },
    {
      title: 'Join Today',
      value: 'Open',
      change: 'Enrollment',
      trend: 'up',
      icon: UserPlus,
      color: 'text-paly-navy'
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full">
        <div className="relative min-h-screen bg-gradient-to-r from-paly-navy to-paly-primary">
          <img 
            src="/img3.png" 
            alt="Paly Economics Club Hero" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            style={{ objectPosition: 'center 20%' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Paly Economics Club
              </h1>
              <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
                Cultivating economic interest and excellence among students through competitions, learning, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://forms.gle/zmsbaXqVwRTAJx3E8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-paly-gold hover:bg-paly-gold/90 text-paly-navy font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6 px-4 sm:px-6 lg:px-8 py-4 sm:py-8">

      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          About the Club
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to Paly Economics Club - Your gateway to economic excellence
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const isDiscord = stat.title === 'Discord Community'
          
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="mt-4">
                {isDiscord ? (
                  <a
                    href="https://discord.gg/5qFzjvZZsE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-paly-green hover:bg-paly-green/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    {stat.change}
                  </a>
                ) : (
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      from last month
                    </span>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Photo Gallery */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Club Photos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/src/images/img1.png" 
              alt="Club meeting" 
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxNTBMMTAwIDE1MEw1MCAxMDBINTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Club Meeting
              </span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/src/images/img2.png" 
              alt="Competition preparation" 
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxNTBMMTAwIDE1MEw1MCAxMDBINTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Competition Prep
              </span>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="/src/images/img3.png" 
              alt="Team building" 
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgNTBMMTUwIDEwMEgxNTBMMTAwIDE1MEw1MCAxMDBINTAiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
                Team Building
              </span>
            </div>
          </div>
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
      </div>

      {/* Recent News */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Club Updates & Announcements
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-paly-primary pl-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Wharton Competition Registration Open
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Teams are forming now for the fall semester Wharton Global High School Investment Competition...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              2 days ago
            </span>
          </div>
          <div className="border-l-4 border-paly-green pl-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              New Member Orientation This Tuesday
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Join us for our weekly meeting at 3:30 PM in Room 205 for new member orientation...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              1 week ago
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Calendar className="h-8 w-8 text-paly-primary mr-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Upcoming Events
            </h3>
          </div>
          <button
            onClick={() => setShowCalendarModal(true)}
            className="flex items-center bg-paly-primary hover:bg-paly-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Calendar
          </button>
        </div>
        <div className="mb-6">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=palyeconomics%40gmail.com&ctz=America%2FLos_Angeles" 
            style={{ border: '0' }} 
            width="100%" 
            height="400" 
            frameBorder="0" 
            scrolling="no"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center mb-6">
          <Instagram className="h-8 w-8 text-paly-primary mr-3" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Follow Our Journey
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 max-w-md w-full">
            <div className="text-center">
              <div className="mb-4">
                <Instagram className="h-16 w-16 text-paly-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  @palyecon
                </h4>
                <p className="text-gray-600 mb-4">
                  Follow us on Instagram for the latest updates, photos, and behind-the-scenes content!
                </p>
              </div>
              
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/palyecon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Follow on Instagram
                </a>
                
                <div className="text-sm text-gray-500">
                  <p>📸 Latest club photos</p>
                  <p>🏆 Competition highlights</p>
                  <p>📚 Study tips and resources</p>
                  <p>🎉 Event announcements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-paly-navy to-paly-primary rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
        <p className="text-lg mb-6 opacity-90">
          Become part of Paly Economics Club and compete in prestigious competitions while learning from experts!
        </p>
        <div className="flex justify-center">
          <a
            href="https://forms.gle/zmsbaXqVwRTAJx3E8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paly-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
          >
            Join Now
          </a>
        </div>
      </div>

      {/* Calendar Add Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Add Paly Economics Club Calendar
              </h3>
              <button
                onClick={() => setShowCalendarModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-paly-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Follow Our Events
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Add the Paly Economics Club calendar to your personal calendar to stay updated on all our events, meetings, and competitions.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Calendar URL:
                </h5>
                <div className="flex items-center space-x-2">
                  <code className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-3 py-2 text-sm text-gray-800 dark:text-gray-200 break-all">
                    https://calendar.google.com/calendar/u/0?cid=cGFseWVjb25vbWljc0BnbWFpbC5jb20
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText('https://calendar.google.com/calendar/u/0?cid=cGFseWVjb25vbWljc0BnbWFpbC5jb20');
                      // You could add a toast notification here
                    }}
                    className="bg-paly-primary hover:bg-paly-primary/90 text-white px-3 py-2 rounded text-sm transition-colors duration-200"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h5 className="font-semibold text-gray-900 dark:text-white">
                  How to Add to Your Calendar:
                </h5>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-paly-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Google Calendar:</strong> Go to Google Calendar → Settings → Add calendar → From URL → Paste the URL above
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-paly-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Outlook:</strong> Go to Calendar → Add calendar → Subscribe from web → Paste the URL above
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-paly-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Apple Calendar:</strong> File → New Calendar Subscription → Paste the URL above
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-paly-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      4
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Other Calendars:</strong> Look for "Subscribe to calendar" or "Add calendar from URL" option
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">i</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>Note:</strong> This calendar will automatically update with new events. You'll receive notifications for upcoming meetings and competitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowCalendarModal(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Dashboard
