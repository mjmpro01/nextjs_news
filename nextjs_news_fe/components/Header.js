import Image from "next/image"
import Link from 'next/link'

import categoriesApi from '@/apis/categories'
import { getHeaderBanner } from '@/apis/headerBanner'
import { getLogo } from '@/apis/logo'
import { images } from "@/assets/images"
import DrawerMenu from '@/components/DrawerMenu'
import { menuList } from '@/constants/menuList'
import { paths } from '@/constants/paths'

import HeaderMenu from './HeaderMenu'

const Header = async () => {
  const categories = await categoriesApi.getCategories();
  const logo = await getLogo();
  const { url, link } = await getHeaderBanner();

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
    <header className='inline'>
      <DrawerMenu mappedMenuList={mappedMenuList} />

      <div className="flex justify-center md:justify-between items-center h-[85px] px-[16px] md:px-0 py-[16px] gap-[20px] shadow-[1px_1px_10px_rgba(0,0,0,.15)] md:shadow-none">
        <Link href={paths.HOME}>
          <Image
            src={logo || images}
            width={1020}
            height={261}
            alt="logo"
            className="w-[172px] md:w-[230px] h-[44px] md:h-[60px]"
          />
        </Link>
        <Link href={link} target="_blank">
          <Image
            src={url}
            width={818}
            height={75}
            alt="banner1"
            className='md:block hidden p-[10px]'
          />
        </Link>
      </div>

      <HeaderMenu mappedMenuList={mappedMenuList} />
    </header>
  )
}

export default Header