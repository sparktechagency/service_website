import { educationOptions } from "@/data/job.options";


const getEducation = (education: string) => {
    const result = educationOptions.find((item)=> item.value === education);   
    return result?.label;
}

export default getEducation;
