"use client"
import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";
import { Mail, Menu, X, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animation";

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg 
    fill="#ffffff" 
    height={size} 
    width={size}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 45.959 45.959" 
    stroke="#ffffff">
      <path d="M5.392,0.492C2.268,0.492,0,2.647,0,5.614c0,2.966,2.223,5.119,5.284,5.119c1.588,0,2.956-0.515,3.957-1.489 c0.96-0.935,1.489-2.224,1.488-3.653C10.659,2.589,8.464,0.492,5.392,0.492z M7.847,7.811C7.227,8.414,6.34,8.733,5.284,8.733 C3.351,8.733,2,7.451,2,5.614c0-1.867,1.363-3.122,3.392-3.122c1.983,0,3.293,1.235,3.338,3.123 C8.729,6.477,8.416,7.256,7.847,7.811z"></path> 
      <path d="M0.959,45.467h8.988V12.422H0.959V45.467z M2.959,14.422h4.988v29.044H2.959V14.422z"></path>
      <path d="M33.648,12.422c-4.168,0-6.72,1.439-8.198,2.792l-0.281-2.792H15v33.044h9.959V28.099c0-0.748,0.303-2.301,0.493-2.711 c1.203-2.591,2.826-2.591,5.284-2.591c2.831,0,5.223,2.655,5.223,5.797v16.874h10v-18.67 C45.959,16.92,39.577,12.422,33.648,12.422z M43.959,43.467h-6V28.593c0-4.227-3.308-7.797-7.223-7.797 c-2.512,0-5.358,0-7.099,3.75c-0.359,0.775-0.679,2.632-0.679,3.553v15.368H17V14.422h6.36l0.408,4.044h1.639l0.293-0.473 c0.667-1.074,2.776-3.572,7.948-3.572c4.966,0,10.311,3.872,10.311,12.374V43.467z"></path> 
    </svg>
);

const hardSkills = [
  'Continuous Integration and Continuous Delivery (CI/CD)',
  'Data Wrangling',
  'Python',
  'Web Development',
  'Administrasi',
  'Spec-Driven Development',
  'Control Flow',
  'Tailwind CSS',
  'PostgreSQL',
  'TypeScript',
  'SQL',
  'NoSQL',
  'PHP',
  'React Native',
  'User Interface (UI) Design',
  'User Experience (UX) Design',
  'Web Scraping',
  'Data Visualization',
  'Web Design',
  'Android Development',
  'Node.js',
  'Layout Design',
  'Data Analysis',
  'MySQL',
  'HTML',
  'JavaScript',
  'Next.js',
  'React.js',
  'Flutter',
  'Fastify',
  'Git',
  'Firebase',
  'Cloudflare',
  'Vercel',
  'AI Data Analysis',
  'AI-Powered Web Development',
]

const softWare = [
  'Microsoft Power Point',
  'Microsoft Word',
  'Microsoft Excel',
  'Microsoft Teams',
  'Zoom',
  'Microsoft Office',
  'Github',
  'Visual Studio Code',
  'Windsurf Editor',
  'Canva',
  'Postman',
  'Notion',
  'Figma',
  'Langflow',
  'Discord',
  'Google Sheets',
  'Google Docs',
  'Google Workspace'
]

const contactInfo = [
  {
    name: "Email",
    email: "mailto:raffifabiansyah@gmail",
    icon: <Mail size={32} className="text-white" />,
    username: "raffifabiansyah@gmail.com"
  },
  {
    name: "Github",
    url: "https://github.com/Raffi14",
    icon: <GithubIcon size={32} className="text-white" />,
    username: "Raffi14"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/raffi-fabiansyah",
    icon: <InIcon size={32} className="text-white" />,
    username: "raffi-fabiansyah"
  }
]


