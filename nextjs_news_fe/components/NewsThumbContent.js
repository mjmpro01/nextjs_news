'use client'

import clsx from 'clsx';
import { useEffect, useState } from 'react'

import { lato } from '@/utils/fonts';


const NewsThumbContent = ({ html, className }) => {
  const [clientHtml, setClientHtml] = useState('');

  useEffect(() => {
    setClientHtml(html); // Ensure that HTML is set only after client-side hydration
  }, [html]);

  if (!clientHtml) {
    return null; // Avoid rendering during server-side rendering
  }

  return (
    <p
      className={clsx(
        'text-[#0A0A0A] pt-[10px] my-[1px] text-ellipsis prose prose-img:hidden prose-headings:text-sm prose-headings:font-normal prose-p:text-sm prose-p:font-normal',
        lato.className,
        className ? className : "text-[14px]"
      )}
      dangerouslySetInnerHTML={{ __html: clientHtml }}
    >
    </p>
  );
}

export default NewsThumbContent
