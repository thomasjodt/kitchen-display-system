import type { Product } from '@/types'
import styled from 'styled-components'

interface Props {
  product: Product
}

export const ProductElement: React.FC<Props> = function ({ product }) {
  return (
    <Container>
      <section>
        <p>{product.name}</p>
        <Comment>{product?.comment}</Comment>
      </section>
      <p>{product.quantity}</p>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  padding-inline: 12px;
  font-weight: 500;
  background-color: #CED6DF;
  border-radius: 8px;
  margin-inline: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`
const Comment = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #75A5BD;

`
