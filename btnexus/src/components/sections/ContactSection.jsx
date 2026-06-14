import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

export default function ContactSection() {
    return (
        <section id="contato" className="relative py-24 lg:py-32 overflow-hidden">
            {/* Aurora background */}
            <div className="absolute inset-0 aurora-bg opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7C3AED]/10 rounded-full blur-[200px]" />
            <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#1E40AF]/10 rounded-full blur-[150px]" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ScrollReveal>
                    <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Contato</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                        Vamos construir algo{' '}
                        <span className="text-gradient-animated">juntos?</span>
                    </h2>
                    <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto mb-12">
                        Entre em contato e descubra como a BT NEXUS pode transformar sua presença digital.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                        <motion.a
                            href="https://wa.me/5517920030905"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#22C55E] to-[#16A34A] transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Falar no WhatsApp
                        </motion.a>

                        <motion.a
                            href="https://instagram.com/bt.nexus.digital/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#7C3AED] via-[#DB2777] to-[#F97316] transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.3)] hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]"
                        >
                            <Instagram className="w-5 h-5" />
                            Nos seguir no Instagram
                        </motion.a>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="text-[#9CA3AF] text-sm">
                        <span className="text-[#C4B5FD] font-medium">@btnexus</span>
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}