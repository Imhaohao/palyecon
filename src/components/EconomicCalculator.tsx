import { useState } from 'react'
import { Calculator, DollarSign, Percent, TrendingUp } from 'lucide-react'

const EconomicCalculator = () => {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [time, setTime] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const calculateCompoundInterest = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate) / 100
    const t = parseFloat(time)
    
    if (p && r && t) {
      const amount = p * Math.pow(1 + r, t)
      setResult(amount)
    }
  }

  const calculateSimpleInterest = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate) / 100
    const t = parseFloat(time)
    
    if (p && r && t) {
      const amount = p * (1 + r * t)
      setResult(amount)
    }
  }

  const calculatePresentValue = () => {
    const fv = parseFloat(principal)
    const r = parseFloat(rate) / 100
    const t = parseFloat(time)
    
    if (fv && r && t) {
      const pv = fv / Math.pow(1 + r, t)
      setResult(pv)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Economic Calculator
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate compound interest, present value, and other economic metrics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calculator Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Financial Calculator
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Principal Amount ($)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="10000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Interest Rate (%)
              </label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="5"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Period (years)
              </label>
              <div className="relative">
                <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="number"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="pl-10 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:text-white"
                  placeholder="10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={calculateCompoundInterest}
                className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Calculate Compound Interest
              </button>
              <button
                onClick={calculateSimpleInterest}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
              >
                Calculate Simple Interest
              </button>
              <button
                onClick={calculatePresentValue}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors"
              >
                Calculate Present Value
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Results
          </h3>
          
          {result !== null ? (
            <div className="text-center">
              <div className="bg-primary-50 dark:bg-primary-900 rounded-lg p-6">
                <Calculator className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <p className="text-3xl font-bold text-primary-700 dark:text-primary-300">
                  ${result.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Final Amount
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Calculator className="h-12 w-12 mx-auto mb-4" />
              <p>Enter values and select a calculation method</p>
            </div>
          )}
        </div>
      </div>

      {/* Economic Formulas */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Economic Formulas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Compound Interest
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A = P(1 + r)^t
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Where A = final amount, P = principal, r = rate, t = time
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Simple Interest
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              A = P(1 + rt)
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Where A = final amount, P = principal, r = rate, t = time
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              Present Value
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              PV = FV / (1 + r)^t
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Where PV = present value, FV = future value, r = rate, t = time
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EconomicCalculator
