import React from 'react'

interface Props extends React.ComponentProps<'div'> {}

const Modal = (props: Props) => {
  const {children} = props
  return (
    <div className='bg-blackTransparent w-full h-full absolute z-50 flex items-center justify-center'>
      {children}
    </div>
  )
}

export default Modal