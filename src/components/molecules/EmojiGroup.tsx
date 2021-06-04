import React from 'react';
import { ButtonGroup, ButtonToolbar, Button } from 'react-bootstrap';

function EmojiGroup() {
  const emojis = [
    { emoji: '😎', label: 'good' },
    { emoji: '😢', label: 'sad' },
    { emoji: '🤔', label: 'hmm' },
    { emoji: '🤦‍♂️', label: 'ha..' },
  ];
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="mr-2" aria-label="First group">
        {emojis.map((item) => <Button key={item.label}><span role="img" aria-label={item.label}>{item.emoji}</span></Button>)}
      </ButtonGroup>
    </ButtonToolbar>
  );
}
export default EmojiGroup;