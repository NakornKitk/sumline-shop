import {create} from 'zustand'
import {persist} from 'zustand/middleware'


let store = (set) => ({
        data: [],
        fetchData: async () => {
            const response = await fetch('https://nakornkitk.github.io/sumline-shop/allproduct.json')
            const data = await response.json()
            set({ data: data });
        },
        searchTerm: "",
        setSearchTerm: (event) => set({searchTerm: event.target.value}),
        categoryTerm: "all",
        setCategoryTerm: (event) => set({categoryTerm: event.target.value}),
        colorTerm: "all",
        setColorTerm: (event) => set({colorTerm: event.target.value}),
        sortTerm:"name",
        setSortTerm: (event) => set({sortTerm: event.target.value}),
        cartItems: [],
        addCartItem: (newitem) => set((state) => ({
            cartItems: [...state.cartItems, newitem]
        })),
        setItemQuantity: (id, newValue) => set((state) => ({
            cartItems: state.cartItems.map(product =>
                product.id === id ? { ...product, quantity: newValue } : product
              )
        })),
        setWishStatus: (id, oldstatus) => set((state) => ({
            data: state.data.map(product =>
                product.id === id ? { ...product, wishstatus: !oldstatus } : product
              )
        }))
    })



store = persist(store, {name: "Sumline_Shop_Cart_v1"})
let useStore = create(store)

export default useStore;