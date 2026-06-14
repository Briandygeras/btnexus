import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TechBar from '../components/TechBar';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyBTNexusSection from '../components/sections/WhyBTNexusSection';
import SegmentsSection from '../components/sections/SegmentsSection';
import PlansSection from '../components/sections/PlansSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import FooterSection from '../components/sections/FooterSection';
import SectionDivider from '../components/SectionDivider';
import ShimmerReveal from '../components/ShimmerReveal';
import CustomCursor from '../components/CustomCursor';
import LoadingScreen from '../components/LoadingScreen';
import CalculatorSection from '../components/CalculatorSection';
import WhatsAppButton from '../components/WhatsAppButton';
import UrgencyBanner from '../components/UrgencyBanner';

export default function Home() {
    const [loading, setLoading] = useState(!sessionStorage.getItem('btnexus_loaded'));

    if (loading) {
        return <LoadingScreen onComplete={() => setLoading(false)} />;
    }

    return (
        <div className="min-h-screen bg-[#0A0A0F] text-[#E5E7EB] overflow-x-hidden">
            <CustomCursor />
            <CalculatorSection />
            <WhatsAppButton />
            <UrgencyBanner />
            <Navbar />
            <ShimmerReveal>
                <HeroSection />
            </ShimmerReveal>
            <TechBar />
            <SectionDivider />
            <ShimmerReveal>
                <AboutSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <ServicesSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <WhyBTNexusSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <SegmentsSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <PlansSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <PortfolioSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <TestimonialsSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <FAQSection />
            </ShimmerReveal>
            <SectionDivider />
            <ShimmerReveal>
                <ContactSection />
            </ShimmerReveal>
            <FooterSection />
        </div>
    );
}