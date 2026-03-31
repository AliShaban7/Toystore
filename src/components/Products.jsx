import ProductCard from './ProductCard'
import { Package } from 'lucide-react'

const Products = ({ products, loading }) => {
  if (loading) {
    return (
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <Package className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Populyar <span className="text-gradient">Məhsullar</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ən çox seçilən və sevimli oyuncaqlarımızla tanış olun
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Məhsul tapılmadı</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
