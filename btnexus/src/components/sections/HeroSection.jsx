import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ParticleField from '../ParticleField';
import FloatingSphere from '../FloatingSphere';
import TypewriterText from '../TypewriterText';

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-[#0A0A0F]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/5 via-transparent to-[#1E40AF]/5" />
            <div className="absolute inset-0 aurora-bg opacity-40" />
            <ParticleField />

            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-[#1E40AF]/10 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pt-20">
                <div className="flex-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-[#7C3AED]/20 mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
                        <span className="text-xs font-medium text-[#C4B5FD] tracking-wider uppercase">Agência de Tecnologia</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] text-white mb-6">
                        <TypewriterText text="Tecnologia que transforma negócios" delay={800} />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3 }}
                        className="text-lg sm:text-xl text-[#9CA3AF] max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                    >
                        Sites, chatbots, vídeos e marketing digital para empresas que querem crescer de verdade no digital.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <a
                            href="#planos"
                            className="group relative px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#6B21A8] hover:from-[#8B5CF6] hover:to-[#7C3AED] transition-all duration-300 glow-purple hover:glow-purple-strong overflow-hidden"
                        >
                            <span className="relative z-10">Ver nossos planos</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
                        </a>
                        <a
                            href="#contato"
                            className="px-8 py-4 rounded-full text-sm font-semibold text-white border border-[#7C3AED]/40 hover:border-[#7C3AED] hover:bg-[#7C3AED]/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]"
                        >
                            Fale com a gente
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="flex-shrink-0"
                >
                    <FloatingSphere />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-[#9CA3AF] tracking-widest uppercase">Scroll</span>
                    <ChevronDown className="w-5 h-5 text-[#7C3AED]" />
                </motion.div>
            </motion.div>
        </section>
    );
}