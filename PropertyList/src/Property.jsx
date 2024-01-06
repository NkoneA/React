import "./Property.css";

export default function Property({name, rating, price, id}){
    return (
        <div className="Property"> 
             <h2>{name}</h2>
             <h3>{'\u2B50'} {rating}</h3>
             <h4>${price}/night</h4>
        </div>
    )
   
}
