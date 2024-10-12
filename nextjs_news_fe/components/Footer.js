import Image from "next/image"
import Link from "next/link"

import categoriesApi from "@/apis/categories"
import { images } from "@/assets/images"
import { paths } from "@/constants/paths"

const Footer = async () => {
  const categories = await categoriesApi.getCategories();


  return (
    <footer>
      <div className="w-full border-b border-b-[#CCC] my-[10px]" />
      <div className="flex flex-col md:grid md:grid-cols-[1fr_250px_250px_250px] md:mx-[-16px]">
        <div className="p-[16px] w-full">
          <Image
            src={images.logo}
            alt="logo"
            width={230}
            height={60}
            className="w-[230px] h-auto aspect-[23/6] mb-2"
          />
          <p className="text-[18px] leading-[32px] text-[#c11a2b] mb-[10px]">
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
          <p className="text-[20px] leading-[32px] text-[#c11a2b] mb-[10px]">
            Xomnhau.com
          </p>
          <ul className="list-none">
            <Link href={paths.HOME}>
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Trang chủ
              </li>
            </Link>
            {categories?.map((category, index) => (
              <Link href={`/${category?.slug}`} key={index} >
                <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                  {category?.attributes?.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="p-[16px] w-full">
          <p className="text-[20px] leading-[32px] text-[#c11a2b] mb-[10px]">
            Thành viên
          </p>
          <ul className="list-none">
            <Link href={'https://www.timcaigi.com'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Timcaigi.com
              </li>
            </Link>
            <Link href={'https://www.gober.vn'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Gober.vn
              </li>
            </Link>
            <Link href={'https://www.chothongminh.com'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Chothongminh.vn
              </li>
            </Link>
            <Link href={'https://www.detmayvietnam.com'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Detmayvietnam.vn
              </li>
            </Link>
            <Link href={'https://www.aimuanhadat.com'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Aimuanhadat.vn
              </li>
            </Link>
            <Link href={'https://www.xuongmaysaigon.com'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Xuongmaysaigon.com
              </li>
            </Link>
            <Link href={'https://www.xomnhau.com'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Xomnhau.com
              </li>
            </Link>
            <Link href={'https://www.bigcode.com'} passHref target="_blank">
              <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
                Bigcode.vn
              </li>
            </Link>
          </ul>
        </div>

        <div className="p-[16px] w-full">
          <p className="text-[20px] leading-[32px] text-[#c11a2b] mb-[10px]">
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