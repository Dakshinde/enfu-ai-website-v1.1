import React, { useState, useEffect } from 'react';
import {
    MessageSquare,
    Bot,
    Phone,
    ArrowRight,
    Menu,
    ChevronRight,
    Target,
    Zap,
    X,
    Sparkles,
    Clock,
    CheckCircle,
    Users,
    BarChart3,
} from 'lucide-react';

// Import Components
import Button from './components/ui/Button';
import Card from './components/ui/Card';
import StatisticCard from './components/StatisticCard';
import ServiceCard from './components/ServiceCard';
import ProcessStep from './components/ProcessStep';
import ImageWithFallback from './components/ui/ImageWithFallback';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Enhanced Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-vibrant-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-dark-navy group-hover:text-vibrant-blue transition-colors">
                EnFu AI
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['problem', 'solutions', 'process', 'cta'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-muted-foreground hover:text-vibrant-blue transition-colors duration-300 font-medium capitalize"
                >
                  {item === 'problem' ? 'Problem & Data' : 
                   item === 'solutions' ? 'Solutions' :
                   item === 'process' ? 'Our Process' : 'Get Started'}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('cta')}
                className="bg-vibrant-blue hover:bg-vibrant-blue/90 text-white shadow-lg"
              >
                Request Consultation
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-dark-navy" />
              ) : (
                <Menu className="w-6 h-6 text-dark-navy" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md border-t border-gray-100 p-6 shadow-xl animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {['problem', 'solutions', 'process', 'cta'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-gray-700 hover:text-vibrant-blue p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-medium capitalize"
                >
                  {item === 'problem' ? 'Problem & Data' : 
                   item === 'solutions' ? 'Solutions' :
                   item === 'process' ? 'Our Process' : 'Get Started'}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('cta')}
                className="w-full bg-vibrant-blue hover:bg-vibrant-blue/90 text-white mt-4"
              >
                Request Consultation
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Enhanced Hero Section */}
        <section className="pt-32 pb-32 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-vibrant-blue/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-bright-green/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl tracking-tight text-dark-navy leading-tight font-extrabold">
                    Systematically
                    <br />
                    <span className="text-vibrant-blue bg-gradient-to-r from-vibrant-blue to-bright-green bg-clip-text text-transparent">
                      Eradicating
                    </span>
                    <br />
                    Routine Work
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    Transform your business operations with custom AI workflow automation
                    that eliminates repetitive tasks and amplifies human potential.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={() => scrollToSection('cta')}
                    className="bg-vibrant-blue hover:bg-vibrant-blue/90 text-white shadow-xl"
                  >
                    Start Your Automation Journey
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection('solutions')}
                    className="border-dark-navy text-dark-navy hover:bg-dark-navy hover:text-white"
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-slide-in-right">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNIYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2V%20hdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkyNDczMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern office automation technology"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Problem & Data Section */}
        <section id="problem" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-6">
                  <h2 className="text-4xl text-dark-navy leading-tight font-bold">
                    The Hidden Cost of
                    <span className="text-vibrant-blue"> Manual Processes</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Enterprise teams waste countless hours on repetitive tasks that could be
                    automated. From data entry to customer communications, these manual processes create
                    bottlenecks, introduce errors, and prevent your team from focusing on strategic initiatives.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our AI workflow automation solutions identify these inefficiencies and transform
                    them into streamlined, intelligent processes that work around the clock.
                  </p>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <Users className="w-8 h-8 text-vibrant-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dark-navy">500+</div>
                    <div className="text-sm text-muted-foreground">Clients Served</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-8 h-8 text-bright-green mx-auto mb-2" />
                    <div className="text-2xl font-bold text-dark-navy">94%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
              <div className="grid gap-8">
                <StatisticCard
                  title="Time Wasted Weekly"
                  value="21 Hours"
                  description="Average time employees spend on repetitive tasks that could be automated"
                  color="blue"
                  animationDelay={200}
                />
                <StatisticCard
                  title="Error Reduction"
                  value="94%"
                  description="Decrease in processing errors after implementing AI automation"
                  color="green"
                  animationDelay={400}
                />
                <StatisticCard
                  title="ROI Increase"
                  value="3.5x"
                  description="Average return on investment within the first 6 months"
                  color="navy"
                  animationDelay={600}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Solutions Section */}
        <section id="solutions" className="py-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16 animate-fade-in-up">
              <h2 className="text-4xl text-dark-navy font-bold">
                Three Core Solutions for
                <span className="text-vibrant-blue"> Maximum Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our specialized AI automation services are designed to tackle your most
                time-consuming business processes with precision and reliability.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="Intelligent Chatbots"
                description="Deploy sophisticated conversational AI that handles customer inquiries, lead qualification, and support tickets 24/7."
                features={[
                  "Natural language processing",
                  "Multi-channel integration",
                  "Seamless human handoff",
                  "Analytics & insights"
                ]}
                icon={<MessageSquare className="w-10 h-10 text-vibrant-blue" />}
                animationDelay={200}
              />
              <ServiceCard
                title="AI Agents & Process Automation"
                description="Custom AI agents that execute complex workflows, manage data processing, and handle administrative tasks autonomously."
                features={[
                  "Workflow orchestration",
                  "Data processing & analysis",
                  "Document management",
                  "Integration capabilities"
                ]}
                icon={<Bot className="w-10 h-10 text-vibrant-blue" />}
                animationDelay={400}
              />
              <ServiceCard
                title="AI Calling Agents"
                description="Voice-enabled AI that conducts outbound calls, schedules appointments, and manages phone-based customer interactions."
                features={[
                  "Natural voice synthesis",
                  "Appointment scheduling",
                  "Lead qualification",
                  "Call analytics"
                ]}
                icon={<Phone className="w-10 h-10 text-vibrant-blue" />}
                animationDelay={600}
              />
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16 animate-fade-in-up">
              <h2 className="text-4xl text-dark-navy font-bold">
                Our Proven
                <span className="text-vibrant-blue"> 4-Step Deployment Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From initial consultation to full deployment, we ensure a smooth transition
                to automated workflows that deliver immediate value.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <ProcessStep
                number={1}
                title="Discover"
                description="Analyze current workflows and identify automation opportunities"
                animationDelay={200}
              />
              <ProcessStep
                number={2}
                title="Design"
                description="Create custom AI solutions tailored to your specific needs"
                animationDelay={400}
              />
              <ProcessStep
                number={3}
                title="Deploy"
                description="Implement and integrate solutions with minimal disruption"
                animationDelay={600}
              />
              <ProcessStep
                number={4}
                title="Optimize"
                description="Monitor performance and continuously improve automation"
                animationDelay={800}
              />
            </div>
          </div>
        </section>

        {/* Enhanced Product Case Study Block */}
        <section className="py-16 bg-dark-navy">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Card className="p-12 bg-white border-0 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-bright-green/10 rounded-xl flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-bright-green" />
                </div>
                <h3 className="text-2xl text-dark-navy font-bold">
                  Featured Success Story: Influencer Automation Platform
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover how we built a comprehensive AI-powered platform that automated
                  influencer outreach, content scheduling, and performance tracking for a
                  leading marketing agency, resulting in 300% productivity increase.
                </p>
                <Button
                  className="bg-vibrant-blue hover:bg-vibrant-blue/90 text-white"
                  size="lg"
                >
                  View Full Case Study
                  <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Enhanced Final CTA Section */}
        <section id="cta" className="py-24 bg-gradient-to-r from-vibrant-blue to-vibrant-blue/80 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative">
            <div className="space-y-8 animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl text-white leading-tight font-extrabold text-shadow">
                Ready to Transform Your
                <br />
                Business Operations?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Join forward-thinking enterprises who have eliminated routine work
                and unlocked unprecedented productivity with our AI automation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-vibrant-blue hover:bg-gray-50 shadow-xl"
                >
                  Schedule Your Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-vibrant-blue"
                >
                  Download ROI Calculator
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="pt-8 border-t border-blue-300/30">
                <p className="text-blue-200 text-sm mb-4">Trusted by industry leaders</p>
                <div className="flex justify-center items-center space-x-8 opacity-80">
                  <div className="text-white font-semibold">TechCorp</div>
                  <div className="text-white font-semibold">GlobalBank</div>
                  <div className="text-white font-semibold">HealthPlus</div>
                  <div className="text-white font-semibold">RetailPro</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-dark-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-gray-700 pb-8">
            {/* Logo and Tagline */}
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-vibrant-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl text-white font-bold">EnFu AI</span>
              </a>
              <p className="text-gray-400 leading-relaxed text-sm">
                Systematically eradicating routine work through intelligent automation.
              </p>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['Intelligent Chatbots', 'AI Agents', 'AI Calling', 'Custom Automation'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['About Us', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 EnFu AI. All rights reserved. Building the future of work, today.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}