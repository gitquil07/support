export const formatTime = (time: string): string => {

    const [hours, minutes] = time.split(":");

    return `${hours} ч. ${minutes} м.`;

}

export function getListCopy<Type>(list: Type[]): Type[]{

    return list.slice(0);
    
}