import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css';

const Item = ({ id, title, price, pictureUrl, category, stock = 10 }) => {
  const [imageError, setImageError] = useState(false);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const [selectedSize, setSelectedSize] = useState('9'); // Valor predeterminado para zapatillas
  const { addItem, isInCart } = useContext(CartContext);
  
  // URL de imagen de respaldo
  const fallbackImageUrl = "https://placehold.co/300x300/e2e2e2/333?text=Imagen+no+disponible";

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      title,
      price,
      pictureUrl,
      category,
      size: category !== 'accesorios' ? selectedSize : null // Incluir talle solo si no es accesorio
    };
    addItem(item, quantity);
  };

  // Determinar si el producto es calzado basado en su categoría
  const isFootwear = ['running', 'casual', 'basketball', 'skate', 'training', 'lifestyle'].includes(category);
  
  // Opciones de talle según el tipo de producto
  const sizeOptions = isFootwear 
    ? ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'] // Talles US para zapatillas
    : ['S', 'M', 'L', 'XL']; // Talles para ropa

  return (
    <div className="item-card">
      <div className="card-img-container">
        <img 
          src={pictureUrl} 
          className="card-img-top product-image" 
          alt={title}
          width="300" // Added width attribute
          height="300" // Added height attribute
        />
      </div>
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-price">${price.toFixed(2)}</p>
        
        {/* Selector de talle (solo para productos que no son accesorios) */}
        {category !== 'accesorios' && (
          <div className="size-selector">
            <label htmlFor={`size-select-${id}`}>
              {isFootwear ? 'Talle US:' : 'Talle:'}
            </label>
            <select 
              id={`size-select-${id}`} 
              value={selectedSize} 
              onChange={(e) => setSelectedSize(e.target.value)}
              className="size-select"
            >
              {sizeOptions.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}
        
        <Link to={`/item/${id}`} className="item-detail-button">
          Ver detalle
        </Link>
        <div className="item-card-actions">
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        </div>
      </div>
    </div>
  );
};

export default Item;
