import { typeOptions } from "@/data/job.options";


const getType = (type: string) => {
    const result = typeOptions.find((item)=> item.value === type);   
    return result?.label;
}

export default getType;
