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
      {/* <div className='p-[10px] md:hidden flex items-center bg-[#0765ff]'>
        <input className='text-[16px] p-[2px_10px] flex-1 outline-none' />
        <div className='flex justify-center items-center size-[28px] bg-red-500'>
          <MagnifyingGlassIcon className='w-[18px] text-white' />
        </div>
      </div> */}

      <div className={clsx(
        "md:sticky md:top-0 z-10",
        pathname === paths.HOME ? "block" : "hidden md:block"
      )}>
        <ul className="list-none md:flex md:items-center md:flex-wrap grid grid-cols-2 gap-[8px] md:bg-[#0765ff] text-white px-[10px] py-[10px] md:py-0">
          <Link href={paths.HOME}>
            <li className="flex items-center justify-center md:justify-start gap-[4px] p-[10px] bg-[#0765ff] md:bg-none hover:bg-[#1b3a6b]">
              <div className='w-[14px] md:w-[18px]'>
                <HomeIcon className='w-[14px] md:w-[18px]' />
              </div>
              <p className='text-[13px] md:text-[0.9rem] whitespace-nowrap'>
                {"Trang chủ"}
              </p>
            </li>
          </Link>

          {mappedMenuList.map((item, index) => (
            <Link href={`/${item?.slug}`} key={index} >
              <li className="flex items-center justify-center md:justify-start gap-[4px] p-[10px] bg-[#0765ff] md:bg-none hover:bg-[#1b3a6b]" >
                {/* <div className='w-[14px] md:w-[18px]'>
                {item.icon}
              </div> */}
                <p className='text-[13px] md:text-[0.9rem] whitespace-nowrap'>
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