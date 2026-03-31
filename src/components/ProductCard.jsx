import { ShoppingCart, Heart } from 'lucide-react'

const ProductCard = ({ product }) => {
  const handleOrder = () => {
    const message = encodeURIComponent(`Salam, "${product.name}" oyuncağını sifariş etmək istəyirəm`)
    const whatsappUrl = `https://wa.me/994?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <div className="relative overflow-hidden bg-gray-100 h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors duration-200">
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Yeni
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{product.benefit}</p>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-primary-600">{product.price} ₼</span>
          </div>
          
          <button
            onClick={handleOrder}
            className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Sifariş et</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
