import React, { useEffect } from 'react';
import Navbar, { Footer } from './Layout';
import { motion } from 'framer-motion';

const ApplicationForm = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen transition-colors duration-300 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20">
                <section className="py-12 md:py-24 relative overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/5 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                    <div className="container max-w-5xl mx-auto relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-6">
                                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
                                Applications Open
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                                Join the Research Group
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                                We are looking for passionate students and researchers to join our team. Fill out the form below to apply.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white dark:bg-[#111115] rounded-3xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
                        >
                            {/* Custom Header to replace broken Google Image */}
                            <div className="w-full bg-slate-50 border-b border-gray-100 dark:bg-slate-900 dark:border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="text-left">
                                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                                        Engineering <br />
                                        <span className="text-blue-600 dark:text-blue-500">Intelligence</span> at Scale
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
                                        The Intelligence & Emerging Systems Research Group bridges academic research with real-world deployment.
                                    </p>
                                </div>
                                <div className="hidden md:block">
                                    <img src={import.meta.env.BASE_URL + "logo.png"} alt="IESRG" className="h-24 w-auto opacity-90" />
                                </div>
                            </div>

                            <div className="relative w-full h-[1800px] overflow-hidden">
                                <iframe
                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfPtceghFCZ_gubLBqIZQ6Rz_jyW4B36aQJOsTT1ggHbur9Ag/viewform?embedded=true"
                                    width="100%"
                                    height="1800"
                                    frameBorder="0"
                                    marginHeight="0"
                                    marginWidth="0"
                                    className="w-full absolute top-0 left-0"
                                    title="IESRG Application Form"
                                >
                                    Loading…
                                </iframe>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ApplicationForm;
