import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { About } from './components/About';
import { DestinationModal } from './components/DestinationModal';
import { Destinations } from './components/Destinations';
import { EnquirySection } from './components/EnquirySection';
import { Experiences } from './components/Experiences';
import { FeaturedJourneys } from './components/FeaturedJourneys';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { JourneyModal } from './components/JourneyModal';
import { Navbar } from './components/Navbar';
import { PageIntro } from './components/PageIntro';
import { RoadTripJourney } from './components/RoadTripJourney';
import {
  DESTINATIONS,
  type Destination,
  type FeaturedJourney,
} from './data/travelData';

export default function App() {
  const [activeDestination, setActiveDestination] =
    useState<Destination | null>(null);
  const [activeJourney, setActiveJourney] = useState<FeaturedJourney | null>(
    null
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryDestination, setEnquiryDestination] = useState<string>('');

  const anyOverlayOpen =
    Boolean(activeDestination) || Boolean(activeJourney) || mobileMenuOpen;

  useEffect(() => {
    document.body.style.overflow = anyOverlayOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [anyOverlayOpen]);

  const jumpToEnquiry = (destinationName: string) => {
    setActiveDestination(null);
    setActiveJourney(null);
    setEnquiryDestination(destinationName);

    requestAnimationFrame(() => {
      const el = document.querySelector('#enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  };

  const handleFooterDestinationClick = (name: string) => {
    const match = DESTINATIONS.find((d) => d.name === name);
    if (match) {
      setActiveDestination(match);
    } else {
      jumpToEnquiry(name);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-[#F7F4EC] text-[#171B19]">
        <PageIntro />
        <Navbar onMobileMenuChange={setMobileMenuOpen} />

        <main>
          <Hero />
          <RoadTripJourney
            onSelectDestinationById={(destinationId) => {
              const match = DESTINATIONS.find((d) => d.id === destinationId);
              if (match) setActiveDestination(match);
            }}
            onExploreAll={() => {
              const el = document.querySelector('#destinations');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onPlanTrip={() => jumpToEnquiry('Custom Multi-Region Journey')}
          />
          <Destinations onSelectDestination={setActiveDestination} />
          <Experiences
            onSelectExperience={() =>
              jumpToEnquiry('Custom Multi-Region Journey')
            }
          />
          <FeaturedJourneys
            onSelectJourney={setActiveJourney}
            onEnquireJourney={(journey) => jumpToEnquiry(journey.destinationName)}
          />
          <About />
          <Gallery />
          <EnquirySection preselectedDestination={enquiryDestination} />
        </main>

        <Footer onSelectDestinationName={handleFooterDestinationClick} />

        {/* Mobile-Friendly Floating WhatsApp Concierge */}
        <FloatingWhatsApp hidden={anyOverlayOpen} />

        {/* Interactive Modals */}
        <DestinationModal
          destination={activeDestination}
          onClose={() => setActiveDestination(null)}
          onEnquire={jumpToEnquiry}
        />

        <JourneyModal
          journey={activeJourney}
          onClose={() => setActiveJourney(null)}
          onCustomise={jumpToEnquiry}
        />
      </div>
    </MotionConfig>
  );
}
