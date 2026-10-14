function Product({ title, price, discount = 0 }) {
  
  const finalPrice = price - (price * discount) / 100;

  return (
    <div className="product">
      <h3>{title}</h3>
      <p>
        Цена: <strong>{finalPrice.toFixed(2)} ₽</strong>
      </p>

      {discount > 0 && (
        <p>
          <s>{price.toFixed(2)} ₽</s> — Скидка: {discount}%
        </p>
      )}
    </div>
  );
}

export default Product;