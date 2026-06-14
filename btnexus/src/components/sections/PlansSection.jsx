import React from 'react';
import { Check, Star, Crown, Gem, Settings } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';
import TiltCard from '../TiltCard';

const plans = [
    {
        name: 'Prata',
        price: 'R$ 1.197',
        period: '/mês',
        description: 'Para negócios que querem impacto visual',
        icon: Star,
        features: [
            'Landing page moderna (até 6 páginas)',
            'Animações',
            '5 vídeos editados por mês',
            'Design premium',
            '6 revisões incluídas'],

        featured: false
    },
    {
        name: 'Ouro',
        price: 'R$ 1.597',
        period: '/mês',
        description: 'Solução completa para crescimento digital',
        icon: Crown,
        badge: 'MAIS POPULAR',
        features: [
            'Site moderno premium',
            'Gestão de marketing digital',
            '10 vídeos editados por mês',
            'Monitoramento de contas prioritário',
            'Relatórios mensais de desempenho'],

        featured: true
    },
    {
        name: 'Diamante',
        price: 'R$ 2.497',
        period: '/mês',
        description: 'Para empresas que querem o máximo',
        icon: Gem,
        features: [
            'Site futurístico + animações 3D',
            'Marketing digital completo',
            '20 vídeos por mês',
            'Monitoramento avançado',
            'Chatbot com IA',
            'Design premium',
            'Suporte 24 horas'],

        featured: false
    },
    {
        name: 'Personalizado',
        price: 'Sob consulta',
        period: '',
        description: 'Para quem precisa de algo feito sob medida',
        icon: Settings,
        features: [
            'Escopo totalmente personalizado',
            'Combinamos juntos o que faz sentido',
            'Dedicado à sua realidade',
            'Entrega adaptada ao seu negócio'],

        featured: false
    }];


const avulsos = [
    { service: "La b\xE1sica (1 p\xE1gina responsiva)\n", price: 'R$ 597' },
    { service: 'Site Moderno (6 páginas + animações)', price: 'R$ 1.197' },
    { service: 'Site Futurístico (design avançado + 3D)', price: 'R$ 1.997' },
    { service: 'Edição de Vídeos (4 vídeos)', price: 'R$ 497/mês' },
    { service: 'Monitoramento (contas e plataformas)', price: 'R$ 297/mês' },
    { service: 'Chatbot com IA (configuração + integração)', price: 'R$ 997' }];


export default function PlansSection() {
    return (
        <section id="planos" className="relative py-24 lg:py-32">
            <div className="absolute inset-0 aurora-bg opacity-20" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <span className="text-xs font-semibold text-[#7C3AED] tracking-widest uppercase">Investimento</span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mt-3 mb-4">
                            Nossos <span className="text-gradient-animated">Planos</span>
                        </h2>
                        <p className="text-[#9CA3AF] text-lg max-w-xl mx-auto">
                            Escolha o plano ideal para o seu negócio. Todos incluem suporte personalizado de nossa equipe.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    {plans.map((plan, i) =>
                        <ScrollReveal key={plan.name} delay={i * 0.1}>
                            <TiltCard glowColor={plan.featured ? '#7C3AED' : '#1E40AF'}>
                                <div
                                    className={`relative rounded-2xl p-6 h-full transition-all duration-500 ${plan.featured ?
                                            'glass-strong border-[#7C3AED]/40 animate-pulse-glow lg:-my-4 lg:py-10' :
                                            'glass-strong hover:border-[#7C3AED]/20'}`
                                    }>

                                    {plan.badge &&
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6B21A8] text-[10px] font-bold text-white tracking-wider whitespace-nowrap">
                                            ⭐ {plan.badge}
                                        </div>
                                    }

                                    <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center mb-4">
                                        <plan.icon className="w-5 h-5 text-[#C4B5FD]" />
                                    </div>

                                    <h3 className="text-lg font-display font-bold text-white mb-1">Plano {plan.name}</h3>
                                    <p className="text-xs text-[#9CA3AF] mb-4">{plan.description}</p>

                                    <div className="mb-6">
                                        <span className="text-2xl font-display font-bold text-white">{plan.price}</span>
                                        <span className="text-sm text-[#9CA3AF]">{plan.period}</span>
                                    </div>

                                    <ul className="space-y-3 mb-6">
                                        {plan.features.map((feature) =>
                                            <li key={feature} className="flex items-start gap-2 text-sm text-[#E5E7EB]">
                                                <Check className="w-4 h-4 text-[#7C3AED] mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        )}
                                    </ul>

                                    <a
                                        href="#contato"
                                        className={`block w-full text-center py-3 rounded-full text-sm font-semibold transition-all duration-300 ${plan.featured ?
                                                'bg-gradient-to-r from-[#7C3AED] to-[#6B21A8] text-white glow-purple hover:glow-purple-strong' :
                                                'border border-[#7C3AED]/30 text-white hover:bg-[#7C3AED]/10 hover:border-[#7C3AED]/60'}`
                                        }>

                                        EU QUERO
                                    </a>
                                </div>
                            </TiltCard>
                        </ScrollReveal>
                    )}
                </div>

                {/* Serviços Avulsos */}
                <ScrollReveal>
                    <div className="mt-20">
                        <h3 className="text-2xl font-display font-bold text-white text-center mb-8">
                            Serviços <span className="text-gradient">Avulsos</span>
                        </h3>
                        <div className="glass-strong rounded-2xl overflow-hidden">
                            <div className="divide-y divide-white/[0.06]">
                                {avulsos.map((item) =>
                                    <div key={item.service} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.03] transition-colors">
                                        <span className="text-sm text-[#E5E7EB]">{item.service}</span>
                                        <span className="text-sm font-display font-bold text-[#C4B5FD] whitespace-nowrap ml-4">{item.price}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>);

}