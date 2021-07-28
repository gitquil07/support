export const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(":");

    return `${hours} ч. ${minutes} м.`;
}
