import styled from 'styled-components'
import { CrossIcon } from '@/components/icons'

interface Props extends React.HTMLAttributes<HTMLDialogElement> {
  open?: boolean
  title?: string
  onOpen?: () => void
  onClose?: () => void
}

export const Modal: React.FC<Props> = function ({ children, open, title, onClose, ...props }) {
  return (
    <Dialog {...props} open={open}>
      <ModalHeader>
        <h2>{title}</h2>
        <CloseButton onClick={onClose}>
          <CrossIcon color='white' size={16} />
        </CloseButton>
      </ModalHeader>

      <main>{children}</main>
    </Dialog>
  )
}

const Dialog = styled.dialog`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 90%;
  max-width: 500px;
  border: transparent;
  border-radius: 16px;
  box-shadow: rgba(18, 111, 218, 0.1) 0px 50px 100px -20px, rgba(18, 111, 218, 0.1) 0px 30px 60px -30px;
`
const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

const CloseButton = styled.button`
  margin: 0;
  border: 0;
  padding: 0;
  background-color: #D50B52;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 150ms;

  &:hover {
    background-color: #9B083C;
  }
`
