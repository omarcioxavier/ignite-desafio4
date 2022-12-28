import { FoodsProvider } from './hooks/useFoods';
import { GlobalStyle } from './styles/global';
import Modal from "react-modal"
import { Header } from './components/Header';
import { useState } from 'react';
import { ModalEditFood } from './components/ModalEditFood';
import { ModalAddFood } from './components/ModalAddFood';

Modal.setAppElement("#root");

export function App() {
  const [modalAddFoodOpen, setModalAddFoodOpen] = useState(false);
  const [modalEditFoodOpen, setmodalEditFoodOpen] = useState(false);

  function handleModalEditFoodOpen() {
    setmodalEditFoodOpen(true);
  }

  function handleModalAddFoodOpen() {
    setModalAddFoodOpen(true);
  }

  function handleModalEditFoodClose() {
    setmodalEditFoodOpen(false);
  }

  function handleModalAddFoodClose() {
    setModalAddFoodOpen(false);
  }
  return (
    <FoodsProvider>
      <Header onOpenModalAddFood={handleModalAddFoodOpen} />
      {/* <Dashboard onOpenModalEditFood={handleModalEditFoodOpen} /> */}
      <ModalAddFood isOpen={modalAddFoodOpen} onRequestClose={handleModalAddFoodClose} />
      <ModalEditFood isOpen={modalEditFoodOpen} onRequestClose={handleModalEditFoodClose} />

      <GlobalStyle />
    </FoodsProvider>
  );
};