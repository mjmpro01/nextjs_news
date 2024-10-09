import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from "next/image"
import Link from 'next/link'

import { getCategories } from '@/apis/categories'
import { getHeaderBanner } from '@/apis/headerBanner'
import { getLogo } from '@/apis/logo'
import { images } from "@/assets/images"
import DrawerMenu from '@/components/DrawerMenu'
import { menuList } from '@/constants/menuList'
import { paths } from '@/constants/paths'

const Header = async () => {
  const categories = await getCategories();
  const logo = await getLogo();
  const headerBanner = await getHeaderBanner();

  const mappedMenuList = categories.map((category) => {
    const menuItem = menuList.find(item => item?.id?.toString() === category?.id?.toString());
    return {
      id: category?.id,
      name: category?.attributes?.name,
      icon: menuItem?.icon,
      slug: category?.attributes?.slug
    };
  });

  return (
    <header className='relative'>
      <DrawerMenu />

      <div className="flex justify-center md:justify-between items-center h-[85px] px-[16px] md:px-0 py-[16px]">
        <Link href={paths.HOME}>
          <Image
            src={logo || images}
            width={1020}
            height={261}
            alt="logo"
            className="w-[172px] md:w-[230px] h-[44px] md:h-[60px]"
          />
        </Link>
        <Image
          src={headerBanner}
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
        <Link href={paths.HOME}>
          <li className="flex items-center justify-center md:justify-start gap-[4px] p-[10px] bg-[#0765ff] md:bg-none">
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
            <li className="flex items-center justify-center md:justify-start gap-[4px] p-[10px] bg-[#0765ff] md:bg-none" >
              <div className='w-[14px] md:w-[18px]'>
                {item.icon}
              </div>
              <p className='text-[13px] md:text-[0.9rem] whitespace-nowrap'>
                {item.name}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </header>
  )
}

export default Header