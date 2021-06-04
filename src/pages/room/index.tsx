import React from 'react';
import { tinDownOut, tinUpOut } from 'src/assets/style/animation';
import styled from 'styled-components';

interface Props {
  count: number;
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
function Room({ count = 5 }: Props) {
  const cardArray = Array.from({ length: 20 }, (_, i) => i).map((i) => (
    <Card key={i} index={i}>
      <CardMark>
        <span role="img" aria-label="eyes">
          👀
        </span>
      </CardMark>
    </Card>
  ));
  const animationCardArray = Array.from({ length: count }, (_, i) => i).map(
    (i) => (
      <>
        <AnimationDownCard key={i} index={i} delay={`${i}s`} />
        <AnimationUpCard key={i} index={i} delay={`${i + 0.5}s`} />
      </>
    ),
  );
  return (
    <div>
      {cardArray.map((ele) => ele)}
      {animationCardArray.map((ele) => ele)}
    </div>
  );
}
export default Room;
