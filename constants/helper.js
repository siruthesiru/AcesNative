export const formatDate = (inputDate) => {
    const eventDate = new Date(inputDate);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return eventDate.toLocaleString('en-US', options);
}