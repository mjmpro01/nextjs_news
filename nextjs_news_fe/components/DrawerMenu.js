'use client'

import { Bars4Icon } from "@heroicons/react/24/outline";
import { Drawer } from 'antd'
import Link from "next/link";
import { useState } from "react";

const DrawerMenu = ({ mappedMenuList }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className='cursor-pointer absolute left-[10px] top-[30px] bg-orange-500 size-[30px] md:hidden flex items-center justify-center'
        onClick={showDrawer}
      >
        <Bars4Icon className='w-[18px] text-white' />
      </div>

      <Drawer
        onClose={onClose}
        open={open}
        width={'70%'}
        styles={{
          header: {
            padding: '15px'
          },
          body: {
            padding: 0
          }
        }}
      >
        {mappedMenuList.map((item, index) => (
          <Link href={`/${item?.slug}`} key={index}>
            <p className="flex items-center justify-start gap-[4px] p-[15px]" key={index}>
              {/* {item.icon} */}
              <p className='text-[0.9rem] whitespace-nowrap'>
                {item.name}
              </p>
            </p>

            <div className="border-b border-[#CCC]"></div>
          </Link>
        ))}
      </Drawer>
    </>

  )
}

export default DrawerMenu