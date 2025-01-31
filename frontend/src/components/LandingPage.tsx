import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const bgImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (bgImageRef.current) {
          const bgHeight = bgImageRef.current?.offsetHeight || 0;
          const opacity = Math.min((window.scrollY / bgHeight) * 0.9, 0.9);
          setScrollOpacity(opacity);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <div className="relative min-h-screen w-screen">
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center relative z-20">
          <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold py-2 px-4 rounded-full w-80 mt-[650px] mr-40 text-xl">
            JOIN THE STAMPEDE
          </button>
        </div>

        {/* Background Image */}
        <div
          ref={bgImageRef}
          className="aspect-ratio absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Home.jpg')",
          }}
        />
        {/* Darkening Effect */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-200"
          style={{
            opacity: scrollOpacity,
            width: "100%",
          }}
        />
      </div>

      {/* About Section */}
      <div className="w-full bg-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-20">
            What is Thunder Thrift?
          </h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="md:w-1/2">
              <img
                src="/images/WhatIsThunderThrift.jpg"
                alt="Thunder Thrift Store"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            {/* Right Side - Bullet Points */}
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>
                      Thunder Thrift is Simpson College's student-exclusive
                      thrift marketplace
                    </b>
                    , providing a trusted platform for students to buy, sell,
                    and exchange pre-loved items within the campus community.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>Designed to promote sustainability</b>, Thunder Thrift
                    encourages students to repurpose their belongings, reducing
                    waste and fostering a circular economy on campus.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>A secure, student-verified marketplace</b>, ensuring all
                    transactions take place within a reliable and safe network
                    of Simpson College students.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>Convenient and community-driven</b>, Thunder Thrift makes
                    it easy for students to find affordable essentials, from
                    textbooks to dorm decor, while supporting a culture of reuse
                    and responsible consumption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="w-full bg-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-20">How It Works</h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Bullet Points */}
            <div className="md:w-1/2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>Sign up with your Simpson College email</b> to verify
                    your student status.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>List your items</b> for sale or browse the marketplace!
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>Chat securely with buyers and sellers</b> to arrange
                    transactions.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="text-lg">
                    <b>Meet on campus</b> for easy and safe exchanges.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="md:w-1/2">
              <img
                src="/images/howitworks.jpeg"
                alt="How It Works"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
