import React from 'react';
import PageWrapper from '../components/PageWrapper.jsx';

const branches = [
  {
    city: "Lagos",
    address: "Murtala Muhammed Airport, Ikeja, Lagos",
    phone: "+234 801 234 5678",
    map: "https://maps.google.com/maps?q=ikeja%20lagos&output=embed&z=13&pb="
  },
  {
    city: "Abuja",
    address: "Nnamdi Azikiwe International Airport, Abuja",
    phone: "+234 802 345 6789",
    map: "https://maps.google.com/maps?q=abuja&output=embed&z=13&pb="
  },
  {
    city: "Port Harcourt",
    address: "Port Harcourt Intl Airport, Omagwa, Rivers",
    phone: "+234 803 456 7890",
    map: "https://maps.google.com/maps?q=port%20harcourt&output=embed&z=13&pb="
  },
  {
    city: "Enugu",
    address: "Akanu Ibiam International Airport, Enugu",
    phone: "+234 804 567 8901",
    map: "https://maps.google.com/maps?q=enugu&output=embed&z=13&pb="
  },
  {
    city: "Kano",
    address: "Mallam Aminu Kano Intl Airport, Kano",
    phone: "+234 805 678 9012",
    map: "https://maps.google.com/maps?q=kano&output=embed&z=13&pb="
  }
];

const Branches = () => {
  return (
    <PageWrapper>
      <div className="px-6 md:px-20 py-16 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-red-600 mb-10 text-center">Our Branches</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          We proudly serve airports across Nigeria. Our branch offices provide local support, rapid response, and on-site engineering for seamless operations.
        </p>

        <div className="grid gap-10 md:grid-cols-2 text-white">
          {branches.map((branch, index) => (
            <div key={index} className="bg-red-600 rounded-xl shadow p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-white">{branch.city}</h2>
              <p><strong>Address:</strong> {branch.address}</p>
              <p><strong>Phone:</strong> {branch.phone}</p>
              <div className="w-full h-56">
                <iframe
                  title={`Map of ${branch.city}`}
                  src={branch.map}
                  className="w-full h-full border rounded"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl text-red-600 font-bold mb-4">Nationwide Presence</h3>
          <img
            src="/assets/nigeria-map.png"
            alt="Map of Nigeria"
            className="mx-auto max-w-md text-red-600"
          />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Branches;
