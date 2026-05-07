import { motion } from 'framer-motion'
import { useState } from 'react'
import { Filter } from 'lucide-react'

export default function Products() {
  const [category, setCategory] = useState('all')

  const products = [
    // PVC
    { id: 1, name: "AKFA TRIO 6000", category: "pvc", specs: "6-kameraviy sistema" },
    { id: 2, name: "QUATTRO 6000", category: "pvc", specs: "4-kameraviy sistema" },
    { id: 3, name: "AKFA 7000", category: "pvc", specs: "7-kameraviy sistema" },
    { id: 4, name: "ENGELBERG 7000", category: "pvc", specs: "7-kameraviy sistema" },
    { id: 5, name: "ENGELBERG 8000", category: "pvc", specs: "8-kameraviy sistema" },
    // Aluminum
    { id: 6, name: "BKT 57", category: "aluminum", specs: "57mm profil" },
    { id: 7, name: "THERMO 65", category: "aluminum", specs: "65mm profil" },
    { id: 8, name: "YWD 78 THERMO", category: "aluminum", specs: "78mm profil" },
    { id: 9, name: "BKT 70", category: "aluminum", specs: "70mm profil" },
    { id: 10, name: "BKT 98", category: "aluminum", specs: "98mm profil" },
    { id: 11, name: "BKH 65", category: "aluminum", specs: "65mm profil" },
  ]

  const filtered = category === 'all' 
    ? products 
    : products.filter(p => p.category === category)

  return (
    <section id="products" className="section bg-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Bizning Mahsulotlar
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 my-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Hammasi", value: 'all' },
            { label: "PVC Romlar", value: 'pvc' },
            { label: "Alyumin Eshiklar", value: 'aluminum' },
          ].map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setCategory(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                category === filter.value
                  ? 'bg-luxury-blue text-white shadow-lg shadow-luxury-blue/50'
                  : 'glass text-gray-300 hover:text-luxury-cyan'
              }`}
            >
              <Filter size={16} />
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              layout
              className="glass p-8 rounded-xl text-center group hover:border-luxury-cyan/60 transition-colors"
            >
              {/* Product Image Placeholder */}
              <motion.div 
                className="w-full h-48 bg-gradient-to-br from-luxury-blue/20 to-luxury-cyan/20 rounded-lg mb-6 flex items-center justify-center group-hover:from-luxury-blue/40 group-hover:to-luxury-cyan/40 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl text-luxury-cyan/50">🪟</div>
              </motion.div>

              <h3 className="text-xl font-bold mb-2 font-display group-hover:gradient-text transition-all">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {product.specs}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-secondary text-sm"
              >
                Ko'proq Bilish
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Boshqa mahsulotlar uchun bizga murojaat qiling
          </p>
          <button className="btn-primary">
            Katalogni Yuklab Oling
          </button>
        </motion.div>
      </div>
    </section>
  )
}
