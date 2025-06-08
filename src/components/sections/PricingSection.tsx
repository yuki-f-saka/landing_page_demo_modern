'use client'

import { useState } from 'react'

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string>('standard')
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      id: 'light',
      name: 'ライトプラン',
      description: '気軽にお試し',
      monthlyPrice: 3000,
      yearlyPrice: 30000,
      hourlyRate: '¥3,000/時間',
      popular: false,
      features: [
        '話し相手・愚痴聞き',
        '電話・ビデオ通話対応',
        '1時間から利用可能',
        '基本的な人生相談',
        'メール相談（24時間以内返信）'
      ],
      limitations: [
        'お出かけ同伴は別料金',
        '深夜対応なし（22時まで）'
      ],
      gradient: 'from-gray-500 to-slate-600',
      bgGradient: 'from-gray-50 to-slate-50',
      icon: '🌱'
    },
    {
      id: 'standard',
      name: 'スタンダードプラン',
      description: '一番人気',
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      hourlyRate: '¥5,000/時間',
      popular: true,
      features: [
        '全ライトプラン内容',
        'お出かけ同伴',
        '専門的な人生相談',
        '2時間から利用可能',
        'おじさん指名可能',
        '緊急時対応（19-22時）',
        '月1回の定期面談（無料）'
      ],
      limitations: [
        '24時間対応は別料金'
      ],
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      icon: '⭐'
    },
    {
      id: 'premium',
      name: 'プレミアムプラン',
      description: '完全サポート',
      monthlyPrice: 8000,
      yearlyPrice: 80000,
      hourlyRate: '¥8,000/時間',
      popular: false,
      features: [
        '全スタンダードプラン内容',
        '24時間対応',
        '専属おじさん指名',
        '特別なお出かけ対応',
        '緊急駆けつけサービス',
        '家族・友人への相談同席',
        '専門家紹介サービス',
        '無制限メール相談'
      ],
      limitations: [],
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      icon: '👑'
    }
  ]

  const additionalServices = [
    { name: '緊急対応（深夜）', price: '+¥2,000/時間' },
    { name: 'イベント同伴', price: '+¥3,000/回' },
    { name: '専門家紹介', price: '¥10,000/回' },
    { name: '出張サービス', price: '+¥5,000/回' }
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 via-transparent to-purple-100/30"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PRICING
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            料金プラン
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            明確で分かりやすい料金設定。あなたのニーズに合わせてお選びください。
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 shadow-lg">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                !isYearly 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              月額プラン
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                isYearly 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              年額プラン
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                20%OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative card-hover rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedPlan === plan.id ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' : ''
              } ${
                plan.popular ? 'md:scale-110 z-10' : 'z-0'
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    人気No.1
                  </div>
                </div>
              )}

              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-70`}></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8 bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl h-full">
                {/* Header */}
                <div className={`text-center mb-8 ${plan.popular ? 'mt-8' : ''}`}>
                  <div className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      ¥{isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-500 text-lg">
                      /{isYearly ? '年' : '月'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-2">
                    時間単価: {plan.hourlyRate}
                  </div>
                  {isYearly && (
                    <div className="text-sm text-green-600 font-semibold">
                      月額より¥{(plan.monthlyPrice * 12 - plan.yearlyPrice).toLocaleString()}お得
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">含まれるサービス</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${plan.gradient} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">制限事項</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <button className={`w-full py-4 bg-gradient-to-r ${plan.gradient} text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-orange-300 ring-opacity-50' : ''
                }`}>
                  {plan.popular ? '今すぐ始める' : 'プランを選択'}
                </button>
              </div>

              {/* Glow Effect for Popular */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">追加サービス</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-4 bg-white/80 rounded-2xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                <p className="text-lg font-bold text-blue-600">{service.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">まだ迷っていませんか？</h3>
            <p className="text-xl mb-6 text-blue-100">
              まずは無料相談で、あなたに最適なプランをご提案します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                無料相談を予約
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                プラン比較表をダウンロード
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}