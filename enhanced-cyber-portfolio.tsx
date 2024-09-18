import React, { useState, useEffect } from 'react';
import { Shield, Code, Book, Award, Mail, Phone, Globe, MapPin, FileText, Linkedin, Terminal, Lock, UserCheck, AlertTriangle, Activity } from 'lucide-react';

const PortfolioLanding = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSecurityTip, setShowSecurityTip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setShowSecurityTip(true);
      setTimeout(() => setShowSecurityTip(false), 5000);
    }, 30000);
    return () => clearInterval(tipInterval);
  }, []);

  const TabButton = ({ id, icon, text }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center px-4 py-2 rounded-full transition-all ${
        activeTab === id 
          ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow'
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </button>
  );

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-100">{skill}</span>
        <span className="text-sm font-medium text-blue-100">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );

  const ProjectCard = ({ title, description, tags }) => (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-600 text-xs font-semibold px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </div>
  );

  const SecurityMetric = ({ icon, title, value }) => (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center">
      {icon}
      <div className="ml-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-2xl font-bold text-blue-400">{value}</p>
      </div>
    </div>
  );

  const securityTips = [
    "Always use strong, unique passwords for each account.",
    "Enable two-factor authentication whenever possible.",
    "Keep your software and operating systems up to date.",
    "Be cautious of phishing emails and suspicious links.",
    "Regularly back up your important data.",
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen text-white font-sans">
      {/* Header */}
      <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-90 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Jacob Macdonnell</h1>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><FileText /></a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <section className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-8 mb-12 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Securing the Digital Frontier</h2>
            <p className="text-xl mb-6 leading-relaxed">
              Cybersecurity analyst dedicated to protecting digital assets and mitigating risks.
              Bridging GRC and technical cybersecurity for comprehensive security solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <TabButton id="about" icon={<Shield size={20} />} text="About" />
              <TabButton id="skills" icon={<Code size={20} />} text="Skills" />
              <TabButton id="projects" icon={<Terminal size={20} />} text="Projects" />
              <TabButton id="education" icon={<Book size={20} />} text="Education" />
              <TabButton id="contact" icon={<Mail size={20} />} text="Contact" />
            </div>
          </section>

          {/* Content Section */}
          <section className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl p-8 mb-12">
            {/* Tab Content */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">About Me</h3>
                <p className="text-lg leading-relaxed">
                  As a dedicated cybersecurity analyst, I'm committed to safeguarding digital infrastructures and empowering organizations to navigate the complex landscape of cyber threats. With expertise in both Governance, Risk, and Compliance (GRC) and technical cybersecurity, I bring a holistic approach to identifying vulnerabilities and implementing robust security measures.
                </p>
                <p className="text-lg leading-relaxed">
                  My passion for cybersecurity is fueled by the dynamic nature of digital threats and the critical importance of protecting sensitive information in our interconnected world. I continuously expand my knowledge and skills to stay ahead of emerging threats and contribute meaningfully to the evolving field of cybersecurity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  <SecurityMetric icon={<Lock size={24} className="text-blue-400" />} title="Vulnerabilities Patched" value="500+" />
                  <SecurityMetric icon={<UserCheck size={24} className="text-blue-400" />} title="Security Awareness Trainings" value="50+" />
                  <SecurityMetric icon={<AlertTriangle size={24} className="text-blue-400" />} title="Incidents Resolved" value="100+" />
                  <SecurityMetric icon={<Activity size={24} className="text-blue-400" />} title="Security Audits Completed" value="25+" />
                </div>
              </div>
            )}
            {/* Other tab contents... */}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 text-center p-4">
        <p>&copy; 2024 Jacob Macdonnell. All rights reserved.</p>
      </footer>

      {/* Security Tip Popup */}
      {showSecurityTip && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-sm">
          <h4 className="font-bold mb-2">Security Tip:</h4>
          <p>{securityTips[Math.floor(Math.random() * securityTips.length)]}</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioLanding;
