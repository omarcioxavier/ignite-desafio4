import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container } from './styles';

interface FoodItemProps {
  foodItem: {
    id: number,
    name: string,
    description: string,
    price: number,
    available: boolean,
    image: string
  },
  onOpenModalEditFood: () => void;
}

export function Food(props: FoodItemProps) {
  return (
    <Container available={props.foodItem.available}>
      <header>
        <img src={props.foodItem.image} alt={props.foodItem.name} />
      </header>
      <section className="body">
        <h2>{props.foodItem.name}</h2>
        <p>{props.foodItem.description}</p>
        <p className="price">
          R$ <b>{props.foodItem.price}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={props.onOpenModalEditFood}
            data-testid={`edit-food-${props.foodItem.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={undefined}
            data-testid={`remove-food-${props.foodItem.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{props.foodItem.available ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${props.foodItem.id}`} className="switch">
            <input
              id={`available-switch-${props.foodItem.id}`}
              type="checkbox"
              checked={props.foodItem.available}
              onChange={undefined}
              data-testid={`change-status-food-${props.foodItem.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
}