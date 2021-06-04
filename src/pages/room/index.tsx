import React from 'react';
import MindCard from 'src/components/atoms/MindCard';
import EmojiGroup from 'src/components/molecules/EmojiGroup';
import styled from 'styled-components';

interface Props {
  count: number;
}
const EmojiGroupContainer = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    justify-content: center;
`;

function Room({ count = 1 }: Props) {
  const cardArray = Array.from({ length: 20 }, (_, i) => i).map((i) => (
    <MindCard key={i} type="stop" index={i} />
  ));
  const animationCardArray = Array.from({ length: count }, (_, i) => i).map(
    (i) => (
      <>
        <MindCard key={i} index={i} type="down" />
        <MindCard key={i} index={i + 0.5} type="up" />
      </>
    ),
  );

  return (
    <div>
      {cardArray.map((ele) => ele)}
      {animationCardArray.map((ele) => ele)}
      <EmojiGroupContainer>
        <EmojiGroup />
      </EmojiGroupContainer>
    </div>
  );
}
export default Room;
