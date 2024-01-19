import { Link } from "react-router-dom";
import { BgShoes } from "../../../../ArrayShoes";
import { FilterProducts, GridBottom, ShoppingCart } from "../icons/Icons";
import './ShoesList.css';

function ShoesList() {
  
  return (

<>
    <strong className="prayer">La calidad de sus materiales, los colores alegres, sus diseños cómodos, la variedad de estilos y su inconfundible olor a chicle, los hace el calzado infantil favorito.</strong>
    <div className="view">
      <div className="filter">
        <button className="filterProducts">Filtrar<FilterProducts/></button>
      </div>
    <div className="filterTwo">
      <div className="products">
        <span className="shoesPair">30 Pares en total</span>
      </div>
      <div className="display">
        <span className="displaySpan">Visualización: </span>
        <div className="displayX4">
      <button className="displayX4"><GridBottom/> X4</button>
        </div>
        <div className="displayX5">
        <button className="displayX5"><GridBottom/> X5</button>
        </div>
      </div>
      <div className="filterPrice">
        <select className="selectFilter">
          <option value="#">Mas Relevante</option>
          <option value="#">Menor Precio</option>
          <option value="#">Mayor Precio</option>
          <option value="#">A - Z</option>
          <option value="#">Z - A</option>
          <option value="#">Mas Nuevo</option>
          <option value="#">Descuentos</option>
        </select>
      </div>
      </div>
    </div>

    <div className="ShopShoes">
      {BgShoes.map((zapato, index) => (
        <div key={index}>
          <div className="content">
            <div className="contentImage">
            <img className="shoeImage" src={zapato.imagen} alt={`Zapato ${index + 1}`} />
             <Link><ShoppingCart /></Link> 
            </div>
            <div className="information">
              <h5 className="titleBubble">Bubble Gummers</h5>
              <p className="description">{zapato.descripcion}</p>
              <p className="price">Precio: ${zapato.precio.toFixed(2)}
              
              <label className="sizeAvailable" htmlFor={`tallaSelect-${index}`}>
                <strong className="titleSize">Tallas: </strong>
              <select className="selectSize" id={`tallaSelect-${index}`}>
                {zapato.tallas.map((talla, tallaIndex) => (
                  <option className="optionSize" key={tallaIndex} value={talla}>
                    {talla}
                  </option>
                ))}
              </select>
              </label>
              
              </p>
            </div>
          
          </div>
          
        </div>
      ))}
    </div>
</>
  );
}


export default ShoesList;
