import type { Order } from '@/types'
import { getHours } from '@/utils'
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
import { useDispatch } from 'react-redux'
import { remove } from '@/context/slices'

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
        <h1>{order.id}</h1>

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
        <button onClick={handleDone(order)}>Done</button>
        <button>Print</button>
      </Footer>
    </StyledCard>
  )
}
