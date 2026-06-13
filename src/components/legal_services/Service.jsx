import ServicesHero from "../../components/legal_services/ServiceHero";
import ServicesGrid from "../../components/legal_services/ServicesGrid";
import EligibilitySection from "../../components/legal_services/EligibilitySection";
import ProcessTimeline from "../../components/legal_services/ProcessTimeline";
import RequiredDocuments from "../../components/legal_services/RequiredDocuments";
import PricingPlans from "../../components/legal_services/PricingPlans";
import FAQSection from "../../components/legal_services/FAQSection";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <EligibilitySection />
      <ProcessTimeline />
      <RequiredDocuments />
      <PricingPlans />
      <FAQSection />

    </>
  );
};

export default Services;