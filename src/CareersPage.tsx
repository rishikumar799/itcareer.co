import { motion } from 'motion/react';

const roles = [
  {
    title: 'Software Engineer',
    description: 'Develop robust, scalable applications using modern tech stacks.',
  },
  {
    title: 'Data Analyst',
    description: 'Transform data into actionable insights for business decisions.',
  },
  {
    title: 'Product Manager',
    description: 'Lead product vision, roadmap, and cross‑functional delivery.',
  },
  {
    title: 'UX Designer',
    description: 'Design intuitive, user‑centered experiences across platforms.',
  },
];

const CareersPage = ({ onNavigate, onTalkToCounselor }: { onNavigate: (page: string) => void, onTalkToCounselor: () => void }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0057FF] to-[#00C4CC] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
        <p className="text-lg max-w-xl mx-auto">
          At Selectees we value talent, innovation, and collaboration. Explore our open roles and become part of a thriving community.
        </p>
      </section>

      {/* Roles Grid */}
      <section className="section-container py-12">
        <h3 className="text-2xl font-heading font-black text-center mb-8">Open Positions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-heading font-bold text-white mb-2">{role.title}</h4>
              <p className="text-sm text-white/80 mb-4">{role.description}</p>
              <button
                onClick={() => {
                  // For demo, open a mailto link to apply
                  window.location.href = `mailto:info@itcareer.co?subject=Application%20for%20${encodeURIComponent(
                    role.title
                  )}`;
                }}
                className="px-4 py-2 bg-white text-[#0057FF] rounded-md font-semibold hover:bg-[#f0f0f0] transition-colors"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default CareersPage;
