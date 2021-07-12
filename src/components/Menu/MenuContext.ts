import { createContext } from "react";

interface MenuContext {
  index: number;
  onSelect?: (selectedIndex: number) => void
}

const menuContext = createContext<MenuContext>({index: 0})

export default menuContext