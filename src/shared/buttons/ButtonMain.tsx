import React from 'react'

interface Props extends React.ComponentProps<'button'> {
  variant?: 'brand' | 'light'
}

const ButtonMain = (props: Props) => {
  const {children, variant = 'brand', className} = props
  const theme = variant === 'brand' ? 'bg-green border-green hover:text-green hover:bg-[white]' : 'bg-[white] text-green border-[white] hover:text-[white] hover:bg-green'
  return (
    <button {...props} className={`border-2 rounded-md py-2 px-8 font-medium transition ${theme} ${className}`}>
      {children}
    </button>
  )
}

export default ButtonMain