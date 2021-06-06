import { useMutation } from '@apollo/client';
import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { CreateRoomResponse, CREATE_ROOM } from 'src/graphql/room';
import { firebaseAuth } from 'src/provider/AuthProvider';

interface Props {
  show: boolean;
  onHide: () => void;
}
function CreateRoomModal({ show, onHide } : Props) {
  const [roomName, setRoomName] = useState('');
  const { mongoUser } = useContext(firebaseAuth);
  const [createRoom] = useMutation<CreateRoomResponse>(CREATE_ROOM);
  const location = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);  
  };

  const handleSubmit = async () => {
    const res = await createRoom({
      variables: {
        roomInput: {
          name: roomName,
          ownerUid: mongoUser?.uid,
        },
      },
    });
    location.push(`room/${res.data?.createRoom._id}`);
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Room
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Room Name</Form.Label>
            <Form.Control type="text" placeholder="Enter room name" onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateRoomModal;
