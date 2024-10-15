import Image from 'next/image';
import { ImageResponse } from 'next/og';

import { getLogo } from '@/apis/logo';
import { siteMetadata } from '@/constants/siteMetadata';

export default async function OpengraphImage(props) {
  const logo = await getLogo();

  return new ImageResponse(
    (
      <Image
        src={props?.imageUrl || logo}
        alt={props?.title || siteMetadata.title}
        width={1200}
        height={630}
      />
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
