import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            {"Không tìm thấy đường dẫn."}
          </p>
          <p className="mb-4 text-lg font-light text-black">
            {"Xin lỗi, chúng tôi không thể tìm thấy trang này. Bạn sẽ tìm thấy rất nhiều điều để khám phá trên trang chủ."}
          </p>
          <Link href="#" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
            {"Quay lại trang chủ"}
          </Link>
        </div>
      </div>
    </section>
  )
}