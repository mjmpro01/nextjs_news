'use client'

import { HomeIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { paths } from '@/constants/paths'

const HeaderMenu = ({ mappedMenuList }) => {
  const pathname = usePathname()

  return (
    <>
      {/* <div className='p-[10px] md:hidden flex items-center bg-white'>
        <input className='text-[16px] p-[2px_10px] flex-1 outline-none' />
        <div className='flex justify-center items-center size-[28px] bg-red-500'>
          <MagnifyingGlassIcon className='w-[18px] text-orange-500' />
        </div>
      </div> */}

      <div className={clsx(
        "hidden md:block md:sticky md:top-0 z-10",
        pathname === paths.HOME ? "block" : "hidden md:block",
        "border-b border- mb-4"
      )}>
        <ul className="list-none md:flex md:items-center md:flex-wrap grid grid-cols-2 justify-between md:bg-white text-black py-[10px] md:py-2">
          <Link href={paths.HOME}>
            <li className="flex items-end justify-center p-[10px] bg-white md:bg-none hover:underline underline-offset-4 gap-2">
              <div className='w-[14px] md:w-[18px]'>
                <HomeIcon className='w-[14px] md:w-[18px]' />
              </div>
              <p className='text-[15px] leading-[18px] whitespace-nowrap font-semibold'>
                {"Trang chủ"}
              </p>
            </li>
          </Link>

          {mappedMenuList.map((item, index) => (
            <Link href={`/${item?.slug}`} key={index} >
              <li className="flex items-end justify-center md:justify-start gap-[4px] p-[10px] bg-white md:bg-none hover:underline underline-offset-4" >
                {/* <div className='w-[14px] md:w-[18px]'>
                {item.icon}
              </div> */}
                <p className='text-[15px] leading-[18px] whitespace-nowrap font-semibold'>
                  {item.name}
                </p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>

  )
}

export default HeaderMenu