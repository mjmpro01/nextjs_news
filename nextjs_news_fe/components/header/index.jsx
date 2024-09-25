import { BuildingOffice2Icon, BuildingOfficeIcon, CakeIcon, CalendarDaysIcon, DevicePhoneMobileIcon, GlobeAsiaAustraliaIcon, HomeIcon, ShoppingBagIcon, SparklesIcon, TruckIcon } from '@heroicons/react/24/solid'
import Image from "next/image"

import { gifs } from "@/assets/gifs"
import { images } from "@/assets/images"

const Header = () => (
  <header>
    <div className="flex justify-between items-center h-[85px] p-[16px]">
      <Image src={images.logo} width={1020} height={261} alt="logo" className="w-[230px] h-[60px]" />
      <Image src={gifs.banner1} width={818} height={75} alt="banner1" className='w-auto' />
    </div>
    <div className="bg-[#0765ff] text-white">
      <ul className=" list-none flex items-center flex-wrap gap-[8px]">
        <li className="flex items-center gap-[4px] p-[10px]" key={1}>
          <HomeIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Trang chủ
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={2}>
          <DevicePhoneMobileIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Công nghệ
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={3}>
          <GlobeAsiaAustraliaIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Du lịch
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={4}>
          <CakeIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Ăn uống
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={5}>
          <ShoppingBagIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Mua sắm
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={6}>
          <TruckIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Xe cộ
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={7}>
          <SparklesIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Làm đẹp
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={8}>
          <BuildingOfficeIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Bất động sản</p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={9}>
          <BuildingOffice2Icon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Doanh nghiệp
          </p>
        </li>
        <li className="flex items-center gap-[4px] p-[10px]" key={10}>
          <CalendarDaysIcon width={18} />
          <p className='text-[0.9rem] whitespace-nowrap'>
            Sự kiện
          </p>
        </li>
      </ul>
    </div>
  </header>
)

export default Header