
import Layout from '../../components/feature/Layout';
import HeroSection from './components/HeroSection';
import WhatIncludedSection from './components/WhatIncludedSection';
import HowItWorksSection from './components/HowItWorksSection';
import RentVsOwnSection from './components/RentVsOwnSection';
import SocialProofSection from './components/SocialProofSection';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhatIncludedSection />
      <HowItWorksSection />
      <RentVsOwnSection />
      <SocialProofSection />
      <CTASection />
    </Layout>
  );
}
