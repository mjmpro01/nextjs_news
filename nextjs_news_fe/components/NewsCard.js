import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { urls } from '@/constants/urls'

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
  const newsUrl = `${categorySlug}/${data?.attributes?.slug || ''}`

  if (isHorizontal) {
    return (
      <Link href={newsUrl} >
        <div className='table px-[10px] py-[7px] has-hover relative'>
          <div className={clsx(
            'table-cell h-auto align-middle overflow-hidden',
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
            <h5 className={clsx(
              'my-[2px] font-semibold',
              titleSmall ? 'text-[15px]' : titleLarge ? 'text-[21px]' : 'text-[18px]'
            )}>
              {data?.attributes?.title}
            </h5>
            {hasDate &&
              <p className='text-[10px] text-[#0A0A0A]'>
                {data?.attributes?.createdAt}
              </p>
            }
            {hasExcerpt &&
              <NewsThumbContent html={data?.attributes?.short_description} />
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
          <div className='overflow-hidden'>
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
          <h5 className={clsx(
            'my-[2px] font-semibold',
            titleSmall ? 'text-[15px]' : titleLarge ? 'text-[21px]' : 'text-[18px]'
          )}>
            {data?.attributes?.title}
          </h5>
          {hasDate &&
            <p className='text-[10px] text-[#0A0A0A]'>
              {data?.attributes?.createdAt}
            </p>
          }
          {hasExcerpt &&
            <NewsThumbContent html={data?.attributes?.short_description} />
          }
        </div>
      </div>
    </Link>
  )
}

export default NewsCard