export default function Footer() {
  const footerLinks = {
    service: [
      { name: 'サービス概要', href: '#services' },
      { name: 'おじさん紹介', href: '#uncles' },
      { name: '料金プラン', href: '#pricing' },
      { name: '利用の流れ', href: '#flow' }
    ],
    support: [
      { name: 'よくある質問', href: '#faq' },
      { name: 'お問い合わせ', href: '#contact' },
      { name: 'ヘルプセンター', href: '#' },
      { name: '緊急時対応', href: '#' }
    ],
    company: [
      { name: '会社概要', href: '#' },
      { name: 'プライバシーポリシー', href: '#' },
      { name: '利用規約', href: '#' },
      { name: '特定商取引法', href: '#' }
    ],
    social: [
      { name: 'Twitter', href: '#', icon: '🐦' },
      { name: 'Facebook', href: '#', icon: '📘' },
      { name: 'Instagram', href: '#', icon: '📷' },
      { name: 'LINE', href: '#', icon: '💬' }
    ]
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold">👨</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    レンタルおじさん
                  </h3>
                  <p className="text-gray-400 text-sm">Rental Uncle</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                あなたの「欲しい」におじさんがお応えします。<br />
                経験豊富なおじさんたちが、どんなシーンでも<br />
                親身になってサポートいたします。
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">0120-123-456</p>
                    <p className="text-gray-400 text-xs">24時間受付</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">info@rental-ojisan.com</p>
                    <p className="text-gray-400 text-xs">24時間以内返信</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Services */}
                <div>
                  <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    サービス
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.service.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div>
                  <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    サポート
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    会社情報
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-bold text-white mb-2">お得な情報をお届け</h4>
              <p className="text-gray-400 text-sm">新サービスやキャンペーン情報をいち早くお知らせします</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
                登録
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; 2024 レンタルおじさん株式会社. All rights reserved.
              </p>
            </div>
            
            <div className="text-gray-400 text-sm">
              Made with ❤️ in Tokyo
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="group bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-110 animate-pulse">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🚨</span>
              <span className="font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                緊急時はこちら
              </span>
            </div>
          </button>
        </div>
      </div>
    </footer>
  )
}