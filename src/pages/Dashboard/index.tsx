import { FoodsContainer } from './styles';
import { useFoods } from '../../hooks/useFoods';
import { Food } from '../../components/Food';

interface DashBoardProps {
  onOpenModalEditFood: () => void;
}

export function Dashboard(props: DashBoardProps) {
  const { foods } = useFoods();
  return (
    <div>
      <FoodsContainer data-testid="foods-list">
        {foods.map(food => (
          <Food key={food.id} foodItem={food} onOpenModalEditFood={props.onOpenModalEditFood}  />
        ))}
      </FoodsContainer>
    </div>
  );
}