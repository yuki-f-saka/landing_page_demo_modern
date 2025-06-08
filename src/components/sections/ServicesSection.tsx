'use client'

import { useState } from 'react'

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: '💬',
      title: '話し相手・愚痴聞き',
      description: '日頃の悩みや愚痴を聞きます。人生経験豊富なおじさんが親身になってお話を伺います。心のモヤモヤをスッキリさせましょう。',
      features: ['24時間対応', 'プライベート保証', '豊富な人生経験'],
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderGradient: 'from-blue-200 to-cyan-200'
    },
    {
      icon: '🚶',
      title: 'お出かけ同伴',
      description: '一人では行きにくい場所や、誰かと一緒に楽しみたい時におじさんが同伴します。映画、カフェ、ショッピングなど何でもOK。',
      features: ['都内全域対応', '安全第一', '楽しい時間保証'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderGradient: 'from-green-200 to-emerald-200'
    },
    {
      icon: '🎯',
      title: '人生相談',
      description: '転職、結婚、人間関係など、人生の重要な決断をサポートします。経験豊富なおじさんの視点から的確なアドバイスを提供。',
      features: ['経験豊富', '客観的視点', '実践的アドバイス'],
      gradient: 'from-purple-500 via-violet-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-violet-50',
      borderGradient: 'from-purple-200 to-violet-200'
    },
    {
      icon: '🎭',
      title: 'イベント参加',
      description: '結婚式、パーティー、会社の飲み会など、一人では参加しづらいイベントに同伴します。場を盛り上げるのも得意です。',
      features: ['TPO対応', 'コミュニケーション上手', '場の雰囲気作り'],
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      bgGradient: 'from-orange-50 to-red-50',
      borderGradient: 'from-orange-200 to-red-200'
    },
    {
      icon: '📚',
      title: '学習サポート',
      description: '資格取得や新しいスキル習得をサポート。経験豊富なおじさんが効率的な学習方法や継続のコツをお教えします。',
      features: ['学習計画作成', 'モチベーション維持', '実務経験共有'],
      gradient: 'from-amber-500 via-yellow-500 to-lime-500',
      bgGradient: 'from-amber-50 to-yellow-50',
      borderGradient: 'from-amber-200 to-yellow-200'
    },
    {
      icon: '🏠',
      title: '生活サポート',
      description: '引っ越し手伝い、家具組み立て、お買い物同伴など、日常生活でちょっと困った時にお手伝いします。',
      features: ['即日対応可能', '幅広いサポート', '丁寧な作業'],
      gradient: 'from-slate-500 via-gray-500 to-zinc-500',
      bgGradient: 'from-slate-50 to-gray-50',
      borderGradient: 'from-slate-200 to-gray-200'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/50 via-transparent to-purple-100/50"></div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SERVICES
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
            サービス概要
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            様々なシーンで経験豊富なおじさんがお手伝い。<br />
            あなたのニーズに合わせて最適なサポートを提供します。
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative card-hover rounded-3xl overflow-hidden ${
                hoveredCard === index ? 'z-20' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-70 group-hover:opacity-90 transition-opacity duration-300`}></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8 bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-blue-900 transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  詳細を見る
                </button>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <span className="flex items-center justify-center space-x-2">
                <span>今すぐ相談する</span>
                <span className="text-xl">🚀</span>
              </span>
            </button>
            <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-white transition-all duration-300">
              料金プランを見る
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}