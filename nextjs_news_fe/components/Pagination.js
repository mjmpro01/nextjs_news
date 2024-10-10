'use client';

import { Pagination } from 'antd';
import { useSearchParams, useRouter } from 'next/navigation';
import queryString from 'query-string';

const PaginationComponent = ({ pagination }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <Pagination
      showSizeChanger={false}
      current={pagination?.page}
      total={(pagination?.pageCount || 1) * (pagination?.pageSize || 25)}
      pageSize={pagination?.pageSize}
      onChange={(page, pageSize) => {
        const currentParams = queryString.parse(searchParams.toString());

        const updatedParams = {
          ...currentParams,
          page: page.toString(),
          pageSize: pageSize.toString(),
        };

        const newSearchString = queryString.stringify(updatedParams);

        router.push(`?${newSearchString}`);
      }}
    />
  );
};

export default PaginationComponent;
