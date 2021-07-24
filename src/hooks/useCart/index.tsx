import { useQueryGames } from 'graphql/queries/games'
import { useContext, createContext, useState, useEffect } from 'react'
import { formatPrice } from 'utils/formatters/price'
import { getStorageItem } from 'utils/localStorage'

const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
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

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: {
      where: {
        id: cartItems
      }
    }
  })

  return (
    <CartContext.Provider
      value={{
        items: data?.games.map((game) => ({
          id: game.id,
          img: game.cover?.url,
          price: formatPrice(game.price),
          title: game.name
        }))
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
