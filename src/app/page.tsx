export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">レンタルおじさん</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">サービス</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600">料金</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">おじさん紹介</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">お問い合わせ</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              ご相談・お申し込み
            </button>
          </div>
        </nav>
      </header>

      {/* ヒーローセクション */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              あなたの「欲しい」に<br />
              <span className="text-blue-600">おじさん</span>がお応えします
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              話し相手から愚痴聞き、お出かけ同伴まで。どんなシーンにもおじさんがお手伝いします。気軽にご利用ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                今すぐ相談する
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                サービス詳細
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要 */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">サービス概要</h3>
            <p className="text-xl text-gray-600">様々なシーンでおじさんがお手伝いします</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-blue-50">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">話し相手・愚痴聞き</h4>
              <p className="text-gray-600">日頃の悩みや愚痴を聞きます。人生経験豊富なおじさんが親身になってお話を伺います。</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🚶</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">お出かけ同伴</h4>
              <p className="text-gray-600">一人では行きにくい場所や、誰かと一緒に楽しみたい時におじさんが同伴します。</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">人生相談</h4>
              <p className="text-gray-600">転職、結婚、人間関係など、人生の重要な決断をサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* おじさん紹介 */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">おじさん紹介</h3>
            <p className="text-xl text-gray-600">経験豊富なおじさんたちがお待ちしています</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold mb-2">田中おじさん（55歳）</h4>
              <p className="text-gray-600 mb-2">元営業マン</p>
              <p className="text-sm text-gray-500">人当たりが良く、どんな話題でも盛り上げます。営業経験を活かした人生相談が得意です。</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold mb-2">佐藤おじさん（48歳）</h4>
              <p className="text-gray-600 mb-2">元エンジニア</p>
              <p className="text-sm text-gray-500">論理的思考が得意で、問題解決のアドバイスが的確です。IT関係の相談もお任せください。</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold mb-2">鈴木おじさん（52歳）</h4>
              <p className="text-gray-600 mb-2">元教師</p>
              <p className="text-sm text-gray-500">教育現場での経験を活かし、若い方の悩み相談や進路相談が得意です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">料金プラン</h3>
            <p className="text-xl text-gray-600">明確で分かりやすい料金設定</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-lg p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">ライトプラン</h4>
              <div className="text-4xl font-bold text-blue-600 mb-4">¥3,000<span className="text-lg text-gray-500">/時間</span></div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center">✓ 話し相手・愚痴聞き</li>
                <li className="flex items-center">✓ 電話・ビデオ通話対応</li>
                <li className="flex items-center">✓ 1時間から利用可能</li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                詳細を見る
              </button>
            </div>
            <div className="border-2 border-blue-600 rounded-lg p-8 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                人気
              </div>
              <h4 className="text-2xl font-bold mb-4">スタンダードプラン</h4>
              <div className="text-4xl font-bold text-blue-600 mb-4">¥5,000<span className="text-lg text-gray-500">/時間</span></div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center">✓ 全ライトプラン内容</li>
                <li className="flex items-center">✓ お出かけ同伴</li>
                <li className="flex items-center">✓ 人生相談</li>
                <li className="flex items-center">✓ 2時間から利用可能</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                今すぐ申し込む
              </button>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-8 text-center">
              <h4 className="text-2xl font-bold mb-4">プレミアムプラン</h4>
              <div className="text-4xl font-bold text-blue-600 mb-4">¥8,000<span className="text-lg text-gray-500">/時間</span></div>
              <ul className="space-y-2 mb-6 text-left">
                <li className="flex items-center">✓ 全スタンダードプラン内容</li>
                <li className="flex items-center">✓ 24時間対応</li>
                <li className="flex items-center">✓ 専属おじさん指名</li>
                <li className="flex items-center">✓ 特別なお出かけ対応</li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                詳細を見る
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* お問い合わせ */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">まずはお気軽にご相談ください</h3>
          <p className="text-xl text-blue-100 mb-8">24時間受付中。お困りごとがあれば何でもお聞かせください。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              📞 電話で相談
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              📧 メールで相談
            </button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">レンタルおじさん</h4>
            <p className="text-gray-400 mb-4">あなたの「欲しい」におじさんがお応えします</p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">プライバシーポリシー</a>
              <a href="#" className="text-gray-400 hover:text-white">利用規約</a>
              <a href="#" className="text-gray-400 hover:text-white">特定商取引法</a>
            </div>
            <p className="text-gray-500">&copy; 2024 レンタルおじさん. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}