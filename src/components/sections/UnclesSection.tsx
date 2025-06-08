'use client'

import { useState } from 'react'

export default function UnclesSection() {
  const [selectedUncle, setSelectedUncle] = useState<number | null>(null)

  const uncles = [
    {
      id: 1,
      name: '田中おじさん',
      age: 55,
      profession: '元営業マネージャー',
      avatar: '👨‍💼',
      specialties: ['営業相談', '人間関係', 'ビジネスマナー', 'お酒の席'],
      personality: '明るく話しやすい',
      experience: '25年',
      rating: 4.9,
      reviews: 342,
      description: '人当たりが良く、どんな話題でも盛り上げます。営業経験を活かした人生相談が得意で、特にビジネスシーンでのお悩みには的確なアドバイスができます。',
      achievement: '月間MVP 3回受賞',
      availability: 'いつでも',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      id: 2,
      name: '佐藤おじさん',
      age: 48,
      profession: '元ITエンジニア',
      avatar: '👨‍💻',
      specialties: ['IT相談', '論理的思考', '問題解決', 'ガジェット'],
      personality: '冷静で論理的',
      experience: '20年',
      rating: 4.8,
      reviews: 287,
      description: '論理的思考が得意で、問題解決のアドバイスが的確です。IT関係の相談はもちろん、効率的な学習方法や時間管理についてもお任せください。',
      achievement: 'システム開発プロジェクト100件成功',
      availability: '平日夜・週末',
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      id: 3,
      name: '鈴木おじさん',
      age: 52,
      profession: '元高校教師',
      avatar: '👨‍🏫',
      specialties: ['教育相談', '進路指導', '学習サポート', '人生設計'],
      personality: '優しく忍耐強い',
      experience: '30年',
      rating: 4.9,
      reviews: 425,
      description: '教育現場での経験を活かし、若い方の悩み相談や進路相談が得意です。どんな小さな悩みでも親身になって聞きます。',
      achievement: '進路指導で95%の成功率',
      availability: '毎日可能',
      gradient: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      id: 4,
      name: '山田おじさん',
      age: 45,
      profession: '元シェフ',
      avatar: '👨‍🍳',
      specialties: ['料理相談', 'グルメ', 'デート計画', '食文化'],
      personality: '情熱的で創造的',
      experience: '22年',
      rating: 4.7,
      reviews: 198,
      description: '料理のプロとして培った創造性と情熱で、あらゆる相談に対応。特にデートプランや美味しいお店選びには絶対の自信があります。',
      achievement: 'ミシュラン星付きレストラン勤務歴',
      availability: '火曜日以外',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      id: 5,
      name: '加藤おじさん',
      age: 58,
      profession: '元金融アナリスト',
      avatar: '👨‍💼',
      specialties: ['投資相談', '資産運用', 'ライフプラン', '保険'],
      personality: '堅実で信頼できる',
      experience: '35年',
      rating: 4.8,
      reviews: 156,
      description: '金融のプロとして長年培った知識で、あなたの将来設計をサポート。お金に関する不安や疑問、何でもお答えします。',
      achievement: '資産運用アドバイザー資格保持',
      availability: '平日のみ',
      gradient: 'from-amber-500 to-yellow-500',
      bgColor: 'from-amber-50 to-yellow-50'
    },
    {
      id: 6,
      name: '森おじさん',
      age: 50,
      profession: '元カウンセラー',
      avatar: '👨‍⚕️',
      specialties: ['心理相談', 'ストレス解消', 'メンタルケア', '人間関係'],
      personality: '共感力が高く優しい',
      experience: '18年',
      rating: 5.0,
      reviews: 89,
      description: 'プロのカウンセラーとしての経験を活かし、心の悩みに寄り添います。どんなことでも安心してお話しください。秘密は絶対に守ります。',
      achievement: '臨床心理士資格保持',
      availability: '要相談',
      gradient: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
    }
  ]

  return (
    <section id="uncles" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-green-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-slate-800 to-zinc-900 bg-clip-text text-transparent mb-6">
            おじさん紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            経験豊富で個性的なおじさんたちがお待ちしています。<br />
            それぞれ異なる専門分野を持つプロフェッショナルです。
          </p>
        </div>

        {/* Uncles Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {uncles.map((uncle, index) => (
            <div
              key={uncle.id}
              className={`group relative card-hover rounded-3xl overflow-hidden cursor-pointer ${
                selectedUncle === uncle.id ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' : ''
              }`}
              onClick={() => setSelectedUncle(selectedUncle === uncle.id ? null : uncle.id)}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${uncle.bgColor} opacity-70 group-hover:opacity-90 transition-all duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8 bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl h-full">
                {/* Avatar & Basic Info */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${uncle.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {uncle.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {uncle.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">{uncle.profession}</p>
                    <p className="text-gray-500 text-xs">{uncle.age}歳 • 経験{uncle.experience}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(uncle.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{uncle.rating}</span>
                  <span className="text-gray-500 text-sm">({uncle.reviews}件)</span>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">得意分野</h4>
                  <div className="flex flex-wrap gap-2">
                    {uncle.specialties.slice(0, selectedUncle === uncle.id ? uncle.specialties.length : 3).map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${uncle.gradient} bg-opacity-10 text-sm font-medium rounded-full border border-current border-opacity-20`}
                      >
                        {specialty}
                      </span>
                    ))}
                    {selectedUncle !== uncle.id && uncle.specialties.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                        +{uncle.specialties.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description - Extended for selected */}
                <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${
                  selectedUncle === uncle.id ? 'mb-6' : 'mb-4'
                }`}>
                  {uncle.description}
                </p>

                {/* Extended Info for Selected Uncle */}
                {selectedUncle === uncle.id && (
                  <div className="space-y-4 animate-fade-in-up">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-700">性格:</span>
                        <p className="text-gray-600">{uncle.personality}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-700">対応時間:</span>
                        <p className="text-gray-600">{uncle.availability}</p>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">実績:</span>
                      <p className="text-gray-600 text-sm">{uncle.achievement}</p>
                    </div>
                    <button className={`w-full py-3 bg-gradient-to-r ${uncle.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                      {uncle.name}に相談する
                    </button>
                  </div>
                )}

                {/* Default CTA for non-selected */}
                {selectedUncle !== uncle.id && (
                  <button className="w-full py-2 text-gray-600 font-medium border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                    詳細を見る
                  </button>
                )}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${uncle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600">登録おじさん数</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-600">満足度</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600">サポート体制</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                1,000+
              </div>
              <div className="text-gray-600">成功事例</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}