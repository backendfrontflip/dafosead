import React from 'react'
import PageWrapper from '../components/PageWrapper.jsx'

const AboutPage = () => {
  return (
    <PageWrapper>
    <div className="px-6 md:px-20 py-16 bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      
      <div className="max-w-4xl mx-auto space-y-6">
        <p>
          We are a Nigerian-owned engineering company committed to improving the infrastructure of airports through high-performance conveyor belt systems. Our belts help automate and streamline airport baggage handling, ensuring smoother operations nationwide.
        </p>

        <p>
          With branches in major cities across Nigeria, we bring expertise and efficiency closer to our clients. From initial consultation to final installation and ongoing maintenance, we offer comprehensive services to meet the growing demands of modern airports.
        </p>

        <p>
          Our team of engineers and technicians are industry-certified and passionate about solving problems with practical, durable, and scalable conveyor solutions.
        </p>

        <p>
          We are proud to contribute to the safety, speed, and efficiency of airport logistics in Nigeria, one belt at a time.
        </p>

        <div className="mt-10">
          <img src="/assets/team-working.jpg" alt="Our Team at Work" className="rounded-lg shadow-md w-full" />
        </div>
      </div>
    </div>
    </PageWrapper>
  )
}

export default AboutPage