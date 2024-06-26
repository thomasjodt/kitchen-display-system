interface Props {
  size?: number
}

export const InboxIcon: React.FC<Props> = function ({ size = 24 }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' />
      <path d='M4 13h3l3 3h4l3 -3h3' />
    </svg>
  )
}
