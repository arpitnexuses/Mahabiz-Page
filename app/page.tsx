"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ShoppingCart, User, Mic, Clock, Users, Calendar, Volume2, VolumeX, Play, Pause } from "lucide-react"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden" style={{ border: `1px solid rgba(11, 88, 140, 0.1)` }}>
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium" style={{ color: "#3755A5" }}>
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full relative flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}
          style={{ backgroundColor: "#3755A5" }}
        >
          <span 
            className="absolute inset-0 flex items-center justify-center text-xl font-light" 
            style={{ 
              color: "white", 
              lineHeight: "1",
              fontSize: "20px",
              transform: "translate(0, -1px)"
            }}
          >
            +
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-4">
          <div className="pt-2 border-t" style={{ borderColor: "rgba(11, 88, 140, 0.1)" }}>
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVideoMuted, setIsVideoMuted] = useState(true)
  const [showSpeakerButton, setShowSpeakerButton] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [showPlayButton, setShowPlayButton] = useState(false)
  const [promoVideoRef, setPromoVideoRef] = useState<HTMLVideoElement | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Event date: January 31st, 2026 at 10:00 AM
      const eventDate = new Date('2026-01-31T10:00:00')
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
      } else {
        // Event has passed
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }
    }

    // Set initial time
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleVideoPlayPause = () => {
    if (promoVideoRef) {
      if (isVideoPlaying) {
        promoVideoRef.pause()
        setIsVideoPlaying(false)
      } else {
        promoVideoRef.play()
        setIsVideoPlaying(true)
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="/gmbf-logo.svg" 
                alt="GMBF Global - Gulf Maharashtra Business Forum" 
                className="h-14 w-auto drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-105" 
              />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div
                className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition-opacity"
                style={{ color: "#3755A5" }}
              >
                <span>Home</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: "#3755A5" }}>
                Agenda
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: "#3755A5" }}>
                Speakers
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" style={{ color: "#3755A5" }}>
                Blog
              </a>
              <div className="flex items-center space-x-1 cursor-pointer hover:opacity-80 transition-opacity" style={{ color: "#3755A5" }}>
                <span>Pages</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Button 
                className="font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#3755A5", color: "white" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#54A3DA"
                  e.currentTarget.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#3755A5"
                  e.currentTarget.style.color = "white"
                }}
              >
                Register Now
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-50">
                  <User className="w-5 h-5 transition-colors duration-300" style={{ color: "#3755A5" }} />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer relative transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-50">
                  <ShoppingCart className="w-5 h-5 transition-colors duration-300" style={{ color: "#3755A5" }} />
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold transition-all duration-300"
                    style={{ backgroundColor: "#3755A5", color: "#3755A5" }}
                  >
                    2
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/MAHABIZ ( previous year event highlight )- GMBF .mp4"
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
                Mahabiz 2026 –
                <br />
                Contacts to
                <br />
                Contracts
              </h1>
                <p className="text-xl text-white/90 max-w-md drop-shadow-lg">Networking that generates business</p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="font-semibold px-8 py-3 text-lg bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ color: "#3755A5" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#54A3DA"
                  e.currentTarget.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white"
                  e.currentTarget.style.color = "#3755A5"
                }}
              >
                Register Now
              </Button>
              <Button
                className="font-semibold px-8 py-3 text-lg bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ color: "#3755A5" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#54A3DA"
                  e.currentTarget.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white"
                  e.currentTarget.style.color = "#3755A5"
                }}
              >
                Become Sponsor
              </Button>
            </div>

            {/* Countdown Timer */}
            <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.days.toString().padStart(2, "0")}</div>
                    <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider drop-shadow-md">Days</div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-white drop-shadow-lg">:</div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.hours.toString().padStart(2, "0")}</div>
                    <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider drop-shadow-md">Hours</div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-light text-white drop-shadow-lg">:</div>
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                    <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider drop-shadow-md">Minutes</div>
                </div>
                  <div className="text-2xl sm:text-3xl font-light text-white drop-shadow-lg">:</div>
                <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                    <div className="text-white/70 text-xs sm:text-sm uppercase tracking-wider drop-shadow-md">Seconds</div>
                  </div>
                </div>
                
                {/* Event Date Display */}
                <div className="text-center">
                  <p className="text-white/80 text-sm sm:text-base drop-shadow-md">
                    Event starts on <span className="font-semibold">January 31st, 2026 at 10:00 AM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Video Controls */}
            <div className="relative flex flex-col items-center space-y-6">
              {/* Video Controls */}
            <div 
                className="relative"
              onMouseEnter={() => setShowSpeakerButton(true)}
              onMouseLeave={() => setShowSpeakerButton(false)}
              >
              {/* Unmute Button */}
              {showSpeakerButton && (
                <button
                  onClick={() => setIsVideoMuted(!isVideoMuted)}
                    className="bg-black/50 hover:bg-black/70 text-white rounded-full p-4 transition-all duration-300 backdrop-blur-sm shadow-lg"
                  aria-label={isVideoMuted ? "Unmute video" : "Mute video"}
                >
                  {isVideoMuted ? (
                      <VolumeX className="w-6 h-6" />
                  ) : (
                      <Volume2 className="w-6 h-6" />
                  )}
                </button>
              )}
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-xl"
                style={{ backgroundColor: "rgba(11, 88, 140, 0.3)" }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-xl"
                style={{ backgroundColor: "rgba(25, 159, 212, 0.3)" }}
            ></div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6" style={{ color: "#3755A5" }}>
              About Mahabiz 2026
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#54A3DA" }}></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Story */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#3755A5" }}>
                  The Story Behind Mahabiz
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Think of Mahabiz as the ultimate business matchmaker. It's where entrepreneurs from India meet business leaders from the Gulf, and together they create amazing opportunities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Started by <span className="font-semibold" style={{ color: "#3755A5" }}>GMBF Global</span>, Mahabiz has one simple goal: <span className="font-semibold" style={{ color: "#54A3DA" }}>turn handshakes into deals.</span>
                </p>
              </div>

              {/* What Makes Us Special */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-6" style={{ color: "#3755A5" }}>
                  What Makes Us Special?
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: "#54A3DA" }}></div>
                    <div>
                      <span className="font-semibold" style={{ color: "#3755A5" }}>Global Reach:</span>
                      <span className="text-gray-700"> We bring together 800+ business minds from 15+ countries</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: "#54A3DA" }}></div>
                    <div>
                      <span className="font-semibold" style={{ color: "#3755A5" }}>Real Results:</span>
                      <span className="text-gray-700"> Past events have created lasting partnerships and million-dollar deals</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: "#54A3DA" }}></div>
                    <div>
                      <span className="font-semibold" style={{ color: "#3755A5" }}>Smart Focus:</span>
                      <span className="text-gray-700"> We connect the right people at the right time</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0" style={{ backgroundColor: "#54A3DA" }}></div>
                    <div>
                      <span className="font-semibold" style={{ color: "#3755A5" }}>Perfect Location:</span>
                      <span className="text-gray-700"> Dubai - the world's business crossroads</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Event Details */}
            <div className="space-y-8">
              {/* Mahabiz 2026 Event */}
              <div className="bg-gradient-to-br p-8 rounded-2xl text-white" style={{ background: `linear-gradient(135deg, #3755A5, #54A3DA)` }}>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Mahabiz 2026: Our Biggest Event Yet
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  This isn't just another conference. It's two days of pure business magic happening <span className="font-semibold">January 31 - February 1, 2026.</span>
                </p>
                
                <h4 className="text-xl font-bold mb-4">What to Expect:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0 bg-white"></div>
                    <span>Meet government ministers and industry giants</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0 bg-white"></div>
                    <span>Discover investment opportunities worth millions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0 bg-white"></div>
                    <span>Network with successful entrepreneurs who've "been there, done that"</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full mt-3 flex-shrink-0 bg-white"></div>
                    <span>Learn about exports, imports, sustainability, and future trends</span>
                  </li>
                </ul>
              </div>

              {/* Why Dubai */}
              <div className="bg-white border-2 p-8 rounded-2xl" style={{ borderColor: "#3755A5" }}>
                <h4 className="text-xl font-bold mb-4" style={{ color: "#3755A5" }}>
                  Why Dubai? Why Now?
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  With India and UAE becoming stronger business partners than ever, there's never been a better time to connect these two dynamic markets. Dubai is the perfect meeting point where East meets West, and deals get done.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section - Centered */}
      <section className="py-20" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: "#3755A5" }}>
              Our Promise
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-3xl mx-auto">
              We don't just host events. We create connections that change businesses and lives. When you leave Mahabiz 2026, you'll have new partners, fresh ideas, and real opportunities to grow.
            </p>
            <h4 className="text-2xl font-semibold" style={{ color: "#54A3DA" }}>
              Ready to turn your next conversation into your next contract?
            </h4>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseEnter={() => setShowPlayButton(true)}
        onMouseLeave={() => setShowPlayButton(false)}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={(video) => {
              if (video) {
                setPromoVideoRef(video)
                video.addEventListener('play', () => setIsVideoPlaying(true))
                video.addEventListener('pause', () => setIsVideoPlaying(false))
              }
            }}
            src="/Final MAHABIZ PROMO 1 - GMBF (2).mp4"
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          
          {/* Dark overlay for better content readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
        </div>

        {/* Play/Pause Button */}
        {showPlayButton && (
          <button
            onClick={handleVideoPlayPause}
            className="relative z-20 bg-black/70 hover:bg-black/80 text-white rounded-full p-6 transition-all duration-300 backdrop-blur-sm shadow-2xl hover:scale-110"
            aria-label={isVideoPlaying ? "Pause video" : "Play video"}
          >
            {isVideoPlaying ? (
              <Pause className="w-8 h-8" />
            ) : (
              <Play className="w-8 h-8 ml-1" />
            )}
          </button>
        )}
      </section>




      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: "#3755A5" }}>
              Frequently
              <br />
              Asked Question
            </h2>
            </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            <FAQItem
              question="What are the sponsorship benefits?"
              answer="Gain visibility among 800+ global entrepreneurs, prominent industry leaders, and policymakers. Enjoy logo placement, speaking opportunities, and exclusive networking access to build your brand internationally."
            />
            <FAQItem
              question="How can I register for Mahabiz 2026?"
              answer="You can register easily via the online form on our website. Choose individual passes or group packages, and complete payment securely online."
            />
            <FAQItem
              question=" Who can participate in the event?"
              answer="Mahabiz is open to entrepreneurs, startups, investors, government officials, and trade professionals interested in global business collaboration."
            />
            <FAQItem
              question=" Is accommodation provided for attendees?"
              answer="While accommodation isn’t included, we partner with premium hotels near the venue offering special rates to participants. Details are shared after registration."
            />
            <FAQItem
              question="What are the key highlights of the event?"
              answer="Experience interactive panel discussions, targeted networking dinners, business lounges, and workshops focused on exports, investments, sustainability, and more."
            />
          </div>
        </div>
      </section>


      {/* Registration Form Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#3755A5" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Register Your Interest */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Register Your Interest
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Secure your spot, unlock new possibilities, and connect with global leaders
              </p>
            </div>

            {/* Right Side - Registration Form */}
            <div className="bg-white rounded-lg p-8 shadow-2xl">
              {/* Mahabiz Logo */}
              <div className="flex justify-end mb-6">
                <div className="text-2xl font-bold" style={{ color: "#3755A5" }}>
                  
              </div>
            </div>

              {/* Registration Form */}
              <form className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
            </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="ex: myname@example.com"
                  />
                  <p className="text-xs text-gray-500 mt-1">example@example.com</p>
                </div>

                {/* I'm interested in */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I&apos;m interested in <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Please Select</option>
                    <option value="business-networking">Business Networking</option>
                    <option value="investment-opportunities">Investment Opportunities</option>
                    <option value="technology-innovation">Technology Innovation</option>
                    <option value="market-insights">Market Insights</option>
                    <option value="partnership-opportunities">Partnership Opportunities</option>
                  </select>
              </div>

                {/* Event(s) I'm interested in */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event(s) I&apos;m interested in <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Please Select</option>
                    <option value="digital-conference-2023">Digital Conference 2023</option>
                    <option value="business-summit-2024">Business Summit 2024</option>
                    <option value="networking-events">Networking Events</option>
                    <option value="workshop-sessions">Workshop Sessions</option>
                    <option value="all-events">All Events</option>
                  </select>
              </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your interests or any questions you have..."
                  ></textarea>
                  </div>

                {/* Submit Button */}
            <Button
                  type="submit"
                  className="w-full font-semibold px-6 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "#3755A5", color: "white" }}
              onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#54A3DA"
                    e.currentTarget.style.color = "white"
              }}
              onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#3755A5"
                e.currentTarget.style.color = "white"
              }}
            >
                  Submit
            </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="/gmbf-logo.svg" 
                  alt="GMBF Global - Gulf Maharashtra Business Forum" 
                  className="h-16 w-auto drop-shadow-md hover:drop-shadow-lg transition-all duration-300 hover:scale-105" 
                />
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
              Stay Connected with MAHABIZ 2026
              Join a thriving community of global entrepreneurs, industry leaders, and innovators shaping the future of business.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#3755A5" }}
                >
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#3755A5" }}
                >
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#3755A5" }}
                >
                  <span className="text-white text-sm font-bold">i</span>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: "#3755A5" }}
                >
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6" style={{ color: "#3755A5" }}>
                Quick Links
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    Registration
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    
                  </a>
                </li>
              </ul>
            </div>

            {/* Utility Pages */}
            <div>
              <h3 className="font-semibold text-lg mb-6" style={{ color: "#3755A5" }}>
                Utility Pages
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                  Download Brochure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                  
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:opacity-70 transition-opacity">
                    
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div>
              <h3 className="font-semibold text-lg mb-6" style={{ color: "#3755A5" }}>
                Subscribe 
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
              Stay updated with the latest news, event announcements, and exclusive offers from MAHABIZ 2026.
              </p>

              <div className="relative max-w-xs">
                <input
                  type="email"
                  placeholder="Email Capture"
                  className="w-full px-4 py-3 pr-24 bg-gray-100 rounded-full border-none focus:outline-none text-gray-700 placeholder-gray-500 text-sm"
                />
                <Button
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-full font-semibold text-xs flex items-center space-x-1 hover:opacity-90 transition-opacity whitespace-nowrap"
                  style={{ backgroundColor: "#3755A5", color: "white" }}
                >
                  <span>Subscribe Now</span>
                  <span>→</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Credits */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-center text-sm text-gray-500">
               <span style={{ color: "#3755A5" }}></span>{" "}
              <span style={{ color: "#3755A5" }}></span>.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
