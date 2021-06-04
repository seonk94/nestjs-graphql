import React from 'react';
import styled from 'styled-components';
import { tinDownOut, tinUpOut } from 'src/assets/style/animation';

interface Props {
  type: 'stop' | 'up' | 'down';
  index: number;
}
interface CardPropType {
  index: number;
  delay?: string;
}
const Card = styled.div<CardPropType>`
  width: 160px;
  height: 200px;
  background: #e6e6e6;
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  border: 1px solid #aaa;
  transform: translate(
    ${(props) => -50 + props.index}%,
    ${(props) => -50 + props.index}%
  );
`;

const AnimationDownCard = styled(Card)`
  opacity: 0;
  animation: ${tinDownOut} 1s ease-in;
  animation-delay: ${(props) => props.delay};
`;

const AnimationUpCard = styled(Card)`
  opacity: 0;
  animation: ${tinUpOut} 1s ease-in;
  animation-delay: ${(props) => props.delay};
`;

const CardMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

function MindCard({ type, index } : Props) {
  const StopCard = (
    <Card index={index}>
      <CardMark>
        <span role="img" aria-label="eyes">
          👀
        </span>
      </CardMark>
    </Card>
  );
  return (
    <>
      {type === 'stop' ? StopCard : null}
      {type === 'down' ? <AnimationDownCard index={index} delay={`${index}s`} /> : null}
      {type === 'up' ? <AnimationUpCard index={index} delay={`${index}s`} /> : null}
    </>
  );
}
export default MindCard;