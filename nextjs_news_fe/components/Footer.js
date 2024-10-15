import Image from "next/image"
import Link from "next/link"

import categoriesApi from "@/apis/categories"
import { getLogo } from "@/apis/logo"
import { images } from "@/assets/images"
import { paths } from "@/constants/paths"

const Footer = async () => {
  const categories = await categoriesApi.getCategories();
  const logo = await getLogo();

  return (
    <footer>
      <div className="w-full border-b border-b-[#CCC] my-[10px]" />
      <div className="flex flex-col md:grid md:grid-cols-[1fr_250px_250px_250px] md:mx-[-16px]">
        <div className="p-[16px] w-full">
          <Image
            src={logo || images.logo}
            alt="logo"
            width={230}
            height={60}
            className="w-[230px] h-auto aspect-[23/6] mb-2"
          />
          <p className="text-[18px] leading-[32px] text-orange-500 mb-[10px]">
            Nơi chia sẻ thông tin công nghệ & đời sống
          </p>
          <ul className="list-none">
            <li className="text-base font-bold leading-[20px] text-[#333] py-[7px]">
              Được quản lý bởi công ty công nghệ Big code
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              Địa chỉ: L17-11 Tầng 17, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, P Bến Nghé, Q1, TPHCM
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              GPDK: 0317912848 – SKHDT TPHCM cấp ngày 03/07/2023
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <address>
                Hotline: <a href="tel:0935.319.739" className="!text-blue-500">0935.319.739</a> – Email: <a href="mailto:hotro@xomnhau.com" className="!text-blue-500">hotro@xomnhau.com</a>
              </address>
            </li>
          </ul>
        </div>

        <div className="p-[16px] w-full">
          <p className="text-[20px] leading-[32px] text-orange-500 mb-[10px]">
            Xomnhau.com
          </p>
          <ul className="list-none">
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={paths.HOME}>
                Trang chủ
              </Link>
            </li>
            {categories?.map((category, index) => (
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]" key={index}>
                <Link href={`/${category?.attributes?.slug}`} >
                  {category?.attributes?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-[16px] w-full">
          <p className="text-[20px] leading-[32px] text-orange-500 mb-[10px]">
            Thành viên
          </p>
          <ul className="list-none">
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.timcaigi.com'} passHref target="_blank">
                Timcaigi.com
              </Link>
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.gober.vn'} passHref target="_blank">
                Gober.vn
              </Link>
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.chothongminh.vn'} passHref target="_blank">
                Chothongminh.vn
              </Link>
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.detmayvietnam.vn'} passHref target="_blank">
                Detmayvietnam.vn
              </Link>
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.aimuanhadat.vn'} passHref target="_blank">
                Aimuanhadat.vn
              </Link>
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.xuongmaysaigon.com'} passHref target="_blank">
                Xuongmaysaigon.com
              </Link>
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.xomnhau.com'} passHref target="_blank">
                Xomnhau.com
              </Link>
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              <Link href={'https://www.bigcode.vn'} passHref target="_blank">
                Bigcode.vn
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-[16px] w-full">
          <p className="text-[20px] leading-[32px] text-orange-500 mb-[10px]">
            Thông tin
          </p>
          <ul className="list-none">
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              Điều khoản & quy định
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              Bảo mật & riêng tư
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              Thông tin liên hệ
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              Liên kết MXH
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              Tuyển dụng việc làm
            </li>
            <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
              Hợp tác xóm nhậu
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer