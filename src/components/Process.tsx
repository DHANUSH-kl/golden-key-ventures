import './Process.css';

const steps = [
  { id: '01', title: 'Consultation & Requirement Gathering', desc: 'We start by understanding your vision, budget, and timeline.' },
  { id: '02', title: 'Planning & Design', desc: 'Our architecture team drafts detailed blueprints and 3D models.' },
  { id: '03', title: 'Material Selection & Approval', desc: 'Collaborative selection of high-quality materials for your project.' },
  { id: '04', title: 'Construction Execution', desc: 'Our skilled professionals bring the design to life with precision.' },
  { id: '05', title: 'Quality Check & Delivery', desc: 'Rigorous inspection before the final handover of your property.' },
];

export default function Process() {
  return (
    <section className="process section-padding">
      <div className="container">
        <div className="process-header fade-in">
          <span className="section-subtitle">Our Process</span>
          <h2 className="section-title">How We Work</h2>
        </div>

        <div className="process-timeline slide-up delay-200">
          {steps.map((step, index) => (
            <div className={`process-step ${index % 2 !== 0 ? 'step-even' : 'step-odd'}`} key={step.id}>
              <div className="step-content">
                <div className="step-number">{step.id}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              <div className="step-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
