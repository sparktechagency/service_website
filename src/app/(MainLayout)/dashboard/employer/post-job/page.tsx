"use client"

import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

const PostJobPage = () => {
 

  const PricingCard = ({ tier, price, description, features, recommended = false }) => (
    <div className={`border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 hover:shadow-sm duration-200`}>
      {recommended && <div className="bg-primary text-white text-center py-1 text-sm">Recommendation</div>}
      <div className="p-6">
        <h3 className="font-bold text-gray-800 uppercase">{tier}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">{description}</p>
        <div className="flex items-end gap-1 mb-4">
          <span className="text-3xl font-bold">${price}</span>
          <span className="text-gray-500 mb-1">/Monthly</span>
        </div> 
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <button
          className={`mt-6 w-full py-2 px-4 rounded flex items-center justify-center gap-2 cursor-pointer ${
            recommended ? "bg-primary hover:bg-[#2b4773] text-white" : "bg-light-gray text-primary hover:bg-primary hover:text-white cursor-pointer duration-200"
          }`}
        >
          Choose Plan
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )

  return (
    <div className="flex-1 p-6">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Buy Premium Subscription to Post a Job</h1>
          <p className="text-gray-600 max-w-xl">
            Donec eu dui ut dolor commodo ornare. Sed arcu libero, malesuada quis justo sit amet, varius tempus
            neque. Quisque ultrices mi sed lorem condimentum, vel tempus lectus ultricies.
          </p>
        </div>
        <div className="w-full md:w-auto">
          <Image
            src="/images/subscription.png"
            width={600}
            height={600}
            alt="Job posting illustration"
            className="max-w-xs mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <PricingCard
          tier="BASIC"
          price="19"
          description="Praesent eget pulvinar orci. Duis at pellentesque ligula convallis."
          features={[
            "Post 1 Job",
            "Urgent & Featured Jobs",
            "Highlights Job with Colors",
            "Access & Saved 5 Candidates",
            "10 Days Resume Visibility",
            "24/7 Critical Support",
          ]}
        />

        <PricingCard
          tier="STANDARD"
          price="39"
          description="Praesent eget pulvinar orci. Duis at pellentesque ligula convallis."
          features={[
            "3 Active Jobs",
            "Urgent & Featured Jobs",
            "Highlights Job with Colors",
            "Access & Saved 10 Candidates",
            "20 Days Resume Visibility",
            "24/7 Critical Support",
          ]}
          recommended={true}
        />

        <PricingCard
          tier="PREMIUM"
          price="59"
          description="Praesent eget pulvinar orci. Duis at pellentesque ligula convallis."
          features={[
            "6 Active Jobs",
            "Urgent & Featured Jobs",
            "Highlights Job with Colors",
            "Access & Saved 20 Candidates",
            "30 Days Resume Visibility",
            "24/7 Critical Support",
          ]}
        />
      </div>
    </div>
  </div>
  )
}

export default PostJobPage;
