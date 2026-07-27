import { useCallback, useState } from "react";
import SEO from "../components/SEO";
import HeroSection from "../components/certifications/HeroSection";
import CertificateCard from "../components/certifications/CertificateCard";
import CertificateModal from "../components/certifications/CertificateModal";
import certificates from "../data/certificates";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openCertificate = useCallback((certificate) => {
    setSelectedCertificate(certificate);
  }, []);

  const closeCertificate = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  return (
    <>
      <SEO
        title="Certifications | Saket Mishra"
        description="A collection of professional certifications showcasing Saket Mishra's technical expertise and continuous learning."
        path="/certifications"
      />

      <main className="certificate-page-animate min-h-screen px-4 font-poppins sm:px-8 lg:px-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Certificates Grid */}
        <section
          className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2"
          aria-label="Professional certifications"
        >
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
              onOpen={openCertificate}
            />
          ))}
        </section>
      </main>

      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={closeCertificate}
        />
      )}
    </>
  );
};

export default Certifications;