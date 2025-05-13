import SectionHeader from '../Trainers/SectionHeader'
import PurchaseList from './PurchaseList'

function Purchase() {
  return (
    <section id="purchase" className="text-center">
      <div className="container">
        <SectionHeader
          title="PURCHASE FROM US"
          description="Lorem Ipsun is not simply random text. It has roots in a piece of classical at Hampden-Sydney College."
        />
        <PurchaseList />
      </div>
    </section>
  )
}

export default Purchase