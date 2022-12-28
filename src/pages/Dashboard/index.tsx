import { FoodsContainer } from './styles';
import { useFoods } from '../../hooks/useFoods';
import { Food as FoodComponent } from '../../components/Food';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Food } from '../../interfaces/Food';

interface DashBoardProps {
  onOpenModalEditFood: () => void;
}

export function Dashboard(props: DashBoardProps) {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    async function loadFoods() {
      const response = await api.get<Food[]>("foods");
      setFoods(response.data);
    }

    loadFoods();
  }, []);

  return (
    <div>
      <FoodsContainer data-testid="foods-list">
        {foods && foods.map(food => (
          <FoodComponent key={food.id} foodItem={food} onOpenModalEditFood={props.onOpenModalEditFood} />
        ))}
      </FoodsContainer>
    </div>
  );
}