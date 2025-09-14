import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react'

const Calendar = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <CalendarIcon className="h-8 w-8 text-paly-blue mr-3" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Club Calendar
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Upcoming Events
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Stay updated with our meeting schedule, competition dates, and special events.
          </p>
        </div>

        {/* Google Calendar Embed */}
        <div className="mb-6">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=palyeconomics%40gmail.com&ctz=America%2FLos_Angeles" 
            style={{ border: '0' }} 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Quick Event Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Clock className="h-5 w-5 text-paly-blue mr-2" />
              <span className="text-sm font-medium text-paly-blue">Weekly Meetings</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Every Tuesday at 3:30 PM in Room 205
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <CalendarIcon className="h-5 w-5 text-paly-green mr-2" />
              <span className="text-sm font-medium text-paly-green">Wharton Competition</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Fall Semester - Registration Now Open
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900 dark:to-accent-800 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 text-paly-gold mr-2" />
              <span className="text-sm font-medium text-paly-gold">Special Events</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Guest speakers and workshops throughout the year
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 bg-gradient-to-r from-paly-navy to-paly-blue rounded-lg p-6 text-white text-center">
          <h4 className="text-lg font-semibold mb-2">Want to Stay Updated?</h4>
          <p className="mb-4 opacity-90">
            Add our calendar to your Google Calendar or contact us for meeting details.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://calendar.google.com/calendar/u/0?cid=cGFseWVjb25vbWljc0BnbWFpbC5jb20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-paly-navy px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Add to Calendar
            </a>
            <a
              href="#contact"
              className="border-2 border-white hover:bg-white hover:text-paly-navy text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
