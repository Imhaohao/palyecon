import { Mail, Instagram, Calendar, MapPin, Trophy } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/econ.png" 
                alt="Paly Economics Club Logo" 
                className="h-8 w-8 mr-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (nextElement) {
                    nextElement.style.display = 'block';
                  }
                }}
              />
              <Trophy className="h-8 w-8 text-paly-primary mr-2" style={{ display: 'none' }} />
              <h3 className="text-xl font-bold">Paly Economics Club</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Cultivating economic interest and excellence among students through 
              competitions, learning, and community engagement.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/palyecon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-paly-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:palyeconomics@gmail.com"
                className="text-gray-400 hover:text-paly-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-paly-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#wharton" className="text-gray-400 hover:text-paly-primary transition-colors">
                  Wharton Competition
                </a>
              </li>
              <li>
                <a href="#nec" className="text-gray-400 hover:text-paly-primary transition-colors">
                  NEC Challenge
                </a>
              </li>
              <li>
                <a href="#signup" className="text-gray-400 hover:text-paly-primary transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                palyeconomics@gmail.com
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                Room 809, Palo Alto High School
              </div>
              <div className="flex items-center text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                Wednesday Lunch
              </div>
            </div>
          </div>

          {/* Competitions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Competitions</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-800 p-3 rounded-lg">
                <h5 className="font-medium text-paly-primary">Wharton Investment</h5>
                <p className="text-gray-400 text-xs">Fall Semester</p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg">
                <h5 className="font-medium text-paly-primary">NEC Challenge</h5>
                <p className="text-gray-400 text-xs">Spring Semester</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center">
          <p className="text-gray-400 text-sm">
            © 2024 Paly Economics Club. All rights reserved.
          </p>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
