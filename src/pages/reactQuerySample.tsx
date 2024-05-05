import React from 'react';

import { getTotalCount } from 'api/post/index';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

// https://gusrb3164.github.io/web/2022/01/23/react-query-typescript/
// https://velog.io/@kimhyo_0218/React-Query-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BF%BC%EB%A6%AC-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-useQuery
export default function Counter() {
  const totalCountQuery = useQuery<ReturnCount, AxiosError, number>(
    'repoData',
    () => getTotalCount({ heroName: 'muriel', searchText: '' }),
    {
      select: res => res.totalCount,
      placeholderData: { totalCount: 0 },
    },
  );

  return (
    <div>
      <div>
        <span> Total Post Count: {totalCountQuery.data} </span>
      </div>
    </div>
  );
}
