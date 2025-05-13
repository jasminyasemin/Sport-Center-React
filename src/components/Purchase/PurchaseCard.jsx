function PurchaseCard({ name, priceOld, priceNew, image }) {
  return (
    <div className="purchase-card">
      <div className="image-box">
        <img src={image} alt={name} />
      </div>
      <div className="price-box">
        <h5>{name}</h5>
        <p><span className="text-decoration-line-through">{priceOld}</span> / {priceNew}</p>
        <p className="cart1"><i className="fa-solid fa-cart-shopping"></i> Add to Cart</p>
      </div>
    </div>
  )
}

export default PurchaseCard