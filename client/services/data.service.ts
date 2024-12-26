export const getDate = (date: string):string => {
    const data = new Date(date)
    const year = data.getFullYear()
    const month = data.getMonth()
    const day = data.getDate()
    const hour = data.getHours()
    const minute = data.getMinutes()
    return `${day}/${month}/${year} ${hour}:${minute}`
}