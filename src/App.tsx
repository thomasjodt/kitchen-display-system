import { styled } from 'styled-components'
import { /*  useDispatch, */ useSelector } from 'react-redux'

import type { RootState } from '@/context'
import { Card } from './components/ui/Card/Card'
// import { add } from './context/slices'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Input } from './components/ui/Input'
import { orderTypes } from '@/data'
import { Select } from './components/ui'
import type { Product } from './types'

export const App: React.FC = function App () {
  // const dispatch = useDispatch()
  const { orders } = useSelector((state: RootState) => state.orders)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  const [productName, setProductName] = useState<string | null>(null)
  const handleProductName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProductName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Lógica
    setIsDialogOpen(false)
  }

  const handleAddProducts = (productName: string | null): void => {
    if (productName === null) return

    const product: Product = {
      isDone: false,
      name: productName,
      quantity: 1,
      comment: ''
    }

    setProducts(p => [...p, product])
    setProductName(null)
  }

  return (
    <Wrapper>
      <Header>
        <Title>Kitchen Display System</Title>
        <button onClick={() => { setIsDialogOpen(true) }}>Add New Order</button>
      </Header>
      <Container>
        {
          orders.map(order => (
            <Card key={order.id} order={order} />
          ))
        }
      </Container>

      {isDialogOpen && createPortal(
        <Modal open={isDialogOpen}>
          <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Create an Order</h2>
            <button onClick={() => { setIsDialogOpen(false) }}>X</button>
          </header>

          <form onSubmit={handleSubmit}>
            <main style={{ display: 'grid', placeContent: 'stretch' }}>
              <Input name='name' label='Nombre' placeholder='John Doe' />

              <Select name='type' label='Tipo de entrega'>
                <option value='' hidden>Tipo de Entrega</option>
                {
                  orderTypes.map(type => (

                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))
                }
              </Select>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, alignItems: 'center' }}>
                <Input
                  name='products'
                  label='Productos'
                  placeholder='Tomato'
                  onChange={handleProductName}
                  value={productName ?? ''}
                />
                <button style={{ height: '3.2em' }} type='button' onClick={() => { handleAddProducts(productName) }}>Add</button>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                {products.map(product => (
                  <ProductChip key={product.name}>{product.name}</ProductChip>
                ))}
              </div>
            </main>

            <footer style={{ marginTop: 16 }}>
              <button>Crear orden</button>
            </footer>
          </form>
        </Modal>,
        document.body
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100vh;
  color: #fafafa;
  background-color: #353A47;
`
const Title = styled.h1`
`
const Container = styled.section`
  flex-grow: 1;
  min-height: 100%;
  display: flex;
  gap: 8px;
  padding-inline: 16px;
  overflow-x: auto;
`
const Header = styled.header`
  padding: 24px;
  margin-bottom: 48px;
  display: flex;
  justify-content: space-between;
`
const Modal = styled.dialog`
  position: absolute;
  inset: 0;
  margin: auto;
  min-width: 500px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2) ;
`

const ProductChip = styled.span`
  border-radius: 999px;
  background-color: rgba(31, 88, 148, 0.8);
  color: white;
  padding-block: 2px;
  padding-inline: 8px;
  font-size: 14px;
`
