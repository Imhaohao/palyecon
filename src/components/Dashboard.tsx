import { TrendingUp, TrendingDown, DollarSign, Users, UserPlus, Calendar, Trophy } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Members',
      value: '45',
      change: '+12',
      trend: 'up',
      icon: Users,
      color: 'text-paly-blue'
    },
    {
      title: 'Competitions',
      value: '2',
      change: 'This Year',
      trend: 'up',
      icon: Trophy,
      color: 'text-paly-green'
    },
    {
      title: 'Weekly Meetings',
      value: 'Tuesdays',
      change: '3:30 PM',
      trend: 'up',
      icon: Calendar,
      color: 'text-paly-gold'
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
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Club Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome to Paly Economics Club - Your gateway to economic excellence
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
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
              <div className="mt-4 flex items-center">
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  from last month
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent News */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Club Updates & Announcements
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-paly-blue pl-4">
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

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-paly-navy to-paly-blue rounded-lg p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
        <p className="text-lg mb-6 opacity-90">
          Become part of Paly Economics Club and compete in prestigious competitions while learning from experts!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#signup"
            className="bg-paly-gold hover:bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Join Now
          </a>
          <a
            href="#about"
            className="border-2 border-white hover:bg-white hover:text-paly-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
