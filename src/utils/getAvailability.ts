import { typeOptions } from "@/data/job.options";

const getAvailability = (availability: string[]) => {
    const result = availability?.map((cv)=>{
        const find = typeOptions.find((item)=> item.value ===cv);
        if(find){
            return find.label;
        }
    })

    return result;
}

export default getAvailability;