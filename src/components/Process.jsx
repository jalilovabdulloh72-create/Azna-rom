import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Process() {
  const steps = [
    { number: "01", title: "O'lchov va Hisob-kitob", description: "Bepul konsultatsiya va to'liq hisob-kitob" },
    { number: "02", title: "Shartnoma", description: "Barcha shartlarni aniqlash va qabullash" },
    { number: "03", title: "Ta'minot", description: "Mahsulotlarning vaqtida yetkazilishi" },
    { number: "04", title: "Ishlab Chiqarish", description: "Masallafka ishlab chiqarish jarayoni" },
    { number: "05", title: "O'rnatish", description: "Professional ustalar tomonidan o'rnatish" },
    { number: "06", title: "Sifat Nazorati", description: "Barcha ishlarga sifat nozoroti" },
  ]

  return (
    <section className="section bg-gradient-to-b from-[#0f1535] to-luxury-dark">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Biz Qanday Ishlayapmiz
        </motion.h2>

        <motion.p 
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Shaffof va muddatli jarayon
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-luxury-blue to-luxury-cyan/30 transform -translate-x-1/2"></div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`flex gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 glass p-6 rounded-xl">
                  <div className="text-luxury-cyan text-2xl font-bold font-display mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {step.description}
                  </p>
                </div>

                {/* Circle */}
                <div className="hidden md:flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-luxury-blue to-luxury-cyan flex items-center justify-center text-white font-bold relative z-10"
                  >
                    {i < steps.length - 1 ? <ArrowRight size={24} /> : '✓'}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
