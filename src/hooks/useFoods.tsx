import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Food } from "../interfaces/Food";
import { api } from "../services/api";

interface FoodsProviderProps {
    children: ReactNode
}

interface FoodInsert {
    link: string,
    title: string,
    price: number,
    description: string
}

interface FoodUpdate {
    id: number,
    link: string,
    title: string,
    price: number,
    description: string
}

interface FoodsContextData {
    foods: Food[],
    createFood: (data: FoodInsert) => Promise<void>
    updateFood: (data: FoodUpdate) => Promise<void>
}

export const FoodsContext = createContext<FoodsContextData>({} as FoodsContextData);

export function FoodsProvider({ children }: FoodsProviderProps): JSX.Element {
    const [foods, setFoods] = useState<Food[]>([]);
    // useEffect(() => {
    //     api.get("/foods")
    //         .then(response => setFoods(response.data.foods))
    //         .then(response => console.log(response))
    // }, []);

    async function createFood(data: FoodInsert) {
        const response = await api.post("/foods", { ...data });
        const { food } = response.data;
        //setFoods([...foods, food]);
    }

    async function updateFood(data: FoodUpdate) {
        const response = await api.put(`/foods/${data.id}`, { ...data });
        const { food } = response.data;
        //setFoods([...foods, food]);
    }

    return (
        <FoodsContext.Provider value={{ foods, createFood, updateFood }} >
            {children}
        </ FoodsContext.Provider>
    );
}

export function useFoods(): FoodsContextData {
    return useContext(FoodsContext);
}