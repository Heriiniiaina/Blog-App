export const getDate = (date: string):string => {
    const data = new Date(date)
    const year = data.getFullYear()
    const month = data.getMonth() +1
    const day = data.getDate()
    const hour = data.getHours()
    const minute = data.getMinutes()
    return `${day.toString().padStart(2,"0")}/${month.toString().padStart(2,"0")}/${year} ${hour}:${minute}`
}