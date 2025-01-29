import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const bgImageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (bgImageRef.current) {
          //   const bgHeight = bgImageRef.current.offsetHeight;
          //   const opacity = Math.min((window.scrollY / bgHeight) * 0.9, 0.9);
          //   setScrollOpacity(opacity);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full ">
        {/* Background Image */}
        <div
          ref={bgImageRef}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/Home.jpg')",
            width: "100vw",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundPosition: "center-top",
          }}
        />

        {/* Darkening Overlay */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-200"
          style={{
            opacity: scrollOpacity,
            width: "100vw",
          }}
        />

        {/* Content */}
        <div className="absolute bottom-20 w-full text-center text-white">
          <Link
            to="/products"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-gray-200 min-h-screen">
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-20">
            What is Thunder Thrift?
          </h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Image */}
            <div className="md:w-1/2">
              <img
                src="/images/about-thunder.jpg"
                alt="Thunder Thrift Store"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

            {/* Right side - Bullet Points */}
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
    </div>
  );
};

export default LandingPage;
