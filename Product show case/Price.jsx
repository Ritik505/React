export default function Price({oldPrice, newPrice }){
    let oldStyles = {
        textDecoration: "line-through",
        color: "red",
    };
    let newStyles = {
        color: "green",
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "#e0c367",
        height: "50px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    };
    return(
        <div style={styles}>
            <span style={{oldStyles}}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}