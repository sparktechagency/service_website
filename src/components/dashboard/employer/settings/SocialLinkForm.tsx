"use client"

import type React from "react"

import { useState } from "react"
import { Facebook, Twitter, Instagram, Youtube, ChevronDown, Plus, Loader2 } from "lucide-react"

const SocialLinkForm = () =>{
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, type: "facebook", label: "Facebook", icon: Facebook, url: "", isOpen: false },
    { id: 2, type: "twitter", label: "Twitter", icon: Twitter, url: "", isOpen: false },
    { id: 3, type: "instagram", label: "Instagram", icon: Instagram, url: "", isOpen: false },
    { id: 4, type: "youtube", label: "Youtube", icon: Youtube, url: "", isOpen: false },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleDropdown = (id: number) => {
    setSocialLinks(
      socialLinks.map((link) => ({
        ...link,
        isOpen: link.id === id ? !link.isOpen : link.isOpen,
      })),
    )
  }

  const updateSocialLink = (id: number, url: string) => {
    setSocialLinks(
      socialLinks.map((link) => ({
        ...link,
        url: link.id === id ? url : link.url,
      })),
    )
  }

  const addNewSocialLink = () => {
    // Find the next available social media type that isn't already in the list
    const availableTypes = [
      { type: "facebook", label: "Facebook", icon: Facebook },
      { type: "twitter", label: "Twitter", icon: Twitter },
      { type: "instagram", label: "Instagram", icon: Instagram },
      { type: "youtube", label: "Youtube", icon: Youtube },
    ]

    const usedTypes = socialLinks.map((link) => link.type)
    const nextType = availableTypes.find((type) => !usedTypes.includes(type.type))

    if (nextType) {
      setSocialLinks([
        ...socialLinks,
        {
          id: Math.max(...socialLinks.map((link) => link.id)) + 1,
          type: nextType.type,
          label: nextType.label,
          icon: nextType.icon,
          url: "",
          isOpen: false,
        },
      ])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Submitted social links:", socialLinks)
    setIsSubmitting(false)
  }

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <div key={link.id} className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Social Link {index + 1}</label>
              <div className="flex items-center">
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center justify-between w-[120px] px-3 py-2 border border-gray-300 rounded-l-md bg-white text-sm"
                    onClick={() => toggleDropdown(link.id)}
                  >
                    <span className="flex items-center">
                      <link.icon className="h-4 w-4 mr-2" />
                      {link.label}
                    </span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  {link.isOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200">
                      <ul className="py-1">
                        {[
                          { type: "facebook", label: "Facebook", icon: Facebook },
                          { type: "twitter", label: "Twitter", icon: Twitter },
                          { type: "instagram", label: "Instagram", icon: Instagram },
                          { type: "youtube", label: "Youtube", icon: Youtube },
                        ].map((option) => (
                          <li key={option.type}>
                            <button
                              type="button"
                              className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                              onClick={() => {
                                setSocialLinks(
                                  socialLinks.map((l) =>
                                    l.id === link.id
                                      ? {
                                          ...l,
                                          type: option.type,
                                          label: option.label,
                                          icon: option.icon,
                                          isOpen: false,
                                        }
                                      : l,
                                  ),
                                )
                              }}
                            >
                              <option.icon className="h-4 w-4 mr-2" />
                              {option.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Profile link/url..."
                  className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300 text-sm"
                  value={link.url}
                  onChange={(e) => updateSocialLink(link.id, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addNewSocialLink}
          className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm text-gray-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Social Link
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-32 flex items-center justify-center px-4 py-2 bg-blue-900 hover:bg-blue-800 rounded-md text-sm text-white font-medium transition-colors disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Saving...
            </>
          ) : (
            "Save Changes"
          )}
        </button>
      </form>
    </div>
  )
}

export default SocialLinkForm;