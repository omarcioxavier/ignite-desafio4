import { FiPlusSquare } from "react-icons/fi";
import { Container } from "./styles";

interface HeaderProps {
  onOpenModalAddFood: () => void;
}

export function Header({ onOpenModalAddFood }: HeaderProps) {
  return (
    <Container>
      <header>
        <img src="" alt="GoRestaurant" />
        <nav>
          <div>
            <button type="button" onClick={onOpenModalAddFood}>
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
};