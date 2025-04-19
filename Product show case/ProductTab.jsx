import Product from "./product.jsx";

function productTab() {
    let styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    };
    return (
        <div style={styles}>
            <h3></h3>
         <Product title="Logitech MX Master" idx={0}/>
         <Product title="Apple Pencil 2nd Gen" idx={1}/>
         <Product title="Zebronics" idx={2}/>
         <Product  title="Petronics Toad 23"idx={3}/>
        </div>
    );
}
export default productTab;