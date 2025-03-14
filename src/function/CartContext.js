import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
        const existingItemIndex = state.cartItems.findIndex(item => item.productName === action.payload.productName);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...state.cartItems];
            const existingItem = updatedCartItems[existingItemIndex];
            existingItem.quantity += action.payload.quantity;
            existingItem.totalPrice += action.payload.totalPrice;
    
            return {
                ...state,
                cartItems: updatedCartItems,
              };
            } else {
              return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
              };
            }
            case 'RESET_CART':
              return {
                cartItems: [],
              };
          default:
            return state;
        }
      };

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  const calculateTotalPrice = () => {
    return state.cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };
  const resetCart = () => {
    dispatch({ type: 'RESET_CART' });
  };

  return (
    <CartContext.Provider value={{ state, dispatch, calculateTotalPrice, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };