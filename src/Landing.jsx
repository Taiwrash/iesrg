import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar, { Footer } from './Layout';
import {
    Brain,
    Server,
    Code2,
    Cpu,
    BarChart3,
    Users,
    Rocket,
    ArrowRight
} from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
            {/* Background */}
            <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                        Let's make AGI happen
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6 text-gray-900 dark:text-white">
                        Engineering <br />
                        <span className="text-blue-600 dark:text-blue-500">
                            Intelligence
                        </span> <br />
                        at Scale
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                        The Intelligence & Emerging Systems Research Group bridges academic research with real-world deployment.
                        We build scalable, production-ready intelligent systems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/apply"
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:gap-3"
                        >
                            Get Involved <ArrowRight size={18} />
                        </Link>
                        <a
                            href="#research"
                            className="px-8 py-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold text-center transition-colors"
                        >
                            Our Research
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-white dark:bg-gray-900 p-1 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10">
                        <div className="aspect-square rounded-xl bg-gray-100 dark:bg-black/50 overflow-hidden relative group">
                            <img
                                src={import.meta.env.BASE_URL + "logo.png"}
                                alt="IESRG High Res"
                                className="w-full h-full object-contain p-12 opacity-90 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* Floating generic tech badges */}
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-blue-500/30 p-4 rounded-xl shadow-xl"
                    >
                        <Cpu className="text-blue-600 dark:text-blue-400 mb-1" size={24} />
                        <div className="text-xs text-gray-500 dark:text-gray-400">Systems</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Distributed</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-blue-500/30 p-4 rounded-xl shadow-xl"
                    >
                        <Brain className="text-blue-600 dark:text-blue-400 mb-1" size={24} />
                        <div className="text-xs text-gray-500 dark:text-gray-400">Intelligence</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Applied AI</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const SectionHeading = ({ children, subtitle }) => (
    <div className="mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">{children}</h2>
        {subtitle && <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">{subtitle}</p>}
        <div className="mt-6 w-24 h-1 bg-blue-600 rounded-full" />
    </div>
);

const ResearchPillars = () => {
    const pillars = [
        {
            title: "Intelligent Systems",
            icon: <Brain className="text-blue-400" size={32} />,
            items: ["Machine Learning & Applied AI", "LLMs & AI Agents", "Computer Vision", "Decision Systems"]
        },
        {
            title: "Emerging Software Systems",
            icon: <Code2 className="text-blue-400" size={32} />,
            items: ["Cloud-native Architectures", "Microservices & Distributed Systems", "Event-driven Systems", "Edge Computing"]
        },
        {
            title: "Infrastructure & DevOps",
            icon: <Server className="text-blue-400" size={32} />,
            items: ["CI/CD Automation", "K8s & Container Orchestration", "Platform Engineering", "Infrastructure as Code"]
        },
        {
            title: "Performance & Observability",
            icon: <BarChart3 className="text-blue-400" size={32} />,
            items: ["Systems Profiling", "AI Inference Optimization", "Distributed Tracing", "Performance Benchmarking"]
        }
    ];

    return (
        <section id="research" className="py-24 relative bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="container">
                <SectionHeading subtitle="Our core research pillars focus on the intersection of AI and scalable infrastructure.">
                    Research Frontiers
                </SectionHeading>

                <div className="grid md:grid-cols-2 gap-6">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] hover:border-blue-500/30 dark:hover:bg-white/[0.05] shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {pillar.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{pillar.title}</h3>
                            <ul className="space-y-3">
                                {pillar.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-white/20" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const About = () => (
    <section id="about" className="py-24 bg-white dark:bg-[#050507] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
            <div>
                <SectionHeading subtitle="Bridging the gap between academia and industry.">
                    Our Vision & Mission
                </SectionHeading>
                <div className="prose prose-lg text-gray-600 dark:text-gray-400">
                    <p className="mb-6">
                        <strong className="text-gray-900 dark:text-white">IESRG is not a club.</strong> It is a research-driven engineering collective focused on building intelligent systems that scale.
                    </p>
                    <p className="mb-6">
                        We aim to become a leading research group in intelligent and emerging systems, producing high-impact research, scalable software platforms, and industry-ready engineers.
                    </p>
                    <p>
                        Our mission is to research, design, and deploy next-generation software systems through interdisciplinary collaboration and applied innovation.
                    </p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
                <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl text-center shadow-lg dark:shadow-none">
                        <div className="text-4xl font-bold text-blue-600 dark:text-white mb-2">3+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Research Pillars</div>
                    </div>
                    <div className="p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl text-center mt-8 shadow-lg dark:shadow-none">
                        <div className="text-4xl font-bold text-blue-600 dark:text-white mb-2">15+</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Active Members</div>
                    </div>
                    <div className="p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl text-center shadow-lg dark:shadow-none">
                        <div className="text-4xl font-bold text-blue-600 dark:text-white mb-2">2</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Open Source Projects</div>
                    </div>
                    <div className="p-6 bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl text-center mt-8 shadow-lg dark:shadow-none">
                        <div className="text-4xl font-bold text-blue-600 dark:text-white mb-2">1</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Common Goal</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const AudienceCard = ({ title, icon, description, list }) => (
    <div className="p-8 rounded-2xl bg-white dark:bg-[#0F0F12] border border-gray-200 dark:border-white/5 hover:border-blue-500/30 transition-colors shadow-sm hover:shadow-md dark:shadow-none">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed min-h-[60px]">
            {description}
        </p>
        <ul className="space-y-2">
            {list.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <ArrowRight size={14} className="text-blue-500" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

// Helper for icon
const BriefcaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
)

const TargetAudience = () => (
    <section id="audience" className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300">
        <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">Who Should Join?</h2>
                <p className="text-gray-600 dark:text-gray-400">
                    We bring together passionate individuals from various disciplines to solve complex problems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AudienceCard
                    title="Students"
                    icon={<Rocket size={24} />}
                    description="Undergraduate and postgraduate students in SWE, CS, or IT who want to build research-grade systems."
                    list={["Gain research experience", "Mentorship", "Build portfolio"]}
                />
                <AudienceCard
                    title="Researchers"
                    icon={<Users size={24} />}
                    description="Academic researchers and faculty advisors looking to collaborate on high-impact projects."
                    list={["Publish papers", "Co-supervise projects", "Interdisciplinary work"]}
                />
                <AudienceCard
                    title="Industry Experts"
                    icon={<BriefcaseIcon />}
                    description="Engineers and architects who want to mentor talent and solve real-world infrastructure challenges."
                    list={["Mentor talent", "Sponsor initiatives", "Co-develop platforms"]}
                />
            </div>
        </div>
    </section>
);

const JoinCTA = () => (
    <section id="join" className="py-24 relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
        <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 pointer-events-none" />
        <div className="container relative z-10">
            <div className="max-w-4xl mx-auto bg-white dark:bg-[#111115] border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl dark:shadow-none">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Ready to Engineer the Future?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    We are accepting applications for our next cohort. Submit your statement of interest and portfolio today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/apply"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-bold hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                    >
                        Apply Now
                    </Link>
                    <a
                        href="mailto:contact@iesrg.org"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Landing = () => {
    // Scroll to top on mount
    useEffect(() => {
        // Only scroll to top if not navigating to a hash
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
            <Navbar />
            <main>
                <Hero />
                <About />
                <ResearchPillars />
                <TargetAudience />
                <JoinCTA />
            </main>
            <Footer />
        </div>
    );
};

export default Landing;
