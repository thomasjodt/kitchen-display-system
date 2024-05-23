interface Props {
  size?: number
  color?: string
}

export const CrossIcon: React.FC<Props> = function ({ size, color = 'currentColor' }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </svg>
  )
}
