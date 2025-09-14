import { useState } from 'react'
import { UserPlus, Mail, Users, Calendar, CheckCircle, Trophy } from 'lucide-react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    interests: [] as string[],
    experience: '',
    goals: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-paly-blue/10 to-paly-green/10 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="h-16 w-16 text-paly-green mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You for Signing Up!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We've received your application and will contact you soon with next steps.
          </p>
          <a
            href="/"
            className="bg-paly-blue hover:bg-paly-navy text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Return to Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-paly-navy to-paly-blue rounded-lg p-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <UserPlus className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Join Paly Economics Club</h1>
          <p className="text-xl mb-6 opacity-90">
            Become part of our community of economics enthusiasts and compete in prestigious competitions
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Why Join Our Club?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg">
            <Trophy className="h-12 w-12 text-paly-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Competition Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Compete in Wharton Investment Competition and National Economics Challenge
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 rounded-lg">
            <Users className="h-12 w-12 text-paly-green mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Expert Guidance
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn from experienced mentors and guest speakers from top universities
            </p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900 dark:to-accent-800 rounded-lg">
            <Calendar className="h-12 w-12 text-paly-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Regular Activities
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Weekly meetings, workshops, and networking events throughout the year
            </p>
          </div>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Membership Application
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Grade Level *
            </label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select Grade</option>
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade</option>
            </select>
          </div>

          {/* Interests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Areas of Interest (Select all that apply)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Investment Analysis',
                'Macroeconomics',
                'Microeconomics',
                'Financial Markets',
                'Economic Policy',
                'International Trade',
                'Behavioral Economics',
                'Data Analysis',
                'Competition Prep'
              ].map((interest) => (
                <label key={interest} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                    className="rounded border-gray-300 text-paly-blue focus:ring-paly-blue"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {interest}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Previous Economics/Finance Experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue dark:bg-gray-700 dark:text-white"
              placeholder="Describe any previous experience with economics, finance, or related subjects..."
            />
          </div>

          {/* Goals */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              What do you hope to achieve by joining the club?
            </label>
            <textarea
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-paly-blue focus:border-paly-blue dark:bg-gray-700 dark:text-white"
              placeholder="Share your goals and what you'd like to learn..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-paly-blue hover:bg-paly-navy text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>

      {/* Contact Information */}
      <div className="bg-gradient-to-r from-paly-green to-paly-blue rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Questions?</h2>
        <p className="text-lg mb-6 opacity-90">
          Contact us for more information about the club and membership
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:palyeconomics@gmail.com"
            className="flex items-center bg-white hover:bg-gray-100 text-paly-navy px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Email Us
          </a>
          <a
            href="https://www.instagram.com/palyecon/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border-2 border-white hover:bg-white hover:text-paly-navy text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Users className="h-5 w-5 mr-2" />
            Follow Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default SignUp
