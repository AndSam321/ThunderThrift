import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BarChart from "../components/BarChart.tsx";

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
      {/* JumboTron Section */}
      <div className="relative min-h-screen w-screen">
        <div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center relative z-20">
          <Link to="/login" className="text-white font-bold text-4xl">
            <button className="mt-[650px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold py-2 px-4 rounded-full w-80 text-xl">
              JOIN THE COMMUNITY
            </button>
          </Link>
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
      <motion.div
        className="w-full bg-gray-200 min-h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="font-roboto text-4xl font-bold text-center mb-20">
            What is Thunder Thrift?
          </h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/images/WhatIsThunderThrift.jpg"
                alt="Thunder Thrift Store"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>

            {/* Right Side - Bullet Points */}
            <motion.div
              className="md:w-1/2 space-y-6"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                "Thunder Thrift is Simpson College's student-exclusive thrift marketplace, providing a trusted platform for students to buy, sell, and exchange pre-loved items within the campus community.",
                "Designed to promote sustainability, Thunder Thrift encourages students to repurpose their belongings, reducing waste and fostering a circular economy on campus.",
                "A secure, student-verified marketplace, ensuring all transactions take place within a reliable and safe network of Simpson College students.",
                "Convenient and community-driven, Thunder Thrift makes it easy for students to find affordable essentials, from textbooks to dorm decor, while supporting a culture of reuse and responsible consumption.",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                  <p className="font-roboto text-lg">
                    <b>{text.split(",")[0]}</b>, {text.split(",").slice(1)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        className="w-full bg-gray-200 min-h-screen -mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto py-20 px-4">
          {/* Section Title */}
          <h2 className="font-roboto text-4xl font-bold text-center mb-20">
            How It Works
          </h2>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row items-center gap-12 -mt-10">
            {/* Left Side - Bullet Points */}
            <motion.div
              className="md:w-1/2 space-y-6"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {[
                  {
                    title: "Sign up with your Simpson College email",
                    desc: "to verify your student status.",
                  },
                  {
                    title: "List your items",
                    desc: "for sale or browse the marketplace!",
                  },
                  {
                    title: "Chat securely with buyers and sellers",
                    desc: "to arrange transactions.",
                  },
                  {
                    title: "Meet on campus",
                    desc: "for easy and safe exchanges.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="font-roboto flex items-start gap-4"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-red-700 flex-shrink-0" />
                    <p className="text-lg">
                      <b>{item.title}</b> {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src="/images/howitworks.jpeg"
                alt="How It Works"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Student Testimonials Section */}
      <motion.div
        className="w-full bg-gray-200 min-h-screen -mt-60"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto py-20 px-4">
          <h2 className="font-roboto text-4xl font-bold text-center mb-20">
            Student Testimonials
          </h2>

          {/* Bar Chart and Side Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Left side - Chart */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                Student Satisfaction Ratings
              </h3>
              <BarChart />
            </motion.div>

            {/* Right side - Review Cards */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                {
                  quote:
                    "There really isn't anything like Thunder Thrift on campus. I created this as a way to give back to the community and help students save money on essentials, while also promoting sustainability!",
                  name: "Andrew Samountry",
                  class: "Class of 2025",
                },
                {
                  quote: "I love how easy it is to use Thunder Thrift!",
                  name: "Rachel Garcia",
                  class: "Class of 2027",
                },
                {
                  quote:
                    "The platform is super user-friendly and I feel safe knowing I'm trading with fellow Simpson students.",
                  name: "Ryan Corcoran",
                  class: "Class of 2025",
                },
              ].map((review, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-gray-600 italic mb-4">{review.quote}</p>
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.class}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
