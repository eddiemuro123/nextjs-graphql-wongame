import Profile from 'templates/Profile'

import ordersMock from 'components/OrderList/mock'
import OrderList, { OrderListProps } from 'components/OrderList'

const Orders = ({ items }: OrderListProps) => {
  return (
    <Profile>
      <OrderList items={items} />
    </Profile>
  )
}

export default Orders

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}
