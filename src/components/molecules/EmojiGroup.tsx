import React from 'react';
import { ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap';

function EmojiGroup() {
  const emojis = [
    { emoji: '😎', label: 'good' },
    { emoji: '😢', label: 'sad' },
    { emoji: '🤔', label: 'hmm' },
    { emoji: '🤦‍♂️', label: 'ha..' },
  ];

  const handleClickEmoji = (emoji: string) => {
    const element = document.createElement('div');
    const left = Math.floor(Math.random() * 5) + 15;
    element.classList.add('fly-emoji');
    element.innerHTML = emoji;
    element.style.left = `${left}%`;

    document.body.appendChild(element);
    setTimeout(() => {
      document.body.removeChild(element);
    }, 4000);
  };


  return (
    <>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          {emojis.map((item) => <Button onClick={() => handleClickEmoji(item.emoji)} key={item.label}><span role="img" aria-label={item.label}>{item.emoji}</span></Button>)}
        </ButtonGroup>
      </ButtonToolbar>
    </>
  );
}
export default EmojiGroup;