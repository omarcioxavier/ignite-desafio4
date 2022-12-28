import { FormEvent, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import { useFoods } from '../../hooks/useFoods';
import Modal from "react-modal";

interface ModalAddFoodProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalAddFood(props: ModalAddFoodProps) {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const { createFood } = useFoods();

  async function handleCreateNewFood(event: FormEvent) {
    event.preventDefault();

    await createFood({ link, title, price, description });

    setLink("");
    setTitle("");
    setPrice(0);
    setDescription("");

    props.onRequestClose();
  }

  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <Form onSubmit={handleCreateNewFood}>
        <h1>Novo Prato</h1>
        <input type="text" placeholder="Cole o link aqui" onChange={(event) => setLink(event.target.value)} />
        <input type="text" placeholder="Ex: Moda Italiana" onChange={(event) => setTitle(event.target.value)} />
        <input type="number" placeholder="Ex: 19.90" onChange={(event) => setPrice(Number(event.target.value))} />
        <input type="text" placeholder="Descrição" onChange={(event) => setDescription(event.target.value)} />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}