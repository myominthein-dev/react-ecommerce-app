import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`w-full lg:max-w-[1200px] flex-grow px-3  mx-auto  ${className}`}>
        {children}
    </div>
  )
}

export default Container