const item: { 
  name: string;
  description: string;
  urlGithub: string;
  urlLive: string;
  image: string;
  category: string;
  tags: string[];
}[] = [
  {
    name: "mentalytics AI",
    description: "Mentalytics AI is an AI-powered platform that analyzes adolescent mental health and social media usage data through an interactive chat interface.",
    urlGithub: "https://github.com/Raffi14/Mentalytics-AI-Workflow.git",
    urlLive: "https://mentalytics-ai-workflow.vercel.app/",
    image: "/Mentalytics.png",
    category: "AI-Powered Web App",
    tags: ["Next.js", "Langflow", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "careerLens",
    description: "A web application that intelligently matches your CV with relevant job vacancies using cutting-edge AI technology.",
    urlGithub: "https://github.com/Raffi14/careerLens",
    urlLive: "https://career-lens-one.vercel.app/",
    image: "/career_lens.png",
    category: "AI-Powered Web App",
    tags: ["Next.js", "Tailwind CSS", "Grok API", "TypeScript", "gpt-oss-20b", "next-safe-action", "zod"],
  },
  {
    name: "ATS",
    description: "A work-in-progress attendance system featuring a React Native mobile app and a Next.js admin dashboard for attendance management.",
    urlGithub: "https://github.com/Raffi14/ats-admin",
    urlLive: "",
    image: "/ATS-Admin.png",
    category: "Full-Stack App",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Cloudflare", "drizzle", "zod", "next-safe-action", "React Native", "Expo"],
  },
  {
    name: "SwiftPOS",
    description: "A full-stack Point of Sale (POS) system built using Next.js, handling both frontend and backend development.",
    urlGithub: "https://github.com/Raffi14/POS-System",
    urlLive: "",
    image: "/POS.png",
    category: "Full-Stack App",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL", "drizzle", "zod"],
  },
  {
    name: "aeroLearn",
    description: "End-to-end Learning Management System (LMS) with Flutter mobile app and Fastify backend.",
    urlGithub: "https://github.com/Megane-Team/aerolearn_app",
    urlLive: "",
    image: "/E-Learning.png",
    category: "Full-Stack App",
    tags: ["Flutter", "Fastify", "PostgreSQL", "TypeScript", "drizzle", "zod", "Firebase"],
  },
]

const certificate = (() => {
  const certFiles = [
    "AI Agent.png",
    "AI Ethics.png",
    "AI Literacy.png",
    "Classfying.png",
    "Dasar Data Science.png",
    "Data Concepts.png",
    "Exploring.png",
    "Financial Literacy.png",
    "Gen AI.png",
    "Getting_Started.png",
    "Interacting.png",
    "Kiro.png",
    "Python.png",
    "SERTIFIKAT SOFTWARE ENGINEER.jpg",
    "SQL.png",
  ];
  
  return certFiles.map((file) => ({
    name: file.replace(/\.(png|jpg|jpeg)$/, "").replace(/[-_]/g, " "),
    image: `/cert/${file}`,
  }));
})();

export default function App() {
  const [selectedCert, setSelectedCert] = useState<{ name: string; image: string } | null>(null);
  
  useEffect(() => {
  if (selectedCert) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return () => {
    document.body.style.overflow = "";
  };
}, [selectedCert]);
  return (
    <div className="min-h-screen bg-white no-scrollbar overflow-hidden">
      <Navbar />
      <section id="Home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="bg-[url('/Background-image.jpeg')] w-full h-full bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-b from-sky-900/50 to-sky-900/70"></div>
        </div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <Parallax speed={-10}>
            <h1 className="text-3xl font-bold md:text-5xl md:mb-4">Hi, Raffi is here!</h1>
            <p className="text-lg md:text-3xl text-sky-100">Full-Stack Developer & Data Analyst</p>
          </Parallax>
        </div>
      </section>
      <section id="About" className="min-h-screen py-20 px-4 bg-linear-to-b from-white to-sky-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={fadeIn("up")} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }} className="text-2xl md:text-4xl text-center mb-6 md:mb-12 text-gray-700 font-semibold">About Me</motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn("left")} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
              <div className="relative rounded-2xl w-full h-72 md:h-116 overflow-hidden shadow-xl">
                <Image src="/About-me.jpeg" alt="Profile Image" fill className="object-cover"/>
              </div>
            </motion.div>
            <motion.div variants={fadeIn("right")} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
              <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify">
                <p>
                  Im a passionate developer and designer who loves creating beautiful, 
                  functional web experiences. Just like the calm and creativity of the ocean, 
                  I bring tranquility and innovation to every project.
                </p>
                <p>
                  With a background in full-stack development and UI/UX design, I specialize 
                  in turning complex problems into simple, elegant solutions. When Im not 
                  coding, youll find me at the beach, drawing inspiration from nature.
                </p>
                <p>
                  I believe in clean code, thoughtful design, and the power of collaboration to create something truly special. For me, good development is not just about solving problems, but also about creating meaningful and enjoyable user experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="Portfolio"
        className="min-h-screen py-20 px-4 bg-linear-to-b from-sky-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-2xl md:text-4xl text-center mb-16 text-gray-800 font-semibold"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn("up")}
          >
            Portfolio
          </motion.h2>

          <div className="relative">
            <div
              className="
                absolute top-0 bottom-0 w-0.5
                bg-linear-to-b from-transparent via-blue-400 to-transparent
                left-1/2 -translate-x-1/2
                sm:left-1/2 sm:-translate-x-1/2
                max-sm:left-2 max-sm:translate-x-0
              "
            />

            <div className="flex flex-col gap-16">
              {item.map((item, index) => {
                const isOdd = index % 2 === 0;
                return (
                  <motion.div
                    key={item.name}
                    className={`
                      relative flex items-center
                      ${isOdd ? "flex-row" : "flex-row-reverse"}
                      max-sm:flex-col max-sm:pl-8
                    `}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={isOdd ? fadeIn("left") : fadeIn("right")}
                  >
                    <div
                      className="
                        w-[calc(50%-48px)] max-sm:w-full
                        rounded-2xl overflow-hidden bg-white
                        shadow-md hover:shadow-xl
                        transition-all duration-300 hover:-translate-y-1.5
                      "
                    >
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <span
                          className="
                            inline-block text-[10px] font-semibold tracking-widest uppercase
                            text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-2
                          "
                        >
                          {item.category}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="
                                text-[11px] font-medium px-2.5 py-1 rounded-md
                                bg-slate-100 text-slate-600 border border-slate-200
                                hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200
                                transition-colors cursor-default
                              "
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2">                         
                          <a
                            href={item.urlGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                              flex items-center gap-1.5 px-3.5 py-2 rounded-xl
                              text-xs font-medium bg-slate-900 text-white
                              hover:bg-slate-700 transition-colors
                            "
                          >
                            <GithubIcon size={13} />
                            GitHub
                          </a>
                          <a
                            href={item.urlLive}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition-color"
                          >
                            <ExternalLink size={12} />
                            Live
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`
                        absolute top-1/2 -translate-y-1/2 h-0.5
                        bg-linear-to-r from-blue-200 to-blue-100
                        w-[calc(50%-57px)] max-sm:hidden
                        ${isOdd ? "left-[calc(50%-48px)]" : "right-[calc(50%-48px)]"}
                      `}
                    />
                    <div
                      className="
                        absolute z-10
                        w-4 h-4 rounded-full bg-white border-2 border-blue-400
                        shadow-[0_0_0_5px_rgba(59,130,246,0.12)]
                        transition-all duration-300
                        left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
                        max-sm:left-0 max-sm:translate-x-0 max-sm:top-6 max-sm:translate-y-0
                      "
                    />
                    <div className="w-[calc(50%-48px)] max-sm:hidden" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section id="Skills" className="min-h-screen py-20 px-4 bg-linear-to-b from-white to-sky-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn("up")}
            className="text-2xl md:text-4xl text-center mb-6 md:mb-12 text-gray-700 font-semibold"
          >
            Skills
          </motion.h2>
          <div className="space-y-8">
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn("right")}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h3 className="text-gray-800 mb-6 text-xl font-semibold">Hard Skills</h3>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeIn("up")}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn("left")}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h3 className="text-gray-800 mb-6 text-xl font-semibold">Software & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {softWare.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeIn("up")}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        id="Certificates"
        className="min-h-screen py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, #f0f4ff 0%, #fafafa 50%, #f0f9ff 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeIn("up")}
            className="text-2xl md:text-4xl text-center mb-24 text-gray-800 font-semibold"
          >
            Certificates
          </motion.h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {certificate.map((cert, index) => (
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeIn("up")}
                key={index}
                onClick={() => setSelectedCert(cert)}
                className="break-inside-avoid mb-5 group rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow:
                    "0 2px 8px rgba(99,102,241,0.08), 0 0 0 1px rgba(99,102,241,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={600}
                  height={400}
                  className="w-full h-auto block"
                  style={{
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "";
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedCert.image}
              alt={selectedCert.name}
              width={1200}
              height={800}
              className="object-contain"
              unoptimized
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                borderRadius: "12px",
                display: "block",
              }}
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full transition-colors"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.3)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.15)")
            }
            onClick={() => setSelectedCert(null)}
          >
            <X size={24} />
          </button>
        </div>
      )}
      <section id="Contact" className="min-h-screen py-20 px-4 bg-linear-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn("up")}
              className="text-2xl md:text-4xl text-center mb-6 md:mb-12 text-gray-700 font-semibold"
            >
              Contact
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn("up")}
              className="text-gray-600 text-sm md:text-lg mb-8"
            >
              Feel free to reach out to me for any inquiries, collaborations, or just to say hi!
            </motion.p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {
                contactInfo.map((contact, index) => (
                <motion.a 
                  key={index} 
                  href={contact.url} 
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeIn("up")}
                >
                  <div className="w-16 h-16 bg-linear-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mb-4">
                    {contact.icon}
                  </div>
                    <h3 className="text-gray-800 mb-2">{contact.name}</h3>
                    <p className="text-sky-600">{contact.username}</p>
                </motion.a>
                ))
              }
            </div>
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeIn("up")}
              className="relative rounded-2xl overflow-hidden shadow-xl h-64"
            >
              <Image src="/Background-image.jpeg" alt="Contact Image" fill className="object-cover"/>
              <div className="absolute inset-0 bg-linear-to-t from-sky-900/80 to-transparent flex items-center justify-center">
                <p className="text-white text-xl">Let&apos;s create something amazing together</p>
            </div>
            </motion.div>
        </div>
      </section>
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm md:text-base">© 2026 by Muhammad Raffi Fabiansyah. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Inspired by the ocean, built with passion</p>
        </div>
      </footer>
    </div>
  );
}