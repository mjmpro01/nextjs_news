import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { urls } from '@/constants/urls'
import { lato, merriweather } from '@/utils/fonts'

import NewsThumbContent from './NewsThumbContent'


const NewsCard = ({
  data,
  isHorizontal = false,
  bigThumbHorizontal = false,
  hasThumbnail = true,
  hasDate = false,
  hasExcerpt = true,
  titleLarge = false,
  titleSmall = true,
}) => {
  const categorySlug = data?.attributes?.category?.data?.attributes?.slug || ''
  const newsUrl = `/${categorySlug}/${data?.attributes?.slug || ''}`

  const formattedDate = new Date(data?.attributes?.createdAt).toLocaleDateString()

  if (isHorizontal) {
    return (
      <Link href={newsUrl} >
        <div className='table px-[10px] py-[7px] has-hover relative'>
          <div className={clsx(
            'table-cell h-auto align-middle overflow-hidden rounded-[8px]',
            bigThumbHorizontal ? 'w-[30%]' : 'w-[20%] py-[10px]'
          )}>
            <Image
              src={`${urls.baseUrl}${data?.attributes?.avatar?.data?.attributes?.url || ''}`}
              width={300}
              height={168}
              alt=''
              className={clsx(
                'w-full object-cover object-center',
                !bigThumbHorizontal ? "aspect-square" : "aspect-[740/493]"
              )}
            />
          </div>
          <div className='pl-[10px]'>
            <h3 className={clsx(
              'my-[2px] font-semibold hover:text-[#0765ff]',
              merriweather.className,
              titleSmall ? 'text-[15px]' : titleLarge ? 'text-[20px]' : 'text-[18px]'
            )}>
              {data?.attributes?.title}
            </h3>
            {hasDate &&
              <p className={clsx(
                'text-[12px] text-[#0A0A0A]',
                lato.className
              )}>
                {formattedDate}
              </p>
            }
            {hasExcerpt &&
              <NewsThumbContent html={data?.attributes?.short_description} className={"line-clamp-3"} />
            }
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={newsUrl} >
      <div className='px-[10px] has-hover'>
        {hasThumbnail &&
          <div className='overflow-hidden rounded-[8px]'>
            <Image
              src={`${urls.baseUrl}${data?.attributes?.avatar?.data?.attributes?.url || ''}`}
              width={960}
              height={480}
              alt=''
              className='aspect-[960/480] object-cover'
            />
          </div>
        }
        <div className='py-[7px]'>
          <h3 className={clsx(
            'my-[2px] font-semibold hover:text-[#0765ff] text-ellipsis line-clamp-3',
            merriweather.className,
            titleSmall ? 'text-[15px]' : titleLarge ? 'text-[20px]' : 'text-[18px]'
          )}>
            {data?.attributes?.title}
          </h3>
          {hasDate &&
            <p className={clsx(
              'text-[12px] text-[#0A0A0A]',
              lato.className
            )}>
              {formattedDate}
            </p>
          }
          {hasExcerpt &&
            <NewsThumbContent html={data?.attributes?.short_description} className={"line-clamp-2"} />
          }
        </div>
      </div>
    </Link>
  )
}

export default NewsCard