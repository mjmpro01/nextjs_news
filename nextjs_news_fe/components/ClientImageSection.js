'use client'

import Image from 'next/image'

const ClientImageSection = ({ src, width, height, className }) => (
  <Image
    src={src || ''}
    width={width}
    height={height}
    alt=""
    className={`w-full ${className}`}
  />
)

export default ClientImageSection