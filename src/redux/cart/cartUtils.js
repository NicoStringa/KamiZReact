export const addItemToCart = (cartItems, product) => {
  const productExist = cartItems.find((item) => item.id === product.id);

  if (productExist) {
    return cartItems.map((item) =>
      item.id === productExist.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const removeItemCart = (cartItems, id) => {
  const productRemove = cartItems.find((item) => item.id === id);

  if (productRemove.quantity > 1) {
    return cartItems.map((item) =>
      item.id === productRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  return cartItems.filter((item) => item.id !== productRemove.id);
};

export const resetShipping = (cartItems, shippingCost) => {
  if (cartItems.length === 1 && cartItems[0].quantity === 1) {
    return 0;
  }

  return shippingCost;
};
