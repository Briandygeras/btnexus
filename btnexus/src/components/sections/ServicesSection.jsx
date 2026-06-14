import React from 'react';
import { Activity, TrendingUp, Video, Bot, Monitor, FolderOpen } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import TiltCard from '../TiltCard';

const services = [
    {
        icon: Activity,
        title: 'Monitoramento de Contas',
        tag: 'Destaque',
        tagColor: 'from-[#1E40AF] to-[#3B82F6]',
        description: 'Acompanhamento inteligente das suas plataformas digitais — mais organização, estabilidade e presença ativa no mercado online.',
    },
    {
        icon: TrendingUp,
        title: 'Marketing Digital',
        tag: 'Popular',
        tagColor: 'from-[#7C3AED] to-[#A78BFA]',
        description: 'Estratégias criativas para fortalecer sua marca, aumentar visibilidade nas redes e criar comunicação eficiente com seus clientes.',
    },
    {
        icon: Video,
        title: 'Edição Profissional de Vídeos',
        tag: 'Novo',
        tagColor: 'from-[#059669] to-[#34D399]',
        description: 'Vídeos impactantes e conteúdos visuais profissionais para campanhas, divulgação e fortalecimento da sua marca.',
    },
    {
        icon: Bot,
        title: 'Chatbots Inteligentes',
        tag: 'IA',
        tagColor: 'from-[#D946EF] to-[#F0ABFC]',
        description: 'Automações com IA para agilizar atendimentos, atender clientes 24h e melhorar a experiência do público com sua marca.',
    },
    {
        icon: Monitor,
        title: 'Sites Personalizados',
        tag: 'Principal',
        tagColor: 'from-[#6B21A8] to-[#7C3AED]',
        description: 'Sites únicos feitos de acordo com a identidade visual do seu negócio — modernos, rápidos e com foco em resultados.',
    },
    {
        icon: FolderOpen,
        title: 'Portfólios & Cardápios',
        tag: 'Empresas',
        tagColor: 'from-[#1E3A5F] to-[#1E40AF]',
        description: 'Portfólios exclusivos, cardápios digitais e vitrines de produtos desenvolvidos sob medida para o seu negócio.',
    },
];

export default function ServicesSection() {
    return (
        <section id="servicos" className="relative py-24 lg:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E40AF]/[0.02] to-transparent" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Soluções</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                            O que <span className="text-gradient-animated">oferecemos</span>
                        </h2>
                        <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
                            Impulsione seu restaurante, loja, marca ou negócio
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <ScrollReveal key={service.title} delay={i * 0.08}>
                            <TiltCard>
                                <div className="relative glass-strong rounded-2xl p-7 h-full hover:border-[#7C3AED]/30 transition-all duration-500">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                                            <service.icon className="w-6 h-6 text-[#C4B5FD]" />
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${service.tagColor}`}>
                                            {service.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-display font-bold text-white mb-3">{service.title}</h3>
                                    <p className="text-sm text-[#9CA3AF] leading-relaxed">{service.description}</p>
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}