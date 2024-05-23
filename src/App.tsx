import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { useForm } from '@/hooks'
import { orderTypes } from '@/data'
import { add } from '@/context/slices'
import { InboxIcon } from '@/components/icons'
import { Button, Card, Input, Modal, Select } from '@/components/ui'
import type { Order, Product, RootState } from '@/types'

export const App: React.FC = function App () {
  const dispatch = useDispatch()
  const { orders } = useSelector((state: RootState) => state.orders)

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  // --- Agregar los productos ---
  const [productName, setProductName] = useState<string | null>(null)

  const handleProductName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProductName(e.target.value)
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

  // Manejo del formulario
  const { form, handleChange, reset } = useForm<Order>({
    customerName: '',
    date: '',
    id: 0,
    isDone: false,
    products: [],
    type: 'Delivery'
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    form.products = products
    form.id = Date.now()
    form.date = new Date().toISOString()

    dispatch(add(form))

    setIsDialogOpen(false)
    reset()
    setProducts([])
  }

  return (
    <Wrapper>
      <Header>
        <Title>Kitchen Display System</Title>
        <Button
          text='Crear Orden'
          onClick={() => { setIsDialogOpen(true) }}
        />
      </Header>
      <Container>
        {
          (orders?.length) === 0 && (
            <div style={{ marginInline: 'auto', fontWeight: 600, marginTop: 50 }}>
              <div style={{ textAlign: 'center' }}><InboxIcon size={100} /></div>
              <p style={{ fontSize: 24 }}>Aún no hay pedidos</p>
            </div>
          )
        }

        {
          orders.map(order => (
            <Card key={order.id} order={order} />
          ))
        }

      </Container>

      {isDialogOpen && createPortal(
        <Modal
          title='Create an Order'
          open={isDialogOpen}
          onClose={() => { setIsDialogOpen(false) }}
        >

          <form onSubmit={handleSubmit}>
            <main style={{ display: 'grid', placeContent: 'stretch' }}>
              <Input
                name='customerName'
                label='Nombre'
                placeholder='John Doe'
                value={form.customerName}
                onChange={handleChange}
              />

              <Select value={form.type} name='type' label='Tipo de entrega' onChange={handleChange}>
                {orderTypes.map(type => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>

              <Input
                name='products'
                label='Productos'
                placeholder='Tomate'
                onChange={handleProductName}
                value={productName ?? ''}
                buttonText='Agregar'
                buttonAction={handleAddProducts}
              />

              <div style={{ display: 'flex', gap: 8 }}>
                {products.map(product => (
                  <ProductChip key={product.name}>{product.name}</ProductChip>
                ))}
              </div>

            </main>

            <footer style={{ marginTop: 16 }}>
              <Button type='submit' text='Crear orden' />
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

const ProductChip = styled.span`
  border-radius: 999px;
  background-color: rgba(31, 88, 148, 0.8);
  color: white;
  padding-block: 2px;
  padding-inline: 8px;
  font-size: 14px;
`
