import { FormEvent, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { Form } from './styles';
import { useFoods } from '../../hooks/useFoods';
import Modal from "react-modal";

interface ModalEditFoodProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalEditFood(props: ModalEditFoodProps) {
  const [id] = useState(0);
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const { updateFood } = useFoods();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await updateFood({ id, link, title, price, description });

    setLink(link);
    setTitle(title);
    setPrice(price);
    setDescription(description);

    props.onRequestClose();
  }

  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <Form onSubmit={handleSubmit} >
        <h1>Editar Prato</h1>
        <input type="text" placeholder="Cole o link aqui" onChange={(event) => setLink(event.target.value)} value={link} />
        <input type="text" placeholder="Ex: Moda Italiana" onChange={(event) => setTitle(event.target.value)} value={title} />
        <input type="number" placeholder="Ex: 19.90" onChange={(event) => setPrice(Number(event.target.value))} value={price} />
        <input type="text" placeholder="Descrição" onChange={(event) => setDescription(event.target.value)} value={description} />
        <button type="submit" data-testid="edit-food-button" >
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}