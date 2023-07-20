import { ICell } from "@/models/Cell"
import { useAttack } from "../move/attack"
import { useCell } from "../cell"

export const useCheck = () => {
  const { getAttackedCells } = useAttack()
  const { cells } = useCell()

  

  return {
    filterCheckMoves
  }
}

// 1. Вынести все функции ходов для фигур в useMove. Возвращать объект с moves и attackMoves
// 2. Написать функцию которая принимает массив всех 64 клеток, которая проходится по каждой клетке и в зависимости от фигуры получает ее attackMoves. Эти attackMoves пушит в массив. Далее этот массив нужно вернуть
// 3. В filterCheckMoves делаем фейковую доску ходов. Пробегаяюсь по moves на каждый ход делаем фейковую доску. Эту фейк доску прогоняем через getAttackedMoves. Проверяем, есть ли в результате этой функции наш король. Если есть, то ход не возвращаем, и наоборот.
