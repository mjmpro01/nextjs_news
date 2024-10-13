'use client'

import Link from "next/link"

import { paths } from "@/constants/paths"

export default function GlobalError({
  error,
  resetErrorBoundary,
}) {
  return (
    <html>
      <body>
        <section className="bg-white w-screen h-screen flex items-center justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
                {error?.name}
              </h1>
              <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                {'Có lỗi xảy ra'}
              </p>
              {/* <p className="mb-4 text-xl font-light text-gray-500">
                {error?.message}
              </p> */}
              <div className="flex flex-col gap-4 items-center justify-center">
                <button onClick={() => resetErrorBoundary()}>Thử lại</button>
                <p>hoặc</p>
                <Link
                  href={paths.HOME}
                  className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center my-4"
                >
                  {'Quay lại trang chủ'}
                </Link>
              </div>
            </div>
          </div>
        </section>

      </body>
    </html>
  )
}