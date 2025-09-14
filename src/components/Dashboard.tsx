import { TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'GDP Growth',
      value: '3.2%',
      change: '+0.5%',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Inflation Rate',
      value: '2.1%',
      change: '-0.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'text-red-600'
    },
    {
      title: 'Unemployment',
      value: '3.8%',
      change: '-0.1%',
      trend: 'down',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Interest Rate',
      value: '5.25%',
      change: '+0.25%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-purple-600'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Economic Dashboard
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Real-time economic indicators and market overview
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
          Recent Economic News
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-primary-500 pl-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Federal Reserve Maintains Interest Rates
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              The Fed kept rates steady at 5.25% citing stable inflation trends...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              2 hours ago
            </span>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-medium text-gray-900 dark:text-white">
              Strong Q4 GDP Growth Reported
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Economic growth exceeded expectations with 3.2% annualized rate...
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              4 hours ago
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
