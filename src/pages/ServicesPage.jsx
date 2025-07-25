import React from 'react'
import PageWrapper from '../components/PageWrapper.jsx';

const services = [
  {
    title: "Conveyor Belt Installation",
    description: "We offer precise and durable installation of conveyor systems tailored to airport logistics and baggage flow needs.",
    icon: "🛠️"
  },
  {
    title: "Routine Maintenance",
    description: "Prevent delays and shutdowns with scheduled inspections, tune-ups, and upgrades to your conveyor systems.",
    icon: "🔧"
  },
  {
    title: "Emergency Repairs",
    description: "Rapid-response support to get your systems back online when unexpected failures occur.",
    icon: "🚨"
  },
  {
    title: "Custom Engineering",
    description: "We design and build conveyor systems to fit the specific needs of various airport layouts and traffic.",
    icon: "⚙️"
  },
  {
    title: "Staff Training",
    description: "We train airport personnel on safe usage, inspection, and first-level maintenance of conveyor systems.",
    icon: "📘"
  }
];


const ServicesPage = () => {
  return (
    <PageWrapper>
    <div className="px-6 md:px-20 py-16 bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Services</h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </PageWrapper>
  )
}

export default ServicesPage