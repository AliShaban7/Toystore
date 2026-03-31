import { Shield, Truck, CreditCard, Headphones } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Təhlükəsiz Məhsullar',
      description: 'Bütün oyuncaqlarımız beynəlxalq keyfiyyət standartlarına uyğundur',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Truck,
      title: 'Sürətli Çatdırılma',
      description: 'Bakı daxilində 24 saat ərzində pulsuz çatdırılma',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: CreditCard,
      title: 'Rahat Ödəniş',
      description: 'Nağd və ya kart ilə ödəniş imkanı',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Headphones,
      title: '24/7 Dəstək',
      description: 'Hər zaman sizin xidmətinizdəyik',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Niyə <span className="text-gradient">ToyStore.az</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Müştərilərimizə ən yaxşı xidməti təqdim etmək bizim prioritetimizdir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bgColor} rounded-full mb-6`}>
                  <Icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
