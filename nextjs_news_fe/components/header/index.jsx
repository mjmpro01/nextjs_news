import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from "next/image"

import { gifs } from "@/assets/gifs"
import { images } from "@/assets/images"
import { menuList } from '@/constants/menuList'

import DrawerMenu from '../drawer-menu'


const Header = () => (
  <header className='relative'>
    <DrawerMenu />

    <div className="flex justify-center md:justify-between items-center h-[85px] p-[16px]">
      <Image
        src={images.logo}
        width={1020}
        height={261}
        alt="logo"
        className="w-[172px] md:w-[230px] h-[44px] md:h-[60px]"
      />
      <Image
        src={gifs.banner1}
        width={818}
        height={75}
        alt="banner1"
        className='w-auto md:block hidden'
      />
    </div>

    <div className='p-[10px] md:hidden flex items-center bg-[#0765ff]'>
      <input className='text-[16px] p-[2px_10px] flex-1 outline-none' />
      <div className='flex justify-center items-center size-[28px] bg-red-500'>
        <MagnifyingGlassIcon className='w-[18px] text-white' />
      </div>
    </div>

    <ul className="list-none md:flex md:items-center md:flex-wrap grid grid-cols-2 gap-[8px] md:bg-[#0765ff] text-white p-[10px]">
      {menuList.map((item, index) => (
        <li className="flex items-center justify-center md:justify-start gap-[4px] p-[10px] bg-[#0765ff] md:bg-none" key={index}>
          {item.icon}
          <p className='text-[13px] md:text-[0.9rem] whitespace-nowrap'>
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  </header>
)

export default Header