export const onInputValid = (link: string) => {
    if (!link.length) return 'Поле обязательно для заполнения'
    const regex = new RegExp(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/)
    if(!regex.test(link)) return 'Ссылка должна соответствовать формату http(s)://google.com и не должна содержать пробелы'
    return ''
}