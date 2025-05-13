import PurchaseCard from './PurchaseCard'
import products from './purchaseData'

function PurchaseList() {
  return (
    <div id="purchase-container">
      {products.map((item, i) => (
        <PurchaseCard key={i} {...item} />
      ))}
    </div>
  )
}

export default PurchaseList