import { useContext, createContext } from 'react'

export type CartContextData = {}

export type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

const CartProvider = ({ children }: CartProviderProps) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
