function Button(props) {
    return (
        <button key={props.i} className={props.classname} id={props.id}></button>
    );
}

export default Button;