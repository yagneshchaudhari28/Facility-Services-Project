import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield,
  Users,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Award,
  Clock,
  Target,
  Eye,
  Briefcase,
  UserCheck,
  Building,
  Headphones,
  TrendingUp,
  Zap,
  Globe,
} from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [counters, setCounters] = useState({
    clients: 0,
    experience: 0,
    projects: 0,
  });

  // Animated counters effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          clients: Math.min(prev.clients + 15, 500),
          experience: Math.min(prev.experience + 1, 10),
          projects: Math.min(prev.projects + 8, 150),
        }));
      }, 30);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Section with Background Image */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gallary-img-1.jpeg"
            alt="Professional Security Guard"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-primary/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/50 to-transparent"></div>
        </div>

        <div className="container relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white border-0 hover-lift">
                  <Shield className="w-4 h-4 mr-2" />
                  Professional Security Services
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                  Reliable{" "}
                  <span className="gradient-text bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
                    Security
                  </span>{" "}
                  &
                  <span className="gradient-text bg-gradient-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent">
                    {" "}
                    Facility
                  </span>{" "}
                  Services
                </h1>
                <p className="text-xl text-gray-200 max-w-lg leading-relaxed">
                  We provide contractual manpower supply services to industries
                  with specialized security guards and facility management
                  solutions across Maharashtra.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-brand-secondary to-brand-accent hover:from-brand-secondary hover:to-brand-accent text-white shadow-2xl hover-lift transform hover:scale-105 transition-all duration-300"
                >
                  <Shield className="mr-2 w-5 h-5" />
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <a href="tel:9890273333">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-black text-yellow hover:bg-yellow hover:text-brand-navy shadow-xl hover-lift backdrop-blur-sm"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call: 9890273333
                  </Button>
                </a>
              </div>

              {/* Animated Statistics */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center animate-scale-in">
                  <div className="text-4xl font-bold text-brand-secondary mb-1">
                    {counters.clients}+
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    Satisfied Clients
                  </div>
                </div>
                <div
                  className="text-center animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="text-4xl font-bold text-brand-accent mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    Security Coverage
                  </div>
                </div>
                <div
                  className="text-center animate-scale-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-4xl font-bold text-white mb-1">
                    {counters.experience}+
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Service Cards */}
            <div className="relative animate-slide-up">
              <div className="relative z-10 glass-effect rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="glass-effect rounded-2xl p-6 hover-lift group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      Security Services
                    </h3>
                    <p className="text-sm text-gray-300">
                      Professional security guards with specialized training
                    </p>
                  </div>

                  <div className="glass-effect rounded-2xl p-6 hover-lift group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      Facility Management
                    </h3>
                    <p className="text-sm text-gray-300">
                      Complete housekeeping and maintenance solutions
                    </p>
                  </div>

                  <div className="glass-effect rounded-2xl p-6 hover-lift group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <UserCheck className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">
                      Trained Personnel
                    </h3>
                    <p className="text-sm text-gray-300">
                      Certified and experienced staff for all services
                    </p>
                  </div>

                  <div className="glass-effect rounded-2xl p-6 hover-lift group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Headphones className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-300">
                      Round-the-clock assistance and monitoring
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Animation Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-brand-secondary/30 to-brand-accent/30 rounded-full animate-float"></div>
                <div
                  className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-brand-accent/20 to-brand-primary/20 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white mb-6 text-lg px-6 py-2">
              About Success Facility Services
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Clean & Clear <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are committed to providing specific manpower support within
              stipulated time frames, aiming to become the no.1 manpower
              supplier in Maharashtra with excellence and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-slide-up">
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      To provide our clients with total service solutions under
                      one roof in a cost-effective manner and realize our dream
                      of being a specialized services provider committed to
                      delivering excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Our Vision
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      To provide specific manpower support within the stipulated
                      time frame and become the no.1 manpower supplier in
                      Maharashtra through innovation and quality service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Our Values
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Client satisfaction is our primary mission. We take due
                      care of client needs and resolve their complaints on
                      priority basis with unwavering dedication to quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    PSARA
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2">
                    Registered & Certified
                  </div>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">
                    EPF
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-2">
                    Fully Compliant
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent rounded-3xl p-10 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">Why Choose Success?</h3>
                <ul className="space-y-6">
                  {[
                    "Professionally trained security personnel with industry expertise",
                    "Customized training programs tailored to client-specific needs",
                    "All statutory compliances maintained with transparency",
                    "24/7 support and continuous monitoring systems",
                    "Strategic partnership with Mahesh Dada Vision Academy",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center space-x-4 group"
                    >
                      <CheckCircle className="w-7 h-7 text-brand-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with HD Images */}
      <section id="services" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-gradient-to-r from-brand-accent to-brand-secondary text-white mb-6 text-lg px-6 py-2">
              Our Premium Services
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Comprehensive{" "}
              <span className="gradient-text">Security & Facility</span>{" "}
              Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We offer a complete range of security and facility management
              services tailored to meet your specific business requirements with
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Security Services with HD Image */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallary-img-4.jpeg"
                  alt="Modern Security Control Room"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <Shield className="w-10 h-10 text-white mb-2" />
                  <h3 className="text-2xl font-bold text-white">
                    Security Services
                  </h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  Professional security solutions for complete protection of
                  your premises and assets.
                </p>
                <ul className="space-y-4">
                  {[
                    "Overall protection from fire, theft and accidents",
                    "Material checking and advanced gate management",
                    "Fire fighting equipment maintenance & safety protocols",
                    "Security vulnerability assessment & threat detection",
                    "Visitor management with modern access control systems",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-brand-primary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Facility Services with HD Image */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover-lift overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/gallary-img-2.jpeg"
                  alt="Professional Cleaning Team"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                  <Building className="w-10 h-10 text-white mb-2" />
                  <h3 className="text-2xl font-bold text-white">
                    Facility Services
                  </h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  Complete housekeeping and facility management solutions for
                  optimal workplace environment.
                </p>
                <ul className="space-y-4">
                  {[
                    "Office premises and interior maintenance excellence",
                    "Garden and pathway maintenance with landscaping",
                    "Indoor cleaning 5 times daily with premium equipment",
                    "Regular toilet maintenance and sanitization",
                    "Skilled & semi-skilled workforce deployment",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-brand-secondary flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Training Programs */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Professional{" "}
                <span className="gradient-text">Training Programs</span>
              </h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We thoroughly cover comprehensive topics in our modularized
                security training program with industry-best practices and
                modern methodologies.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Introduction to Security",
                "Fire Prevention & Control",
                "Professional Conduct",
                "Customer Relations",
                "Safety Protocols",
                "Visitor Management",
                "Access Control Systems",
                "Vehicle Inspection",
                "Communication Skills",
                "Emergency Response",
                "Security Patrolling",
                "Report Documentation",
              ].map((program, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl text-center shadow-md hover-lift group border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    {program}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section with HD Images */}
      <section
        id="gallery"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white mb-6 text-lg px-6 py-2">
              Our Work Gallery
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Services in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Witness our professional security and facility management services
              in action across various industries and environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/gallary-img-1.jpeg",
                title: "Security Personnel on Duty",
                category: "Security Services",
                gradient: "from-brand-primary to-brand-secondary",
              },
              {
                image: "/gallary-img-2.jpeg",
                title: "Professional Facility Team",
                category: "Facility Services",
                gradient: "from-brand-secondary to-brand-accent",
              },
              {
                image: "/gallary-img-3.jpeg",
                title: "Industrial Safety Training",
                category: "Training Programs",
                gradient: "from-brand-accent to-brand-primary",
              },
              {
                image: "/gallary-img-4.jpeg",
                title: "Advanced Security Monitoring",
                category: "Security Technology",
                gradient: "from-brand-primary to-brand-accent",
              },
              {
                image: "/gallary-img-5.jpeg",
                title: "Surveillance Systems",
                category: "Security Infrastructure",
                gradient: "from-brand-secondary to-brand-primary",
              },
              {
                image: "/gallary-img-6.jpeg",
                title: "Professional Standards",
                category: "Quality Assurance",
                gradient: "from-brand-accent to-brand-secondary",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <Badge
                    className={`bg-gradient-to-r ${item.gradient} text-white mb-3 border-0`}
                  >
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="w-0 h-1 bg-gradient-to-r from-brand-accent to-brand-secondary group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 bg-gradient-to-br from-brand-navy via-brand-primary to-brand-navy text-white"
      >
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white mb-6 text-lg px-6 py-2 border-0">
              Client Testimonials
            </Badge>
            <h2 className="text-5xl font-bold mb-8">
              What Our <span className="text-brand-accent">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Client satisfaction is our primary mission. Here's what our valued
              clients have to say about our exceptional services and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "Manufacturing Industries Ltd.",
                rating: 5,
                feedback:
                  "Success Facility Services has been our trusted security partner for over 3 years. Their professionally trained guards and 24/7 support have given us complete peace of mind. Outstanding service quality!",
                avatar: "RK",
              },
              {
                name: "Priya Sharma",
                company: "Tech Solutions Pvt. Ltd.",
                rating: 5,
                feedback:
                  "Outstanding housekeeping services! Their attention to detail and regular maintenance schedule has significantly improved our office environment. The team is professional and reliable.",
                avatar: "PS",
              },
              {
                name: "Amit Patel",
                company: "Retail Chain Group",
                rating: 5,
                feedback:
                  "We've been impressed with their quick response time and professional approach. Their customized training programs perfectly match our specific security requirements. Highly recommended!",
                avatar: "AP",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-2xl bg-white/10 backdrop-blur-lg hover-lift group"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-brand-accent fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-200 mb-8 italic text-lg leading-relaxed">
                    "{testimonial.feedback}"
                  </p>
                  <div className="flex items-center space-x-4 border-t border-white/20 pt-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-brand-accent">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white mb-6 text-lg px-6 py-2">
              Get In Touch
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Ready to <span className="gradient-text">Secure</span> Your
              Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Contact us today for a free consultation and customized quote. Our
              experts are ready to discuss your security and facility management
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-t-lg">
                <CardTitle className="text-3xl flex items-center">
                  <Mail className="mr-3 w-8 h-8" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-100 text-lg">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed response.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">
                        Full Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="h-12 border-2 border-gray-200 focus:border-brand-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="h-12 border-2 border-gray-200 focus:border-brand-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 border-2 border-gray-200 focus:border-brand-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your security and facility management requirements..."
                      rows={5}
                      className="border-2 border-gray-200 focus:border-brand-primary transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-14 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary text-white text-lg font-semibold shadow-xl hover-lift"
                  >
                    <Shield className="mr-3 w-6 h-6" />
                    Send Message
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Enhanced Contact Information */}
            <div className="space-y-10">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">
                  Get in Touch
                </h3>

                <div className="space-y-8">
                  {[
                    {
                      icon: MapPin,
                      title: "Office Address",
                      content:
                        "Sr.No. 358, Vipro Circle, Phase 2,\nHijawadi, Man, Mulshi,\nPune, 411057",
                      gradient: "from-brand-primary to-brand-secondary",
                    },
                    {
                      icon: Phone,
                      title: "Phone Numbers",
                      content:
                        "Proprietor: +91 9890273333\nOperations: +91 9604279278",
                      gradient: "from-brand-secondary to-brand-accent",
                    },
                    {
                      icon: Mail,
                      title: "Email Address",
                      content: "succesfacility9922@gmail.com",
                      gradient: "from-brand-accent to-brand-primary",
                    },
                    {
                      icon: Clock,
                      title: "Operating Hours",
                      content:
                        "24/7 Emergency Support\nOffice: Mon-Sat 9:00 AM - 6:00 PM",
                      gradient: "from-brand-primary to-brand-accent",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-6 group"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-xl">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Team Information */}
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 text-white shadow-xl">
                <h4 className="font-bold text-2xl mb-6 flex items-center">
                  <Users className="mr-3 w-8 h-8" />
                  Our Leadership Team
                </h4>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-200 font-medium">
                      Proprietor:
                    </span>
                    <span className="font-bold text-xl">
                      Mr. Ravindra Bodke
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                    <span className="text-gray-200 font-medium">
                      Operation Head:
                    </span>
                    <span className="font-bold text-xl">Mr. Balaji Chate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Blog Section */}
      <section id="blog" className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-gradient-to-r from-brand-secondary to-brand-accent text-white mb-6 text-lg px-6 py-2">
              Latest Insights
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Security <span className="gradient-text">News & Updates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest security trends, industry insights,
              and expert tips from our professional team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Essential Security Measures for Industrial Facilities",
                excerpt:
                  "Comprehensive guide on implementing robust security protocols that protect industrial assets and ensure personnel safety in manufacturing environments.",
                date: "March 15, 2024",
                category: "Security Best Practices",
                gradient: "from-brand-primary to-brand-secondary",
                image: "/blog-img-1.jpeg",
                imageAlt: "Modern underground car park with security cameras",
              },
              {
                title: "The Evolution of Modern Security Training",
                excerpt:
                  "Exploring how continuous professional development and advanced training methodologies are reshaping the security industry standards.",
                date: "March 10, 2024",
                category: "Training & Development",
                gradient: "from-brand-secondary to-brand-accent",
                image: "/blog-img-2.jpeg",
                imageAlt:
                  "Professional presenting on digital evolution and training concepts",
              },
              {
                title: "Facility Management Excellence in 2024",
                excerpt:
                  "Latest trends, technologies, and best practices in facility management that drive operational efficiency and cost-effectiveness.",
                date: "March 5, 2024",
                category: "Facility Management",
                gradient: "from-brand-accent to-brand-primary",
                image: "/blog-img-3.jpeg",
                imageAlt:
                  "Businesswoman in modern office setting demonstrating leadership",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift cursor-pointer group overflow-hidden"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`bg-gradient-to-r ${post.gradient} text-white border-0 shadow-lg`}
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      {post.date}
                    </span>
                    <span className="flex items-center text-brand-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Read More <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section
        id="faq"
        className="py-24 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container">
          <div className="text-center mb-20 animate-fade-in">
            <Badge className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white mb-6 text-lg px-6 py-2">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Got <span className="gradient-text">Questions?</span> We Have
              Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Find comprehensive answers to commonly asked questions about our
              security and facility management services.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {[
                {
                  question:
                    "What comprehensive security services do you provide?",
                  answer:
                    "We provide end-to-end security services including overall protection from fire, theft and accidents, advanced material checking and gate management, fire fighting equipment maintenance, comprehensive security vulnerability assessments, and modern visitor management with sophisticated access control systems.",
                },
                {
                  question:
                    "Are your security guards properly trained and certified?",
                  answer:
                    "Absolutely! All our security guards undergo specialized training according to client premises needs and SOP (Standard Operating Procedure). We maintain strategic partnerships with Mahesh Dada Vision Academy for comprehensive security training covering fire prevention, emergency response, professional conduct, patrolling techniques, and advanced communication skills.",
                },
                {
                  question: "What facility management services do you offer?",
                  answer:
                    "Our facility services include professional housekeeping division for general maintenance and cleanliness, skilled labour contract division for workforce deployment, comprehensive office premises maintenance, garden and pathway maintenance with landscaping, and customized cleaning schedules with premium equipment and eco-friendly solutions.",
                },
                {
                  question:
                    "Do you provide 24/7 security coverage and support?",
                  answer:
                    "Yes, we provide round-the-clock security coverage with professionally trained guards and advanced monitoring systems. Our dedicated team is available 24/7 for emergency response, continuous surveillance, and immediate assistance to ensure complete protection of your premises and assets.",
                },
                {
                  question:
                    "Are you compliant with all legal requirements and certifications?",
                  answer:
                    "Absolutely. We maintain all statutory compliances including PSARA registration, EPF, ESIC, PT, and GST registrations. We ensure complete transparency and adherence to all legal requirements for both security services and facility management operations, providing you with full compliance assurance.",
                },
                {
                  question:
                    "How do you customize services for different industries?",
                  answer:
                    "Every business has unique security and facility requirements. We conduct thorough assessments and customize our training programs, service delivery, and operational procedures based on individual client needs, industry standards, and specific premises requirements. Our flexible approach ensures optimal solutions for your operational procedures and security standards.",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="bg-white rounded-2xl px-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <AccordionTrigger className="text-left font-bold text-gray-900 text-lg py-6 hover:text-brand-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
