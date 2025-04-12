// src/components/About.jsx
import { FaCheckCircle } from "react-icons/fa";

import AbtImg from "../assets/img/about.jpg";
import AbtImg2 from "../assets/img/about-2.jpg";
export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-gray-100 m-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Image */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src={AbtImg}
              alt="About Conclave"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right List */}
          <div className="space-y-4">
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                Strengthening Industry-Academia Collaboration.
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                Insights on current HR trends, leadership strategies, and talent acquisition.
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                Enhancing employability skills and preparing students for industry challenges.
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                Creating pathways for potential recruitment and internship opportunities.
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                Updating courses to align with real-world industry demands.
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 mt-1" />
                Brand Building & Recognition of our college as a hub for HR innovation and leadership.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row with Text and Video */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center ">
          <p className="text-lg text-gray-700 leading-relaxed">
            The conclave aims to bring together HR leaders, Industry Professionals, Academicians, and our College Students to engage in insightful discussions on emerging trends in talent management, workforce transformation, and industry expectations. The event will serve as a platform to bridge the gap between industry and academia, fostering meaningful collaborations. The expected outcomes of this HR Conclave:
          </p>

          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <img
              src={AbtImg2}
              alt="About 2"
              className="w-full h-full object-cover"
            />
            <a
              href="https://www.youtube.com/watch?v=0pVuObzsIzM"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8.186 6.518 10.69A.5.5 0 0 1 6 10.276V5.724a.5.5 0 0 1 .518-.414l4.286 2.504a.5.5 0 0 1 0 .872z" />
                  <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
