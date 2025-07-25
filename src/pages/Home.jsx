import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import ScrollReveal from 'scrollreveal';

// ScrollReveal wrapper component
const ScrollRevealWrapper = ({ children, origin = 'bottom', delay = 200 }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {
        origin,
        distance: '40px',
        duration: 800,
        delay,
        easing: 'ease-out',
        reset: false,
        opacity: 0,
        scale: 0.95,
        interval: 100,
      });
    }
  }, []);

  return <div ref={ref}>{children}</div>;
};

const Home = () => {
  return (
    <PageWrapper>
      <div className="bg-white text-gray-900">
        {/* Hero Section */}
        <section
          className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url('/assets/airport-belt.jpg')` }}
        >
          <div className="bg-red-600 p-10 m-8 rounded-lg text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Conveyor Solutions for Nigeria’s Airports
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg mb-6"
            >
              Streamlining airport operations with precision-engineered belt
              systems.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link to="/contact">
                <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full text-white font-semibold transition">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="h-[50vh] px-6 m-8 md:px-20 bg-red-600 flex items-center justify-center text-center">
          <ScrollRevealWrapper>
            <div className="text-white max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg max-w-3xl mx-auto">
                We are Nigeria’s trusted conveyor belt supplier for major
                airports. With multiple branches nationwide, we ensure reliable,
                timely solutions for baggage handling and airport logistics.
              </p>
              <Link
                to="/about"
                className="text-white mt-4 inline-block hover:underline"
              >
                Learn more about us →
              </Link>
            </div>
          </ScrollRevealWrapper>
        </section>

        {/* Services */}
        <section className="py-16 px-6 md:px-20 bg-white">
          <ScrollRevealWrapper delay={100}>
            <h2 className="text-3xl font-bold mb-10 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Belt Installation",
                  desc: "Custom installations for airport conveyor systems.",
                },
                {
                  title: "Maintenance & Repair",
                  desc: "Routine checks and emergency repairs to keep things moving.",
                },
                {
                  title: "Custom Engineering",
                  desc: "Tailored conveyor solutions for unique airport needs.",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="border rounded-xl p-6 shadow hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/services">
                <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700">
                  View All Services
                </button>
              </Link>
            </div>
          </ScrollRevealWrapper>
        </section>

        {/* Branches */}
        <section className="py-16 px-6 m-8 md:px-20 bg-red-600 text-white">
          <ScrollRevealWrapper>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Branches Nationwide
            </h2>
            <p className="text-center mb-6">
              With branches in Lagos, Abuja, Port Harcourt, Kano, Enugu, and
              more, we are always close by.
            </p>
            <div className="text-center">
              <img
                src="/assets/nigeria-map.png"
                alt="Nigeria Branches"
                className="mx-auto max-w-md"
              />
            </div>
            <div className="text-center mt-6">
              <Link to="/branches">
                <button className="bg-white text-red-600 px-6 py-3 rounded-full hover:bg-gray-200">
                  Find a Branch Near You
                </button>
              </Link>
            </div>
          </ScrollRevealWrapper>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 md:px-20 bg-white text-red-600 text-center">
          <ScrollRevealWrapper>
            <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
            <p className="mb-6">
              Let’s build something that moves Nigeria forward.
            </p>
            <Link to="/contact">
              <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700">
                Contact Us
              </button>
            </Link>
          </ScrollRevealWrapper>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
