import { experienceOptions } from "@/data/job.options";



const getExperience = (experience: string) => {
    const result = experienceOptions.find((item)=> item.value === experience);   
    return result?.label;
}

export default getExperience;
