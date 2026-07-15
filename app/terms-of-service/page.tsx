import type { Metadata } from 'next';
import ScrollProgress from '../components/ScrollProgress';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service — Native Academy',
  description:
    'Read the Terms of Service for Native Academy. Learn about our class rules, billing and refund policies, user code of conduct, and intellectual property rights.',
};

const sections = [
  { id: 'agreement', label: '1. Agreement to Terms' },
  { id: 'services-desc', label: '2. Description of Services' },
  { id: 'registration', label: '3. Accounts & Registration' },
  { id: 'payments-refunds', label: '4. Payments & Refunds' },
  { id: 'intellectual-property', label: '5. Intellectual Property' },
  { id: 'code-of-conduct', label: '6. Code of Conduct' },
  { id: 'liability-limits', label: '7. Limitation of Liability' },
  { id: 'governing-law', label: '8. Governing Law' },
  { id: 'contact-info', label: '9. Contact Information' },
];

export default function TermsOfServicePage() {
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
              Terms & Conditions
            </span>
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-heading-hero leading-[1.1] text-gray-950 mb-4">
              Terms of <span className="text-green-600 font-normal">Service</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 max-w-[600px] leading-relaxed">
              Last updated: July 15, 2026. Please read these terms carefully before enrolling in or using any of Native Academy&apos;s educational programs.
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
                
                {/* Agreement to Terms */}
                <section id="agreement" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    1. Agreement to Terms
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&ldquo;you&rdquo;), and Native Academy (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), concerning your access to and use of our website and language training services.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    By registering an account, enrolling a student in a course, or accessing any of our digital services, you agree that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using our services.
                  </p>
                  <div className="p-5 rounded-2xl bg-green-50/50 border border-green-100 mb-4">
                    <p className="text-green-800 text-sm leading-relaxed font-medium">
                      Note for Parents & Guardians: Since our programs are developed for children, accounts must be created and managed by an adult parent or legal guardian. By registering a child, you accept responsibility for their adherence to the Student Code of Conduct during live classes.
                    </p>
                  </div>
                </section>

                {/* Description of Services */}
                <section id="services-desc" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    2. Description of Services
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Native Academy is a dedicated online language school facilitating live, interactive, group-based native African language instruction (primarily Yorùbá, with future additions) for children in the diaspora.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our services include:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li>Live online class sessions hosted by expert instructors.</li>
                    <li>Digital learning worksheets, interactive games, and resources.</li>
                    <li>Class level assessments and placement recommendations.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify, suspend, or discontinue any aspect of our learning programs or platform features at any time without prior notice.
                  </p>
                </section>

                {/* Accounts and Registration */}
                <section id="registration" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    3. Accounts & Registration
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To participate in our classes, you will be required to register an account. You agree to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li>Provide accurate, current, and complete information during registration.</li>
                    <li>Maintain and promptly update your registration and student profile data to keep it accurate.</li>
                    <li>Maintain the confidentiality of your password and account credentials.</li>
                    <li>Accept full responsibility for all activities that occur under your account.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to suspend or terminate accounts that contain false information, violate community security standards, or breach these Terms.
                  </p>
                </section>

                {/* Payments & Refunds */}
                <section id="payments-refunds" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    4. Payments, Subscriptions, & Refunds
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>A. Fees & Billing:</strong> Tuition fees for classes, cohorts, or subscriptions are set forth on our website or course forms. You agree to pay all charges at the prices then in effect, including any applicable transaction fees. Payment is processed securely through our chosen merchant gateway.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>B. Automatic Renewals:</strong> For subscription-based billing models, payments are charged on a pre-authorized recurring basis. You may cancel your subscription at any time via your parent dashboard or by contacting us at <a href="mailto:info@nativeacademy.co" className="text-green-600 hover:underline">info@nativeacademy.co</a>.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>C. Refund Policy:</strong> 
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-4">
                    <li>For multi-week cohort courses, full refunds are available if requested at least 7 days before the start of the first class.</li>
                    <li>If a student completes their first class session and is unsatisfied, a refund request must be submitted within 24 hours of that initial session. Subsequent class completions are non-refundable.</li>
                    <li>No refunds are provided for missed class sessions, though make-up material or recordings may be provided where available.</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section id="intellectual-property" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    5. Intellectual Property Rights
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Unless otherwise indicated, the website, platform, design, software, audio, video, text, graphics, worksheets, lessons, and curriculum materials (collectively, the &ldquo;Content&rdquo;) are our proprietary property and are protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>Your License:</strong> We grant you and your enrolled student a limited, non-exclusive, non-transferable, revocable license to access and print curriculum materials solely for personal, non-commercial, educational use in connection with classes.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You must not copy, reproduce, republish, distribute, sell, license, or exploit the Content for commercial purposes without our express prior written permission.
                  </p>
                </section>

                {/* Code of Conduct */}
                <section id="code-of-conduct" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    6. Code of Conduct (Live Classroom Rules)
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To maintain a safe, welcoming, and high-quality learning environment for children of the diaspora, both students and parents must adhere to the following live classroom standards:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2.5 mb-4">
                    <li><strong>Respectful Communication:</strong> Students must interact respectfully with instructors and fellow classmates. Profanity, hate speech, bullying, or disruption will not be tolerated.</li>
                    <li><strong>No Unauthorized Recordings:</strong> Parents and students are strictly prohibited from screenshotting, screen recording, or publishing video of live class sessions. This is critical to protecting the privacy of all participating children.</li>
                    <li><strong>Classroom Readiness:</strong> Students should attend classes in a quiet environment, with working cameras turned on (when requested), and be ready to participate actively in mother-tongue activities.</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Failure to adhere to these rules may result in warning, temporary suspension, or permanent dismissal from Native Academy programs without refund.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section id="liability-limits" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    7. Limitation of Liability & Disclaimers
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    THE SERVICES AND CONTENT ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. NATIVE ACADEMY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING CLASS PROGRESSION, LANGUAGE FLUENCY ACQUISITION, OR UNINTERRUPTED PLATFORM AVAILABILITY.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    IN NO EVENT SHALL NATIVE ACADEMY, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </p>
                </section>

                {/* Governing Law */}
                <section id="governing-law" className="mb-12 scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    8. Governing Law
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    These Terms and your use of our services are governed by and construed in accordance with the laws of the jurisdiction in which Native Academy operates, without regard to conflict of law principles.
                  </p>
                </section>

                {/* Contact Information */}
                <section id="contact-info" className="scroll-mt-28">
                  <h2 className="font-heading-two text-2xl sm:text-3xl text-gray-900 border-b border-gray-100 pb-2 mb-4">
                    9. Contact Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To resolve a complaint regarding the services, get help with billing, or receive further information regarding use of the platform, please contact us at:
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
