import './product.css';

// props passed down to child
// note key is a reserved word. if it needs to be passd down as a
// prop it has to be done using a different word
export const Product = ({id, name}) => {
    return (
        <div className="p">
            <span>Project name is {name}</span><br />
            <span>Project id is {id}</span>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
        </div>
    )
}
