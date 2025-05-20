"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { usePortfolio } from "@/components/providers"
import GlitchText from "@/components/shared/glitch-text"
import ScrambleText from "@/components/shared/scramble-text"
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react"

export default function ContactSection() {
  const { setCursorType } = usePortfolio()
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Message sent successfully!")
  }

  const contactInfo = [
    { icon: Mail, text: "contact@sarthak.dev", href: "mailto:contact@sarthak.dev" },
    { icon: Phone, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, text: "San Francisco, CA", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, text: "GitHub", href: "https://github.com/sarthak" },
    { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/sarthak" },
    { icon: Twitter, text: "X", href: "https://x.com/sarthak" },
  ]

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 relative">
          <div className="text-xs text-gray-500 font-space mb-3">
            <span className="code-comment">{`<Section id="contact" component="ContactSection" />`}</span>
          </div>
          <span className="font-space text-green-400 mb-2 inline-block">
            <span className="text-gray-500">// Get In Touch</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            <GlitchText text="Contact Me" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="mb-6">
              <div className="text-xs text-gray-500 font-space mb-1">
                <span className="code-comment">{`<Form component="ContactForm" />`}</span>
              </div>
              <h3 className="text-xl font-bold font-jetbrains">Send Me A Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="name" className="block text-sm font-space">
                    <span className="text-xs text-gray-500 font-space mr-1">contact.name:</span>
                    Name
                  </label>
                  <span className="text-[10px] text-gray-500 font-space">Required</span>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333] p-3 text-gray-200 focus:border-green-400 focus:outline-none font-space"
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="email" className="block text-sm font-space">
                    <span className="text-xs text-gray-500 font-space mr-1">contact.email:</span>
                    Email
                  </label>
                  <span className="text-[10px] text-gray-500 font-space">Required</span>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333] p-3 text-gray-200 focus:border-green-400 focus:outline-none font-space"
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="subject" className="block text-sm font-space">
                    <span className="text-xs text-gray-500 font-space mr-1">contact.subject:</span>
                    Subject
                  </label>
                  <span className="text-[10px] text-gray-500 font-space">Required</span>
                </div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-[#333] p-3 text-gray-200 focus:border-green-400 focus:outline-none font-space"
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label htmlFor="message" className="block text-sm font-space">
                    <span className="text-xs text-gray-500 font-space mr-1">contact.message:</span>
                    Message
                  </label>
                  <span className="text-[10px] text-gray-500 font-space">Required</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#1A1A1A] border border-[#333] p-3 text-gray-200 focus:border-green-400 focus:outline-none font-space"
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                />
              </div>

              <div>
                <div className="text-xs text-gray-500 font-space mb-1">
                  <span className="code-comment">{`<Button type="submit" />`}</span>
                </div>
                <button
                  type="submit"
                  className="bg-green-400 text-[#121212] px-6 py-3 font-space text-sm inline-flex items-center hover:bg-green-500 transition-colors"
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <ScrambleText text="Send Message" />
                  <Send className="ml-2 w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
            <div className="mb-6">
              <div className="text-xs text-gray-500 font-space mb-1">
                <span className="code-comment">{`<Section component="ContactInfo" />`}</span>
              </div>
              <h3 className="text-xl font-bold font-jetbrains">Contact Information</h3>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start text-gray-300 hover:text-green-400 transition-colors">
                    <Icon className="w-5 h-5 mr-3 text-green-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-space mb-1">
                        <span className="code-comment">{`contact_info[${index}]`}</span>
                      </div>
                      <a
                        href={item.href}
                        className="hover:text-green-400 transition-colors"
                        onMouseEnter={() => setCursorType("hover")}
                        onMouseLeave={() => setCursorType("default")}
                      >
                        {item.text}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mb-6">
              <div className="text-xs text-gray-500 font-space mb-1">
                <span className="code-comment">{`<Section component="SocialLinks" />`}</span>
              </div>
              <h3 className="text-xl font-bold font-jetbrains">Connect With Me</h3>
            </div>

            <div className="space-y-6 mb-8">
              {socialLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start text-gray-300 hover:text-green-400 transition-colors">
                    <Icon className="w-5 h-5 mr-3 text-green-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-space mb-1">
                        <span className="code-comment">{`social_links[${index}]`}</span>
                      </div>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition-colors"
                        onMouseEnter={() => setCursorType("hover")}
                        onMouseLeave={() => setCursorType("default")}
                      >
                        {item.text}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 bg-[#1A1A1A] p-6 relative">
              <div className="mb-4">
                <div className="text-xs text-gray-500 font-space mb-1">
                  <span className="code-comment">{`<Card component="WorkingHours" />`}</span>
                </div>
                <h4 className="font-jetbrains text-green-400">Working Hours</h4>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {workingHours.map((item, index) => (
                    <tr key={index} className="border-b border-[#333] last:border-0">
                      <td className="py-2 text-gray-300">
                        <div className="text-xs text-gray-500 font-space mb-1">
                          <span className="code-comment">{`working_hours[${index}].day`}</span>
                        </div>
                        {item.day}
                      </td>
                      <td className="py-2 text-right text-gray-300">
                        <div className="text-xs text-gray-500 font-space mb-1 text-right">
                          <span className="code-comment">{`working_hours[${index}].hours`}</span>
                        </div>
                        {item.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
