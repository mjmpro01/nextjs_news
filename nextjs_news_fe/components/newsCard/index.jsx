import clsx from 'clsx'
import Image from 'next/image'

import { images } from '@/assets/images'

const NewsCard = ({
  isHorizontal = false,
  bigThumbHorizontal = false,
  hasThumbnail = true,
  hasDate = false,
  hasExcerpt = true,
  titleLarge = false,
  titleSmall = true,
}) => {
  if (isHorizontal) {
    return (
      <div className='table px-[10px] py-[7px] has-hover'>
        <div className={clsx(
          'table-cell h-auto align-middle overflow-hidden',
          bigThumbHorizontal ? 'w-[30%]' : 'w-[20%] py-[10px]'
        )}>
          <Image
            src={images.samsung}
            width={300}
            height={168}
            alt=''
            className={clsx(
              'w-full object-cover object-center',
              { 'aspect-square': !bigThumbHorizontal }
            )}
          />
        </div>
        <div className='table-cell pl-[10px]'>
          <h5 className={clsx(
            'my-[2px]',
            titleSmall ? 'text-[15px]' : titleLarge ? 'text-[21px]' : 'text-[18px]'
          )}>
            Dịch vụ xóa xác minh tài khoản google trên điện thoại Android
          </h5>
          {hasDate &&
            <p className='text-[10px] text-[#0A0A0A]'>
              13/11/2018
            </p>
          }
          {hasExcerpt &&
            <p className='text-[13px] text-[#0A0A0A] pt-[10px] my-[1px]'>
              ICloud là hệ thống lưu trữ điện toán đám mây nhằm đồng bộ các dữ liệu như: hình ảnh, iTunes, Danh bạ, Lịch, Ghi chú, Tài liệu, Lời nhắc...
            </p>
          }
        </div>
      </div>
    )
  }

  return (
    <div className='px-[10px] has-hover'>
      {hasThumbnail &&
        <div className='overflow-hidden'>
          <Image src={images.icloudThumb} width={960} height={480} alt='' />
        </div>
      }
      <div className='py-[7px]'>
        <h5 className={clsx(
          'my-[2px]',
          titleSmall ? 'text-[15px]' : titleLarge ? 'text-[21px]' : 'text-[18px]'
        )}>
          Hướng dẫn tạo tài khoản icloud trên iphone/ipad
        </h5>
        {hasDate &&
          <p className='text-[10px] text-[#0A0A0A]'>
            13/11/2018
          </p>
        }
        {hasExcerpt &&
          <p className='text-[13px] text-[#0A0A0A] pt-[10px] my-[1px]'>
            ICloud là hệ thống lưu trữ điện toán đám mây nhằm đồng bộ các dữ liệu như: hình ảnh, iTunes, Danh bạ, Lịch, Ghi chú, Tài liệu, Lời nhắc...
          </p>
        }
      </div>
    </div>
  )
}

export default NewsCard