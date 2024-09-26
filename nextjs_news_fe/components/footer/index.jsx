import Image from "next/image"

import { images } from "@/assets/images"

const Footer = () => (
  <footer>
    <div className="w-full border-b border-b-[#CCC] my-[10px]" />
    <div className="flex mx-[-16px]">
      <div className="p-[16px] w-1/3">
        <p className="text-[20px] leading-[32px] text-[#c11a2b] mb-[10px]">
          Công ty TNHH Giải pháp Công nghệ Trí Anh
        </p>
        <ul className="list-none">
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Tầng 4, Tòa nhà The Prince Residence <br />
            Số 17-19-21 Nguyễn Văn Trỗi, P. 11, Q. Phú Nhuận, TPHCM
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            028 9999 8899 và 1900 272777
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            sales@trianh.vn
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Bảo hành suốt thời gian sử dụng
          </li>
        </ul>
      </div>

      <div className="p-[16px] w-1/3">
        <p className="text-[20px] leading-[32px] text-[#c11a2b] mb-[10px]">
          Hỗ trợ khách hàng
        </p>
        <p className="text-[13px] leading-[20px] text-[#333] py-[7px] font-bold">
          Hotline Sale
        </p>
        <ul className="list-none">
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            028 9999 9999
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            028 9999 9999
          </li>
        </ul>

        <p className="text-[13px] leading-[20px] text-[#333] py-[7px] font-bold">
          Email Sale
        </p>

        <p className="text-[13px] leading-[20px] text-[#333] py-[7px]">
          sale@gmail.com
        </p>

        <p className="text-[20px] leading-[32px] text-[#c11a2b] mb-[10px]">
          Kết nối với chúng tôi
        </p>
        <ul className="list-none flex items-center gap-[5px]">
          <li>
            <Image src={images.facebook} alt="" width={40} height={40} className="w-[40px] h-[40px]" />
          </li>
          <li>
            <Image src={images.mail} alt="" width={40} height={40} className="w-[40px] h-[40px]" />
          </li>
          <li>
            <Image src={images.phone} alt="" width={40} height={40} className="w-[40px] h-[40px]" />
          </li>
          <li>
            <Image src={images.youtube} alt="" width={40} height={40} className="w-[40px] h-[40px]" />
          </li>
        </ul>
      </div>

      <div className="p-[16px] w-1/3">
        <p className="text-[20px] leading-[32px] text-[#c11a2b] mb-[10px]">
          Chính sách và quy định chung
        </p>
        <ul className="list-none">
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Chính sách bảo vệ thông tin cá nhân
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Điều khoản sử dụng
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Quyền và nghĩa vụ
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Phương thức thanh toán
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Chính sách bảo hành
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Chính sách Email Marketing
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Chính sách hỗ trợ khách hàng
          </li>
          <li className="text-[13px] leading-[20px] text-[#333] py-[7px]">
            Liên hệ
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer