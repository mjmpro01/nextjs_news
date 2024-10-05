import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  CakeIcon,
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  GlobeAsiaAustraliaIcon,
  ShoppingBagIcon,
  SparklesIcon,
  TruckIcon,
} from '@heroicons/react/24/solid'

export const menuList = [
  {
    id: 1,
    icon: <DevicePhoneMobileIcon className='w-[14px] md:w-[18px]' />,
    name: "Công nghệ",
    slug: "cong-nghe",
  },
  {
    id: 2,
    icon: <GlobeAsiaAustraliaIcon className='w-[14px] md:w-[18px]' />,
    name: "Du lịch",
    slug: "du-lich",
  },
  {
    id: 3,
    icon: <CakeIcon className='w-[14px] md:w-[18px]' />,
    name: "Ăn uống",
    slug: "an-uong"
  },
  {
    id: 4,
    icon: <ShoppingBagIcon className='w-[14px] md:w-[18px]' />,
    name: "Mua sắm",
    slug: "mua-sam"
  },
  {
    id: 5,
    icon: <TruckIcon className='w-[14px] md:w-[18px]' />,
    name: "Xe cộ",
    slug: "xe-co"
  },
  {
    id: 6,
    icon: <SparklesIcon className='w-[14px] md:w-[18px]' />,
    name: "Làm đẹp",
    slug: "lam-dep",
  },
  {
    id: 7,
    icon: <BuildingOfficeIcon className='w-[14px] md:w-[18px]' />,
    name: "Bất động sản",
    slug: "bat-dong-san"
  },
  {
    id: 8,
    icon: <BuildingOffice2Icon className='w-[14px] md:w-[18px]' />,
    name: "Doanh nghiệp",
    slug: "doanh-nghiep"
  },
  {
    id: 9,
    icon: <CalendarDaysIcon className='w-[14px] md:w-[18px]' />,
    name: "Sự kiện",
    slug: "su-kien"
  },
]
