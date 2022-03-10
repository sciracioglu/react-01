

const Date = (props) => {
    const month = props.date.toLocaleString('tr-TR',{month:'long'});
    const day = props.date.toLocaleString('tr-TR',{day:'2-digit'});
    const year = props.date.getFullYear();
    return <time dateTime={day+' '+month+' '+year}>{day} {month} {year}</time>
}

export default Date;