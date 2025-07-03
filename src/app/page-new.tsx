'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Users, TrendingUp, Target, ChevronRight, Play, Star, Building, Award, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-purple-200 text-sm mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              Revolucioni në Trajnimin e Punonjësve
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Trajnime të
              </span>
              <br />
              <span className="text-white">Personalizuara</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                me AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Platforma që revolucionon zhvillimin e talenteve duke krijuar kurse të personalizuara 
              bazuar në performancën individuale dhe analizën e gabimeve të zakonshme në punë
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-purple-500/25 transition-all duration-300"
              >
                <span className="flex items-center">
                  Shiko Demonstrimin
                  <Play className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300"
              >
                <span className="flex items-center">
                  Mëso Më Shumë
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Çfarë na bën të <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Veçantë</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Kombinojmë inteligjencën artificiale me analizën e performancës për të krijuar 
              eksperienca trajnimi unike për çdo punonjës
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BrainCircuit,
                title: "AI të Avancuar",
                description: "Algoritme të sofistikuar që analizojnë performancën dhe krijojnë trajnime të përshtatura",
                color: "from-purple-500 to-blue-500"
              },
              {
                icon: Target,
                title: "Fokus të Targetuar",
                description: "Identifikojmë me saktësi zonat e dobëta dhe krijojmë kurse specifike për to",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: TrendingUp,
                title: "Rezultate të Matura",
                description: "Ndjekje në kohë reale të progresit dhe përmirësimit të performancës",
                color: "from-cyan-500 to-green-500"
              },
              {
                icon: Users,
                title: "Për Çdo Ekip",
                description: "Skalojmë lehtësisht për ekipe të vogla dhe ndërmarrje të mëdha",
                color: "from-green-500 to-purple-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10">
                  <div className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center mb-6",
                    feature.color
                  )}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Çfarë Thonë <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Klientët Tanë</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Performanca e ekipit tonë u përmirësua 40% brenda 3 muajve. ROI-ja ishte e pabesueshme!",
                author: "Andi Metani",
                position: "HR Director",
                company: "TechAlb Solutions",
                logo: "🏢",
                metrics: "+40% Performance"
              },
              {
                quote: "Kurset e personalizuara i zgjidhën problemet specifike të secilit punonjës. Revolucionar!",
                author: "Elisa Brahimi", 
                position: "CEO",
                company: "Digital Innovations",
                logo: "🚀",
                metrics: "90% Employee Satisfaction"
              },
              {
                quote: "Kursimi në koston e trajnimeve arriti në 60%. Investimi më i mirë që kemi bërë!",
                author: "Dritan Noka",
                position: "Operations Manager", 
                company: "AlbManufacturing",
                logo: "⚡",
                metrics: "60% Cost Reduction"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full">
                  <div className="text-4xl mb-4">{testimonial.logo}</div>
                  <div className="text-purple-400 font-bold text-lg mb-4">{testimonial.metrics}</div>
                  <blockquote className="text-slate-300 text-lg mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-slate-400 text-sm">{testimonial.position}</div>
                      <div className="text-purple-400 text-sm font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "95%", label: "Përmirësim në Performancë", icon: TrendingUp },
              { number: "80%", label: "Kursim Kohe në Trajnime", icon: Target },
              { number: "500+", label: "Kompani të Kënaqura", icon: Building }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-300 text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-green-200 text-sm mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Demo i Drejtpërdrejtë Aktiv
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Testo <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Falas</span> për 14 Ditë
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Pa karta krediti. Pa detyrime. Vetëm rezultate të mahnitshme për ekipin tuaj.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { 
                  title: "Konfigurimi", 
                  time: "5 min", 
                  desc: "Setup i shpejtë", 
                  icon: "⚡",
                  color: "from-yellow-500 to-orange-500"
                },
                { 
                  title: "Analiza e Parë", 
                  time: "30 min", 
                  desc: "Rezultatet fillestare", 
                  icon: "📊",
                  color: "from-blue-500 to-purple-500"
                },
                { 
                  title: "Kurset e Para", 
                  time: "2 orë", 
                  desc: "AI gjeneron kurse", 
                  icon: "🎯",
                  color: "from-green-500 to-blue-500"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl`}>
                      {step.icon}
                    </div>
                    <div className="text-white font-semibold mb-1">{step.title}</div>
                    <div className="text-purple-400 font-bold mb-2">{step.time}</div>
                    <div className="text-slate-400 text-sm">{step.desc}</div>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-green-500/25 transition-all duration-300"
              >
                <span className="flex items-center">
                  🚀 Fillo Demo-n Falas
                  <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-5 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300"
              >
                <span className="flex items-center">
                  📞 Rezervo Konsultim
                  <Play className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">
              <div className="flex items-center justify-center text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Pa karta krediti</span>
              </div>
              <div className="flex items-center justify-center text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Anulim në çdo kohë</span>
              </div>
              <div className="flex items-center justify-center text-slate-400">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>Setup 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Gati për të Revolucionuar Trajnimin?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Bashkohuni me qindra kompani që tashmë përdorin platformën tonë për të përmirësuar performancën e ekipeve
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-purple-500/25 transition-all duration-300"
              >
                Fillo Provën Falas
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300"
              >
                Rezervo një Demo
              </motion.button>
            </div>

            <div className="flex items-center justify-center mt-8 text-slate-400">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span>14 ditë falas • Pa karta krediti • Konfigurim në 5 minuta</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
