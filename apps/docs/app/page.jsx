import React from "react";
import ComponentShowcase from "@/components/home/ComponentShowcase";
import ContributionForm from "@/components/home/ContributionForm";
import EndBrand from "@/components/home/EndBrand";
import FAQ from "@/components/home/FAQ";
import FloatingParticles from "@/components/home/FloatingParticles";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import PerformanceDX from "@/components/home/PerformanceDX";

const page = () => {
    return (
        <>
            <FloatingParticles />
            <Hero />
            <ComponentShowcase />
            <PerformanceDX />
            <ContributionForm />
            <FAQ />
            <EndBrand />
            <Footer />
        </>
    );
};

export default page;
