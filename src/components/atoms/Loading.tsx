import React, { Fragment } from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

interface Props {
  position: 'fixed' | 'relative';
}
const LoadingConatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const RelativeContainer = styled(LoadingConatiner)`
    position: relative;
`;

const FixedContainer = styled(LoadingConatiner)`
    position: fixed;
`;
function Loading({ position = 'relative' } : Props) {
  return (
    <>
      {position === 'relative' ? (
        <RelativeContainer>
          <Spinner animation="border" variant="primary" />
        </RelativeContainer>
      ) : null}
      {position === 'fixed' ? (
        <FixedContainer>
          <Spinner animation="border" variant="primary" />
        </FixedContainer>
      ) : null}
        
    </>
   
  );
}

export default Loading;
