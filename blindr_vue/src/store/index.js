import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false
  },
  mutations: {
    initializeStore(state) {
      localStorage.getItem('cart')
      ? state.cart = JSON.parse(localStorage.getItem('cart')) 
      : localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    addToCart(state, item) {
      const exists = state.cart.items.filter(i => i.product.id === item.product.id)

      exists.length
      ? exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      : state.cart.items.push(item)

      localStorage.setItem('cart', JSON.stringify(state.cart))
    }
  },
  actions: {
  },
  modules: {
  }
})
