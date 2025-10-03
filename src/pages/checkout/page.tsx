
import { useState } from 'react';
import Layout from '../../components/feature/Layout';
import Button from '../../components/base/Button';

export default function Checkout() {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [multiLocationQuantity, setMultiLocationQuantity] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    message: ''
  });

  const basePrice = 299;
  
  const addOns = [
    {
      id: 'advanced-seo',
      name: 'Advanced Local SEO',
      price: 499,
      description: 'Enhanced SEO with content marketing, local citations, and review management',
      features: [
        'Monthly blog content creation',
        'Local citation building',
        'Review management system',
        'Competitor analysis',
        'Advanced keyword targeting'
      ]
    },
    {
      id: 'google-ads',
      name: 'Google Ads Management',
      price: 299,
      description: 'Professional Google Ads management with $149 monthly ad spend included',
      features: [
        '$149 monthly ad spend included',
        'Campaign setup and optimization',
        'Keyword research and bidding',
        'Ad copy creation and testing',
        'Landing page optimization',
        'Monthly performance reports'
      ]
    },
    {
      id: 'review-booster',
      name: 'Review Booster',
      price: 99,
      description: 'Automated review collection and reputation system',
      features: [
        'Automated review requests',
        'Multi-platform review monitoring',
        'Review response management',
        'Reputation dashboard',
        'Review widget for website'
      ]
    },
    {
      id: 'multi-location',
      name: 'Multi-Location',
      price: 199,
      description: 'Additional location pages and local SEO for multi-location businesses',
      features: [
        'Individual location pages',
        'Location-specific SEO',
        'Local business listings',
        'Multi-location analytics',
        'Centralized management'
      ],
      hasQuantity: true
    }
  ];

  const toggleAddOn = (addOnId: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const updateMultiLocationQuantity = (change: number) => {
    setMultiLocationQuantity(prev => {
      const newQuantity = prev + change;
      return Math.max(1, Math.min(50, newQuantity)); // Min 1, Max 50 locations
    });
  };

  const handleQuantityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setMultiLocationQuantity(Math.max(1, Math.min(50, value)));
  };

  const calculateTotal = () => {
    const addOnTotal = selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (!addOn) return total;
      
      if (addOn.id === 'multi-location') {
        return total + (addOn.price * multiLocationQuantity);
      }
      return total + addOn.price;
    }, 0);
    return basePrice + addOnTotal;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });
    
    const addOnsWithQuantity = selectedAddOns.map(addOnId => {
      if (addOnId === 'multi-location') {
        return `${addOnId} (${multiLocationQuantity} locations)`;
      }
      return addOnId;
    });
    
    submitData.append('selectedAddOns', addOnsWithQuantity.join(', '));
    submitData.append('multiLocationQuantity', multiLocationQuantity.toString());
    submitData.append('monthlyTotal', calculateTotal().toString());
    submitData.append('basePrice', basePrice.toString());
    
    try {
      const response = await fetch('https://readdy.ai/api/form/submit/676b8b8b8b8b8b8b8b8b8b8b', {
        method: 'POST',
        body: submitData
      });
      
      if (response.ok) {
        alert('Order submitted successfully! We will contact you within 24 hours.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          industry: '',
          message: ''
        });
        setSelectedAddOns([]);
        setMultiLocationQuantity(1);
      } else {
        alert('There was an error submitting your order. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your order. Please try again.');
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Your <span className="text-amber-400">Order</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Customize your plan and get started with Townspace today
          </p>
        </div>
      </section>

      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Order Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                
                <form onSubmit={handleSubmit} id="checkout-form" data-readdy-form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
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
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-7 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Website (if any)
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="">Select your industry</option>
                      <option value="hvac">HVAC</option>
                      <option value="roofing">Roofing</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="electrical">Electrical</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="cleaning">Cleaning</option>
                      <option value="pest-control">Pest Control</option>
                      <option value="auto-services">Auto Services</option>
                      <option value="movers">Movers</option>
                      <option value="painters">Painters</option>
                      <option value="handyman">Handyman</option>
                      <option value="tree-services">Tree Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      placeholder="Tell us about your business goals, target audience, or any specific requirements..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none"
                    />
                    <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                  </div>

                  {/* Add-ons Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Available Add-ons
                    </h3>
                    <div className="space-y-4">
                      {addOns.map((addOn) => (
                        <div
                          key={addOn.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                            selectedAddOns.includes(addOn.id)
                              ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                              : 'border-gray-200 dark:border-gray-600 hover:border-amber-300'
                          }`}
                          onClick={() => toggleAddOn(addOn.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex items-start">
                              <div className="flex items-center h-5 mt-1">
                                <input
                                  type="checkbox"
                                  checked={selectedAddOns.includes(addOn.id)}
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    toggleAddOn(addOn.id);
                                  }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500 dark:bg-gray-600 dark:border-gray-500 cursor-pointer"
                                />
                              </div>
                              <div className="ml-3 flex-1">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                  {addOn.name}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
                                  {addOn.description}
                                </p>
                                <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                                  {addOn.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                      <div className="w-3 h-3 flex items-center justify-center mr-2">
                                        <i className="ri-check-line text-green-500 text-xs"></i>
                                      </div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                                
                                {/* Quantity Selector for Multi-Location */}
                                {addOn.hasQuantity && selectedAddOns.includes(addOn.id) && (
                                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                      Number of Locations:
                                    </label>
                                    <div className="flex items-center space-x-3">
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          updateMultiLocationQuantity(-1);
                                        }}
                                        className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                                      >
                                        <i className="ri-subtract-line text-sm"></i>
                                      </button>
                                      <input
                                        type="number"
                                        min="1"
                                        max="50"
                                        value={multiLocationQuantity}
                                        onChange={handleQuantityInputChange}
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-16 px-2 py-1 text-center border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-600 dark:text-white text-sm"
                                      />
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          updateMultiLocationQuantity(1);
                                        }}
                                        className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                                      >
                                        <i className="ri-add-line text-sm"></i>
                                      </button>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                      Total: ${addOn.price * multiLocationQuantity}/mo
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-xl font-bold text-amber-600">
                                {addOn.hasQuantity && selectedAddOns.includes(addOn.id) 
                                  ? `+$${addOn.price * multiLocationQuantity}/mo`
                                  : `+$${addOn.price}/mo`
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" size="lg" fullWidth>
                    Complete Order - ${calculateTotal()}/month
                  </Button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg sticky top-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-600">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Website Rental
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Base plan with all features
                      </p>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white">
                      ${basePrice}/mo
                    </span>
                  </div>

                  {selectedAddOns.length > 0 && (
                    <div className="space-y-3">
                      <h5 className="font-medium text-gray-700 dark:text-gray-300">
                        Selected Add-ons:
                      </h5>
                      {selectedAddOns.map((addOnId) => {
                        const addOn = addOns.find(a => a.id === addOnId);
                        if (!addOn) return null;
                        
                        const isMultiLocation = addOn.id === 'multi-location';
                        const price = isMultiLocation ? addOn.price * multiLocationQuantity : addOn.price;
                        
                        return (
                          <div key={addOnId} className="flex justify-between items-center">
                            <div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {addOn.name}
                              </span>
                              {isMultiLocation && (
                                <span className="text-xs text-gray-500 dark:text-gray-500 block">
                                  {multiLocationQuantity} location{multiLocationQuantity > 1 ? 's' : ''}
                                </span>
                              )}
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">
                              +${price}/mo
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Monthly Total:
                    </span>
                    <span className="text-2xl font-bold text-amber-600">
                      ${calculateTotal()}/mo
                    </span>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center text-amber-800 dark:text-amber-400">
                      <div className="w-5 h-5 flex items-center justify-center mr-2">
                        <i className="ri-shield-check-line"></i>
                      </div>
                      <span className="text-sm font-medium">
                        30-Day Money-Back Guarantee
                      </span>
                    </div>
                  </div>

                  {/* Trust Badges & Seals */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Trust & Security
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                        <div className="w-6 h-6 flex items-center justify-center mx-auto mb-1">
                          <i className="ri-shield-check-line text-green-500"></i>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                          SSL Secured
                        </span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                        <div className="w-6 h-6 flex items-center justify-center mx-auto mb-1">
                          <i className="ri-award-line text-blue-500"></i>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                          BBB A+
                        </span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                        <div className="w-6 h-5 flex items-center justify-center mx-auto mb-1">
                          <i className="ri-lock-line text-purple-500"></i>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                          PCI Compliant
                        </span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center">
                        <div className="w-6 h-5 flex items-center justify-center mx-auto mb-1">
                          <i className="ri-verified-badge-line text-amber-500"></i>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Google Reviews */}
                  <div className="mb-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-6 h-6 flex items-center justify-center mr-2">
                            <i className="ri-google-fill text-blue-500"></i>
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            Google Reviews
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">4.9</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-4 h-4 flex items-center justify-center">
                              <i className="ri-star-fill text-amber-400 text-sm"></i>
                            </div>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          247 reviews
                        </span>
                      </div>
                      <div className="mt-2">
                        <p className="text-xs text-gray-600 dark:text-gray-300 italic">
                          "Townspace transformed our business completely. Highly recommended!"
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          - Mike R., HVAC Business
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <p>• No setup fees or long-term contracts</p>
                    <p>• Cancel anytime with 30 days notice</p>
                    <p>• Fast 5-7 day website launch</p>
                    <p>• All features included from day one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
