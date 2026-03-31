import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ayşə Məmmədova',
      role: 'Ana',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'ToyStore.az-dan aldığım oyuncaqlar həm keyfiyyətli, həm də uşağım çox xoşbəxtdir. Çatdırılma da çox sürətli oldu!',
    },
    {
      name: 'Rəşad Əliyev',
      role: 'Ata',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Oğlum üçün LEGO konstruktor aldım. Qiymət də münasib, məhsul da əla. Tövsiyə edirəm!',
    },
    {
      name: 'Günel Həsənova',
      role: 'Ana',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Çox geniş çeşid var və hər yaş qrupu üçün uyğun oyuncaqlar tapa bilirsiniz. Əla mağaza!',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-purple-50 to-secondary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Quote className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Müştəri <span className="text-gradient">Rəyləri</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Xoşbəxt müştərilərimizin bizimlə bölüşdükləri təcrübələr
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
