"use client";


const ExperienceCard = ({experience}) => {
  return (
    <>
      <div className="relative pl-8 pb-8 group">
            {/* Timeline connector */}
            {index < experiences.length - 1 && (
              <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200 group-hover:bg-blue-200 transition-colors duration-300"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <Calendar size={14} className="text-blue-500 group-hover:text-white transition-colors duration-300" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
              <div className="flex flex-wrap gap-x-2 text-sm text-gray-600 mt-1">
                <span className="font-medium">{exp.company}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">{exp.period}</div>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          </div>
    </>
  )
}

export default ExperienceCard