import { patternOptions } from "@/data/job.options";

const getPattern = (pattern: string) => {
    const result = patternOptions.find((item)=> item.value === pattern);   
    return result?.label;
}

export default getPattern;