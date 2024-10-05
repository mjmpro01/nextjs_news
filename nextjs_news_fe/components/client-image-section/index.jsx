'use client'

import Image from 'next/image'
import React from 'react'

const ClientImageSection = ({ src, width, height, className }) => {
  return (
    <Image src={src || ''} width={width} height={height} alt="" className={`w-full ${className}`} />
  )
}

export default ClientImageSection