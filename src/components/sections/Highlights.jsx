import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'framer-motion';
import './Highlights.css';

const stats = [
  { value: 6, label: 'Projects Built', suffix: '+' },
  { value: 7, label: 'Technologies', suffix: '+' },
  { value: 4, label: 'Happy Clients', suffix: '+' },
  { value: 100, label: 'Commitment', suffix: '%' }
];

const Counter = ({ end, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration: 2.5,
        onUpdate: (value) => setCount(Math.round(value))
      });
      return () => controls.stop();
    }
  }, [end, inView]);

  return <>{count.toLocaleString()}</>;
};

const Highlights = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section id="highlights" className="section-padding container">
      <div className="highlights-container glass" ref={ref}>
        {stats.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <div className="stat-value gradient-text">
              <Counter end={stat.value} inView={inView} />
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Highlights;
