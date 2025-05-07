"use client"

import { useState } from "react"
import { ArrowRight, Bold, Italic, Underline, Strikethrough, List, ListOrdered } from "lucide-react"

const PostJobForm = () => {
  const [jobTitle, setJobTitle] = useState("")
  const [tags, setTags] = useState("")
  const [category, setCategory] = useState("")
  const [salary, setSalary] = useState("")
  const [currency, setCurrency] = useState("USD")
  const [education, setEducation] = useState("")
  const [experience, setExperience] = useState("")
  const [skill, setSkill] = useState("")
  const [vacancies, setVacancies] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [responsibilities, setResponsibilities] = useState("")

  const SelectField = ({ label, value, onChange, options = [], placeholder = "Select..." }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  )

  const InputField = ({ label, value, onChange, placeholder, type = "text", optional = false }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {optional && <span className="text-gray-500 text-xs">(Optional)</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  )

  const TextAreaWithToolbar = ({ label, value, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-2"
      ></textarea>
      <div className="flex space-x-2 border border-gray-200 rounded-md p-1 bg-gray-50">
        <button className="p-1 hover:bg-gray-200 rounded">
          <Bold size={16} />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Italic size={16} />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Underline size={16} />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Strikethrough size={16} />
        </button>
        <div className="border-l border-gray-300 mx-1"></div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <ListOrdered size={16} />
        </button>
        <button className="p-1 hover:bg-gray-200 rounded">
          <List size={16} />
        </button>
      </div>
    </div>
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      jobTitle,
      tags,
      category,
      salary,
      currency,
      education,
      experience,
      skill,
      vacancies,
      expirationDate,
      location,
      description,
      responsibilities,
    })
  }

  return (
    <>
    <div className="flex-1">

    <div className="max-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Post a job</h1>
      <form onSubmit={handleSubmit}>
        <InputField label="Job Title" value={jobTitle} onChange={setJobTitle} placeholder="Add job title" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Tags" value={tags} onChange={setTags} placeholder="Job keyword, tags etc..." />
          <SelectField
            label="Job Category"
            value={category}
            onChange={setCategory}
            options={["Full-time", "Part-time", "Contract", "Freelance", "Internship"]}
            />
        </div>

        <div className="mt-6 mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Salary <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <div className="flex">
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Minimum salary..."
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-24 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>

        <div className="mt-8 mb-4">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Advance Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SelectField
              label="Education"
              value={education}
              onChange={setEducation}
              options={["High School", "Bachelor's", "Master's", "PhD", "Other"]}
              />
            <SelectField
              label="Experience"
              value={experience}
              onChange={setExperience}
              options={["Entry Level", "1-3 years", "3-5 years", "5-10 years", "10+ years"]}
              />
            <SelectField
              label="Skill"
              value={skill}
              onChange={setSkill}
              options={["Beginner", "Intermediate", "Advanced", "Expert"]}
              />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <SelectField
              label="Vacancies"
              value={vacancies}
              onChange={setVacancies}
              options={["1", "2", "3", "4", "5", "6+", "10+"]}
              />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
              <input
                type="text"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                placeholder="DD/MM/YYYY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <InputField label="Location" value={location} onChange={setLocation} placeholder="Enter job location" />
          </div>
        </div>

        <div className="mt-8 mb-4">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Description & Availabilities</h2>
          <TextAreaWithToolbar
            label="Description"
            value={description}
            onChange={setDescription}
            placeholder="Add your job description..."
            />
          <TextAreaWithToolbar
            label="Availabilities"
            value={responsibilities}
            onChange={setResponsibilities}
            placeholder="Add your job responsibilities..."
            />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-900 text-white font-medium rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
            Post Job
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </form>
                </div>
    </div>
    </>
  )
}

export default PostJobForm;
