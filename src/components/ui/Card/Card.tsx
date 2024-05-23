import { useDispatch } from 'react-redux'
import { ProductElement } from '../ProductElement'
import {
  Time,
  Footer,
  Header,
  Details,
  StyledCard,
  OrderTypeChip,
  ProductsContainer
} from './components'
import { getHours } from '@/utils'
import type { Order } from '@/types'
import { remove } from '@/context/slices'
import { Button } from '@/components/ui'

interface Props {
  order: Order
}

export const Card: React.FC<Props> = function ({ order }) {
  const date = getHours(new Date(order.date))

  const dispatch = useDispatch()

  const handleDone = (order: Order) => {
    return () => {
      const isDone = confirm('¿Estás seguro de que la orden ya está lista?')
      if (isDone) dispatch(remove(order))
    }
  }

  return (
    <StyledCard>
      <Header>
        <h1>{order.customerName}</h1>

        <Details>
          <OrderTypeChip>{order.type}</OrderTypeChip>
          <Time>{date}</Time>
        </Details>
      </Header>

      <ProductsContainer>
        {order.products.map((product) => (
          <ProductElement
            key={product.name}
            product={product}
          />
        ))}
      </ProductsContainer>

      <Footer>
        <Button onClick={handleDone(order)} text='Done' />
        <button disabled>Print</button>
      </Footer>
    </StyledCard>
  )
}
