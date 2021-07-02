import { useContext, createContext, useState, useEffect } from 'react'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  items: string[]
}

export type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextData)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) setCartItems(data)
  }, [])

  return (
    <CartContext.Provider value={{ items: cartItems }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
