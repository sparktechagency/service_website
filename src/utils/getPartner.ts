
import { TParticipant } from "@/types/participant.type";

const getPartner = (participants: TParticipant[], currentAuthId: string) => {
    const partner = participants?.find((cv)=> cv?._id !== currentAuthId);
    return partner;
}

export default getPartner;