import React from 'react';
import styled from 'styled-components';

import { request } from '@utils/request';
import { postList } from '@modules/test/action';

interface IGetListDataType {
  payload: number;
}

const Home: React.FC = () => {
  const { data } = request.get<IGetListDataType>('getList', { revalidateOnMount: true });
  const handlerPost = async (data: string) => {
    const response = await postList();
    alert(data + response);
  };

  if (data)
    return (
      <Container>
        <h1>home {data.payload}</h1>
        <button onClick={() => handlerPost('posting ')}>POST</button>
      </Container>
    );
  return <>no data</>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
