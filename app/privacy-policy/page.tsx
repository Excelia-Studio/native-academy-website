import type { Metadata } from 'next';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Native Academy',
  description:
    'Read the Privacy Policy of Native Academy. Learn how we collect, use, protect, and handle your data and your children\'s information in accordance with global standards.',
};

const sections = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'information-collect', label: '2. Information We Collect' },
  { id: 'childrens-privacy', label: '3. Children\'s Privacy' },
  { id: 'how-we-use', label: '4. How We Use Information' },
  { id: 'sharing-disclosure', label: '5. Sharing & Disclosure' },
  { id: 'data-security', label: '6. Data Security & Retention' },
  { id: 'your-rights', label: '7. Your Rights & Choices' },
  { id: 'policy-changes', label: '8. Changes to this Policy' },
  { id: 'contact-us', label: '9. Contact Us' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="bg-white text-gray-900 min-h-screen">
        {/* Header Hero Section */}
        <section className="relative pt-[140px] pb-16 lg:pb-20 bg-gray-50 border-b border-gray-100 overflow-hidden">
          <div className="absolute -inset-4 bg-gradient-to-tr from-green-100/40 to-amber-100/40 rounded-[32px] blur-3xl opacity-75 -z-10 animate-pulse duration-[10s]" />
          <div className="max-w-[1200px] mx-auto px-6 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 font-heading text-[12px] uppercase tracking-wider rounded-full bg-green-50 text-green-700 border border-green-150 shadow-none mb-4">
              Legal & Disclosures
            </span>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-heading-hero leading-[1.1] text-gray-950 mb-4">
              Privacy <span className="text-green-600 font-normal">Policy</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 max-w-[600px] leading-relaxed">
              Last updated: July 15, 2026. This policy describes how Native Academy processes your personal information and outlines your data protection rights.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
              
              {/* Sticky Sidebar Navigation (Desktop) */}
              <aside className="hidden lg:block sticky top-[100px] border border-gray-100 rounded-2xl bg-gray-50/50 p-6">
                <h3 className="font-heading text-xs uppercase tracking-wider text-gray-400 mb-4">
                  Table of Contents
                </h3>
                <nav className="flex flex-col gap-2.5">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="font-heading text-sm text-gray-600 hover:text-green-600 transition-colors duration-200 no-underline block py-0.5 hover:translate-x-1 transform transition-transform"
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>
              </aside>

              {/* Main Content Body */}
              <article className="prose prose-gray max-w-none">
                
                {/* Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    1. Introduction
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to Native Academy (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting the privacy and personal data of our users, particularly children and their families in the African diaspora.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, register for classes, or interact with our online learning platform. By using our platform, you consent to the data practices described in this policy.
                  </p>
                </section>

                {/* Information We Collect */}
                <section id="information-collect" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    2. Information We Collect
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We collect information that you voluntarily provide to us and data that is automatically generated during your interactions with our platform.
                  </p>
                  
                  <h3 className="font-heading-three text-lg text-gray-900 mt-6 mb-3">
                    A. Information Provided by Parents or Legal Guardians:
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                    <li><strong>Contact details:</strong> First name, last name, email address, physical address, and phone number.</li>
                    <li><strong>Account login details:</strong> Username, password, and security preferences.</li>
                    <li><strong>Payment details:</strong> Credit card information, billing address, and transaction history (processed securely via our third-party merchant partners).</li>
                    <li><strong>Student profiles:</strong> Student first name, age or grade level, and language proficiency level (used solely for class level placement).</li>
                  </ul>

                  <h3 className="font-heading-three text-lg text-gray-900 mt-6 mb-3">
                    B. Information Collected Automatically:
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li>Device type, browser configuration, IP address, and platform telemetry.</li>
                    <li>Usage data including login timestamps, features accessed, and session lengths.</li>
                  </ul>
                </section>

                {/* Children's Privacy */}
                <section id="childrens-privacy" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    3. Children&apos;s Privacy (COPPA & GDPR-K Compliance)
                  </h2>
                  <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-100 mb-6">
                    <h4 className="font-heading text-amber-900 text-base mb-2">
                      ⚠️ Safe Learning Environment
                    </h4>
                    <p className="text-amber-800 text-sm leading-relaxed">
                      Native Academy is designed to assist children in learning native African languages. Protecting children&apos;s online privacy is our absolute priority. We comply fully with the Children&apos;s Online Privacy Protection Act (COPPA) and General Data Protection Regulation child guidelines (GDPR-K).
                    </p>
                  </div>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2.5 mb-4">
                    <li><strong>Parental Consent required:</strong> We do not allow children under the age of 13 to create accounts. Accounts must be registered and managed solely by a parent or legal guardian.</li>
                    <li><strong>Limited Data Collection:</strong> We do not collect more personal information from children than is reasonably necessary to participate in the learning program (e.g. first name and class responses).</li>
                    <li><strong>Live Classes & Video:</strong> Our virtual classes utilize secure live video conferencing tools (like Zoom). While classes are live, they are conducted in a supervised, secure group environment. Recording is only done with explicit parental consent for review or absent student catch-up.</li>
                    <li><strong>Parental Control:</strong> Parents have the right to review their child&apos;s information, request its deletion, and refuse to permit further collection or use of the child&apos;s details.</li>
                  </ul>
                </section>

                {/* How We Use Information */}
                <section id="how-we-use" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    4. How We Use Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use the collected information for the following primary business purposes:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li>To facilitate language class enrollment, delivery, and administration.</li>
                    <li>To personalize the learning experience and tailor language curriculum to individual levels.</li>
                    <li>To process invoices, payments, and prevent transaction fraud.</li>
                    <li>To communicate official class scheduling updates, policy changes, and curriculum progress.</li>
                    <li>To maintain security, perform service optimization, and troubleshoot technical errors.</li>
                  </ul>
                </section>

                {/* Sharing & Disclosure */}
                <section id="sharing-disclosure" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    5. Information Sharing & Disclosure
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>We do not sell, lease, or rent your personal information to third parties.</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We only share information with trusted third-party service providers who assist us in operating our platform, such as:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li>Hosting providers and cloud server infrastructures.</li>
                    <li>Secure payment processing gateways.</li>
                    <li>Live streaming and video meeting tool providers (e.g., Zoom).</li>
                    <li>Educational tools and systems required for classes.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Additionally, we may disclose information if required by law, to protect the rights and safety of our platform and users, or to comply with official judicial proceedings.
                  </p>
                </section>

                {/* Data Security & Retention */}
                <section id="data-security" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    6. Data Security & Retention
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We implement industry-standard administrative, physical, and technological security protocols designed to prevent accidental loss, unauthorized access, or disclosure of data.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>Data Retention:</strong> We will retain your personal information only for as long as your account is active, or as needed to provide you with the learning services, and as required by legal, tax, or accounting requirements.
                  </p>
                </section>

                {/* Your Rights */}
                <section id="your-rights" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    7. Your Rights & Choices
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Depending on your geographical location (such as the UK, EU, or California), you may have certain rights regarding your personal information under the GDPR, CCPA, or UK Data Protection Act:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li><strong>Right of Access:</strong> Request a copy of the data we hold on you.</li>
                    <li><strong>Right of Correction:</strong> Correct inaccurate or incomplete information.</li>
                    <li><strong>Right to Deletion:</strong> Request that we delete your data from our systems.</li>
                    <li><strong>Right to Restrict or Object:</strong> Restrict or object to our processing of your data.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    To exercise any of these rights, please contact us directly using the information provided in Section 9.
                  </p>
                </section>

                {/* Changes to this Policy */}
                <section id="policy-changes" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    8. Changes to this Privacy Policy
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may update this Privacy Policy from time to time. When changes are made, we will revise the &ldquo;last updated&rdquo; date at the top of this page. We encourage parents and users to periodically review this page to stay informed about how we protect your information.
                  </p>
                </section>

                {/* Contact Us */}
                <section id="contact-us" className="scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    9. Contact Us
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have questions, feedback, or concerns regarding our privacy practices, or if you would like to make requests concerning your child&apos;s data, please contact our support team:
                  </p>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mt-4 max-w-md">
                    <p className="font-heading text-base text-gray-900 mb-1">Native Academy</p>
                    <p className="text-sm text-gray-600 mb-1">Email: <a href="mailto:info@nativeacademy.co" className="text-green-600 font-medium hover:underline">info@nativeacademy.co</a></p>
                    <p className="text-sm text-gray-600">Website: <a href="https://nativeacademy.co" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium hover:underline">nativeacademy.co</a></p>
                  </div>
                </section>

              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
