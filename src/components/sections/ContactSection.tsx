'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  })

  const contactMethods = [
    {
      icon: '📞',
      title: '電話で相談',
      description: '今すぐお話ししたい方',
      detail: '0120-123-456',
      subDetail: '24時間受付（深夜は翌朝回答）',
      gradient: 'from-green-500 to-emerald-500',
      action: '電話をかける'
    },
    {
      icon: '💬',
      title: 'チャットで相談',
      description: '手軽にメッセージで',
      detail: 'LINE公式アカウント',
      subDetail: '平均返信時間: 5分以内',
      gradient: 'from-blue-500 to-cyan-500',
      action: 'LINEで相談'
    },
    {
      icon: '📧',
      title: 'メールで相談',
      description: 'じっくり相談したい方',
      detail: 'info@rental-ojisan.com',
      subDetail: '24時間以内に必ず返信',
      gradient: 'from-purple-500 to-violet-500',
      action: 'メール作成'
    },
    {
      icon: '🎥',
      title: 'ビデオ通話',
      description: '顔を見て話したい方',
      detail: 'Zoom・Google Meet対応',
      subDetail: '事前予約制（最短30分後）',
      gradient: 'from-orange-500 to-red-500',
      action: '予約する'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-pink-900/50"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              <div className="w-1 h-1 bg-white/30 rounded-full blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-white/80">
              CONTACT US
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            まずはお気軽に
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              ご相談ください
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            24時間受付中。お困りごとやご質問があれば、<br />
            どんな小さなことでもお聞かせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8">連絡方法を選んでください</h3>
            
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group glass-effect rounded-3xl p-6 card-hover cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                      {method.title}
                    </h4>
                    <p className="text-blue-200 text-sm mb-2">{method.description}</p>
                    <p className="text-white font-semibold mb-1">{method.detail}</p>
                    <p className="text-blue-300 text-xs mb-4">{method.subDetail}</p>
                    <button className={`px-4 py-2 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-lg text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
                      {method.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-3xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-xl">
                  🚨
                </div>
                <div>
                  <h4 className="text-lg font-bold text-red-300">緊急時対応</h4>
                  <p className="text-red-200 text-sm">今すぐサポートが必要な方</p>
                </div>
              </div>
              <p className="text-white font-semibold text-lg mb-2">0120-EMERGENCY</p>
              <p className="text-red-200 text-sm">24時間365日対応・最短15分で駆けつけ</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="glass-effect rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">お問い合わせフォーム</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">お名前</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                      placeholder="田中 太郎"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">メールアドレス</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">電話番号</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                      placeholder="090-1234-5678"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">ご希望のサービス</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                    >
                      <option value="" className="bg-gray-800">選択してください</option>
                      <option value="consultation" className="bg-gray-800">話し相手・相談</option>
                      <option value="outing" className="bg-gray-800">お出かけ同伴</option>
                      <option value="event" className="bg-gray-800">イベント参加</option>
                      <option value="emergency" className="bg-gray-800">緊急サポート</option>
                      <option value="other" className="bg-gray-800">その他</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">緊急度</label>
                  <div className="flex space-x-4">
                    {[
                      { value: 'low', label: '急ぎません', color: 'from-green-500 to-emerald-500' },
                      { value: 'normal', label: '通常', color: 'from-blue-500 to-cyan-500' },
                      { value: 'high', label: '急ぎ', color: 'from-orange-500 to-red-500' },
                      { value: 'emergency', label: '緊急', color: 'from-red-500 to-pink-500' }
                    ].map((urgency) => (
                      <label key={urgency.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={urgency.value}
                          checked={formData.urgency === urgency.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          formData.urgency === urgency.value
                            ? `bg-gradient-to-r ${urgency.color} text-white shadow-lg`
                            : 'bg-white/10 text-white/70 hover:bg-white/20'
                        }`}>
                          {urgency.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">お困りの内容</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="どのようなことでお困りですか？どんな些細なことでもお聞かせください。"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>送信する</span>
                    <span>🚀</span>
                  </span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-500/20 border border-blue-400/30 rounded-xl">
                <p className="text-blue-200 text-sm">
                  <span className="font-semibold">プライバシー保護:</span> お送りいただいた情報は厳重に管理し、サービス提供目的以外には使用いたしません。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">よくあるご質問</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: '料金はいくらですか？', a: '基本料金は時間制で、プランによって異なります。' },
              { q: '当日予約は可能ですか？', a: 'はい、空きがあれば当日でもご利用いただけます。' },
              { q: 'どのような方が対応してくれますか？', a: '経験豊富で信頼できるおじさんたちが対応します。' }
            ].map((faq, index) => (
              <div key={index} className="glass-effect rounded-2xl p-6 text-left">
                <h4 className="font-semibold text-white mb-2">Q. {faq.q}</h4>
                <p className="text-blue-200 text-sm">A. {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}