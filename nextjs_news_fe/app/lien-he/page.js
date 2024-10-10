import { genPageMetadata } from "../seo"

export const metadata = genPageMetadata({ title: 'Liên hệ' })

const Contact = () => (
  <div className="border border-[#CCC] my-[20px]">
    <div className="border-b border-b-[#CCC] p-[10px] bg-[#e9ecee]">
      <p className="text-[20px] text-[##3e4548]">
        Thông tin liên hệ
      </p>
    </div>

    <div className="grid grid-cols-3 gap-[10px] p-[10px]">
      <div className="text-[#0A0A0A] text-[14px] flex flex-col gap-[10px]">
        <p className="text-[16px]">
          Khu vực Hà Nội
        </p>
        <p>
          Email: hoangmanh89@gmail.com
        </p>
        <p>
          Hotline: <span className="text-red-500">Mr Mạnh 0906 018 389</span>
        </p>
        <p>
          Địa chỉ: P504 nhà B3 tập thể Vĩnh Hồ, Phường Thịnh Quang, quận Đống Đa, Hà Nội
        </p>
      </div>

      <div className="text-[#0A0A0A] text-[14px] flex flex-col gap-[10px]">
        <p className="text-[16px]">
          Khu vực HCM
        </p>
        <p>
          Hotline: <span className="text-red-500">Mr Thành 0948.693979</span>
        </p>
        <p>
          Địa chỉ: 1579A Đường 3 Tháng 2 – P16 – Q11
        </p>
      </div>

      <div className="text-[#0A0A0A] text-[14px] flex flex-col gap-[10px]">
        <p className="text-[16px]">
          Khu vực HCM
        </p>
        <p>
          Hotline: <span className="text-red-500">Mr Thành 0948.693979</span>
        </p>
        <p>
          Địa chỉ: 1579A Đường 3 Tháng 2 – P16 – Q11
        </p>
      </div>
    </div>
  </div>
)

export default Contact