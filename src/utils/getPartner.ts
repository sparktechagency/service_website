/* eslint-disable @typescript-eslint/no-explicit-any */

const getPartner = (participants: any[], currentAuthId: string) => {
    const partner = participants?.find((cv)=> cv?._id !== currentAuthId);
    return partner;
}

export default getPartner;