
export default function RentVsOwnSection() {
  const comparisons = [
    {
      feature: 'Upfront Cost',
      rent: '$0',
      own: '$5,000 - $15,000',
      rentBetter: true
    },
    {
      feature: 'Monthly Cost',
      rent: '$299',
      own: '$200+ hosting + maintenance',
      rentBetter: false
    },
    {
      feature: 'Design Updates',
      rent: 'Included',
      own: '$2,000 - $5,000 each',
      rentBetter: true
    },
    {
      feature: 'Security & Maintenance',
      rent: 'Included',
      own: '$100 - $300/month',
      rentBetter: true
    },
    {
      feature: 'AI Features',
      rent: 'Included',
      own: '$500 - $2,000 setup',
      rentBetter: true
    },
    {
      feature: 'SEO Optimization',
      rent: 'Ongoing',
      own: '$1,000 - $3,000/month',
      rentBetter: true
    },
    {
      feature: 'Risk',
      rent: 'Cancel anytime',
      own: 'Stuck with investment',
      rentBetter: true
    },
    {
      feature: 'Time to Launch',
      rent: '5-7 days',
      own: '4-12 weeks',
      rentBetter: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Rent vs <span className="text-amber-500">Own</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See why renting makes more sense for local service businesses
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-900 dark:bg-gray-950 text-white">
            <div className="p-6">
              <h3 className="text-xl font-bold">Feature</h3>
            </div>
            <div className="p-6 bg-amber-500 text-center">
              <h3 className="text-xl font-bold">Rent with Townspace</h3>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">Own Your Website</h3>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((item, index) => (
            <div
              key={item.feature}
              className={`grid grid-cols-3 border-b border-gray-200 dark:border-gray-700 ${
                index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
              }`}
            >
              <div className="p-6">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {item.feature}
                </span>
              </div>
              <div className="p-6 text-center bg-amber-50 dark:bg-amber-900/20">
                <div className="flex items-center justify-center space-x-2">
                  <span className="font-bold text-amber-700 dark:text-amber-400">
                    {item.rent}
                  </span>
                  {item.rentBetter && (
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6 text-center">
                <span className="text-gray-600 dark:text-gray-300">
                  {item.own}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-8 border-2 border-amber-200 dark:border-amber-800">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-trophy-line text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                Rent with Townspace
              </h3>
            </div>
            <ul className="space-y-3 text-amber-800 dark:text-amber-300">
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                Zero upfront investment
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                Continuous improvements included
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                Cancel anytime flexibility
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-check-line text-green-600"></i>
                </div>
                AI features included
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center mr-3">
                <i className="ri-home-line text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                Own Your Website
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-close-line text-red-500"></i>
                </div>
                High upfront costs
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-close-line text-red-500"></i>
                </div>
                Ongoing maintenance burden
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-close-line text-red-500"></i>
                </div>
                Technology becomes outdated
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-2">
                  <i className="ri-close-line text-red-500"></i>
                </div>
                Additional costs for AI features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
