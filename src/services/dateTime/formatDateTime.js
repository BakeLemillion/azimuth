
export function fullDateTimeString(dateitem) {
    const date = new Date(dateitem)
    const hours = date.getHours();
    let minutes = date.getMinutes();
    const day = (date.getDate()) >= 10 ? `${(date.getDate())}` : `0${(date.getDate())}`
    const month = (date.getMonth() + 1) >= 10 ? `${(date.getMonth() + 1)}` : `0${(date.getMonth() + 1)}`
    minutes = minutes < 10 ? `0${  minutes}` : minutes;
    const strTime = `${hours  }:${  minutes}`;
    return `${date.getFullYear()  }-${  month  }-${   day }  ${  strTime}`;
}

