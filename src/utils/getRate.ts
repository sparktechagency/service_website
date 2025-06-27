import { rateOptions } from "@/data/job.options";


const getRate = (rate: string) => {
    const result = rateOptions.find((item)=> item.value === rate);   
    return result?.label;
}

export default getRate;