"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ShoppingCart, User, Mic, Clock, Users, Calendar, Volume2, VolumeX } from "lucide-react"

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
    days: 4,
    hours: 3,
    minutes: 5,
  })
  const [isVideoMuted, setIsVideoMuted] = useState(true)
  const [showSpeakerButton, setShowSpeakerButton] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 }
        }
        return prev
      })
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white">
                Mahabiz 2026 –
                <br />
                Contacts to
                <br />
                Contracts
              </h1>
              <p className="text-xl text-white/90 max-w-md">Networking that generates business</p>
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
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{timeLeft.days.toString().padStart(2, "0")}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">Days</div>
                </div>
                <div className="text-3xl font-light text-white">:</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{timeLeft.hours.toString().padStart(2, "0")}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">Hours</div>
                </div>
                <div className="text-3xl font-light text-white">:</div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                  <div className="text-white/70 text-sm uppercase tracking-wider">Minutes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            {/* Date Badge - Above Video */}
            <div className="mb-4 flex justify-center">
              <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: "#3755A5" }}></div>
                  <span className="font-semibold text-sm" style={{ color: "#3755A5" }}>
                  31 Jan – 1 Feb, 2026 · Dubai
                  </span>
                </div>
              </div>
            </div>

            {/* Main Video */}
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl" 
              style={{ width: '100%', height: '350px', border: '2px solid white' }}
              onMouseEnter={() => setShowSpeakerButton(true)}
              onMouseLeave={() => setShowSpeakerButton(false)}
            >
              <video
                src="/MAHABIZ ( previous year event highlight )- GMBF .mp4"
                autoPlay
                loop
                muted={isVideoMuted}
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Unmute Button */}
              {showSpeakerButton && (
                <button
                  onClick={() => setIsVideoMuted(!isVideoMuted)}
                  className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
                  aria-label={isVideoMuted ? "Unmute video" : "Mute video"}
                >
                  {isVideoMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              )}
              
              {/* Decorative Pattern Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
                style={{ background: `linear-gradient(to bottom right, rgba(11, 88, 140, 0.2), transparent)` }}
              ></div>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-xl"
              style={{ backgroundColor: "rgba(11, 88, 140, 0.2)" }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full blur-xl"
              style={{ backgroundColor: "rgba(25, 159, 212, 0.2)" }}
            ></div>
          </div>
        </div>
      </main>

      {/* Statistics and Welcome Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-3 gap-0 max-w-5xl mx-auto rounded-lg overflow-hidden bg-white"
            style={{ border: `1px solid #3755A5` }}
          >
            {/* Statistics Grid - Left Side (2 columns) */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 h-full">
                {/* 20 SPEAKER */}
                <div
                  className="p-8 text-center bg-white transition-all duration-300 cursor-pointer"
                  style={{ borderRight: `1px solid #3755A5`, borderBottom: `1px solid #3755A5` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#54A3DA'
                    const numberEl = e.currentTarget.querySelector('.speaker-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.speaker-label') as HTMLElement
                    if (numberEl) numberEl.style.color = 'white'
                    if (labelEl) labelEl.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    const numberEl = e.currentTarget.querySelector('.speaker-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.speaker-label') as HTMLElement
                    if (numberEl) numberEl.style.color = '#3755A5'
                    if (labelEl) labelEl.style.color = '#3755A5'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#3755A5" }}
                  >
                    <Mic className="w-6 h-6" style={{ color: "white" }} />
                  </div>
                  <div className="text-2xl font-bold mb-1 speaker-number transition-colors duration-300" style={{ color: "#3755A5" }}>
                    20
                  </div>
                  <div className="font-medium uppercase tracking-wide text-sm speaker-label transition-colors duration-300" style={{ color: "#3755A5" }}>
                    SPEAKER
                  </div>
                </div>

                {/* 72 Hours */}
                <div 
                  className="p-8 text-center bg-white transition-all duration-300 cursor-pointer" 
                  style={{ borderBottom: `1px solid #3755A5` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#54A3DA'
                    const numberEl = e.currentTarget.querySelector('.hours-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.hours-label') as HTMLElement
                    if (numberEl) numberEl.style.color = 'white'
                    if (labelEl) labelEl.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    const numberEl = e.currentTarget.querySelector('.hours-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.hours-label') as HTMLElement
                    if (numberEl) numberEl.style.color = '#3755A5'
                    if (labelEl) labelEl.style.color = '#3755A5'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#3755A5" }}
                  >
                    <Clock className="w-6 h-6" style={{ color: "white" }} />
                  </div>
                  <div className="text-2xl font-bold mb-1 hours-number transition-colors duration-300" style={{ color: "#3755A5" }}>
                    14
                  </div>
                  <div className="font-medium hours-label transition-colors duration-300" style={{ color: "#3755A5" }}>
                    Hours
                  </div>
                </div>

                {/* 10 Workshop */}
                <div 
                  className="p-8 text-center bg-white transition-all duration-300 cursor-pointer" 
                  style={{ borderRight: `1px solid #3755A5` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#54A3DA'
                    const numberEl = e.currentTarget.querySelector('.workshop-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.workshop-label') as HTMLElement
                    if (numberEl) numberEl.style.color = 'white'
                    if (labelEl) labelEl.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    const numberEl = e.currentTarget.querySelector('.workshop-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.workshop-label') as HTMLElement
                    if (numberEl) numberEl.style.color = '#3755A5'
                    if (labelEl) labelEl.style.color = '#3755A5'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#3755A5" }}
                  >
                    <Users className="w-6 h-6" style={{ color: "white" }} />
                  </div>
                  <div className="text-2xl font-bold mb-1 workshop-number transition-colors duration-300" style={{ color: "#3755A5" }}>
                    10
                  </div>
                  <div className="font-medium workshop-label transition-colors duration-300" style={{ color: "#3755A5" }}>
                    Workshop
                  </div>
                </div>

                {/* 08 Days */}
                <div 
                  className="p-8 text-center bg-white transition-all duration-300 cursor-pointer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#54A3DA'
                    const numberEl = e.currentTarget.querySelector('.days-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.days-label') as HTMLElement
                    if (numberEl) numberEl.style.color = 'white'
                    if (labelEl) labelEl.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white'
                    const numberEl = e.currentTarget.querySelector('.days-number') as HTMLElement
                    const labelEl = e.currentTarget.querySelector('.days-label') as HTMLElement
                    if (numberEl) numberEl.style.color = '#3755A5'
                    if (labelEl) labelEl.style.color = '#3755A5'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#3755A5" }}
                  >
                    <Calendar className="w-6 h-6" style={{ color: "white" }} />
                  </div>
                  <div className="text-2xl font-bold mb-1 days-number transition-colors duration-300" style={{ color: "#3755A5" }}>
                    02
                  </div>
                  <div className="font-medium days-label transition-colors duration-300" style={{ color: "#3755A5" }}>
                    Days
                  </div>
                </div>
              </div>
            </div>

            {/* Welcome Section - Right Side */}
            <div className="lg:col-span-1 flex flex-col h-full">
              <div className="flex-1 flex flex-col h-full transition-all duration-300 hover:bg-opacity-90 cursor-pointer" style={{ backgroundColor: "#3755A5" }}>
                {/* Dark blue section */}
                <div className="p-8 text-white flex-1 flex items-center justify-center">
                  <h3 className="text-xl font-bold leading-tight text-center">
                  Welcome to Mahabiz 2026
                  </h3>
                </div>

                {/* Yellow section */}
                <div className="p-8 transition-all duration-300 hover:bg-opacity-90 cursor-pointer" style={{ backgroundColor: "#3755A5" }}>
                  <p className="text-sm leading-relaxed mb-6 text-white">
                  the premier platform where global business meets innovation, collaboration, and growth. 
                  Join us to unlock endless possibilities and transformative partnerships.
                  </p>
                  <Button
                    className="font-semibold px-8 py-3 text-lg bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-1"
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
                    <span>Learn More</span>
                    <span>→</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
