import React from 'react';
import styled from 'styled-components';

import { request } from '@utils/request';

interface IGetListDataType {
  payload: number;
}

const Home: React.FC = () => {
  const { data } = request.get<IGetListDataType>('getList', { revalidateOnMount: true });

  if (data) return <Container>home {data.payload}</Container>;
  return <>no data </>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
