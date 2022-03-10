const Card = (props) => {
    const classes = 'divide-y divide-gray-200 ' + props.className;

    return (<ul role="list" className={classes}>{props.children}</ul>)
}

export default Card;