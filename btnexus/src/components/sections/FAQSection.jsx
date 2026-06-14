import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

const faqs = [
    {
        q: 'Quanto tempo leva para fazer um site?',
        a: 'Depende da complexidade, mas nossos sites ficam prontos em média entre 7 e 21 dias úteis. Sites mais simples podem sair em menos tempo!',
    },
    {
        q: 'Posso parcelar o pagamento?',
        a: 'Sim! Trabalhamos com parcelamento. Entre em contato e combinamos a melhor forma de pagamento para o seu caso.',
    },
    {
        q: 'O chatbot funciona no WhatsApp?',
        a: 'Sim! Nossos chatbots com IA podem ser integrados ao WhatsApp, Instagram e outras plataformas do seu negócio.',
    },
    {
        q: 'Preciso ter conhecimento técnico para usar os serviços?',
        a: 'Não precisa de nenhum conhecimento técnico. Cuidamos de tudo para você, do início ao fim.',
    },
    {
        q: 'Vocês atendem fora do Brasil?',
        a: 'Atendemos clientes em todo o Brasil e também no exterior. Nossa comunicação é 100% remota e eficiente.',
    },
    {
        q: 'O que acontece após a entrega do projeto?',
        a: 'Oferecemos suporte pós-entrega e revisões incluídas conforme o plano contratado. Você nunca fica sozinho.',
    },
];

function FAQItem({ faq, isOpen, onClick }) {
    return (
        <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:border-[#7C3AED]/20">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-5 text-left group"
            >
                <span className={`text-sm sm:text-base font-medium transition-colors duration-300 pr-4 ${isOpen ? 'text-white' : 'text-[#E5E7EB] group-hover:text-white'
                    }`}>
                    {faq.q}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#7C3AED]/20 text-[#C4B5FD]' : 'bg-white/5 text-[#9CA3AF] group-hover:text-white'
                        }`}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 pt-0">
                            <div className="h-px bg-gradient-to-r from-[#7C3AED]/20 to-transparent mb-4" />
                            <p className="text-sm text-[#9CA3AF] leading-relaxed">{faq.a}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="relative py-24 lg:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/[0.01] to-transparent" />
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">FAQ</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                            Perguntas <span className="text-gradient-animated">Frequentes</span>
                        </h2>
                        <p className="text-[#9CA3AF] text-lg">
                            Tudo que você precisa saber antes de começar
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.07}>
                            <FAQItem
                                faq={faq}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}