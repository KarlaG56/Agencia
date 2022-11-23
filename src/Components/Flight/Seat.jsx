function Seat({left, top, width}) {
    console.log(left)
    return (
        <>
            <button style={{'left':left, 'top':top, 'width':width, 'height':'20px', 'background-color':'red'}}></button>
        </>
    )
}

export default Seat;