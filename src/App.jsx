import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import { useState, useEffect } from 'react'
import { db } from './data/db'

function App() {
    const initialCart = () =>{
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart) 

    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    // Cada vez que el state cart cambie, se ejecutará está función
    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    //Función que se ejecuta cuando el usuario agrega al carrito una guitarra, obtenemos el objeto entero como parámetro
    function addToCart(guitar){
        //comprobar si ya existe el elemento
        const itemExists = cart.findIndex((item) => item.id === guitar.id)
        
        if (itemExists === -1) {
            //seteamos la cantidad a 1 cuando es el primer elemento
            guitar.quantity = 1 //añadimos quantity a nuestro arreglo
            setCart([...cart, guitar])
        }else{
            // si el elemento ya existe, se incrementa la cantidad 
            if (cart[itemExists].quantity < MAX_ITEMS) {
                const updatedElement = [...cart]
                updatedElement[itemExists].quantity++
                setCart(updatedElement)
            }
        }

    }
    function increaseQuantity(guitar){
        const itemIndex = cart.findIndex((item) => item.id === guitar.id)
        
        const updatedElement = [...cart]
        if (updatedElement[itemIndex].quantity < MAX_ITEMS) {
            updatedElement[itemIndex].quantity++
            setCart(updatedElement)
        }
    }

    function decreaseQuantity(guitar){
        const itemIndex = cart.findIndex((item) => item.id === guitar.id)
        
        const updatedElement = [...cart]
        if (updatedElement[itemIndex].quantity > MIN_ITEMS) {
            updatedElement[itemIndex].quantity--
            setCart(updatedElement)
        }
    }
    function removeFromCart(guitar){
        //crear un array nuevo con los elementos, excepto el que indiquemos por el parámetro
        const updatedCart = cart.filter((item) => item.id !== guitar.id)
        setCart(updatedCart)
    }
    function clearCart(){
        setCart([])
    }


    return (
    <>
        <Header
            cart={cart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
        />
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>
            <Cards
                data={data}
                addToCart={addToCart}
            />
        </main>
        <Footer/>
    </>
    )
}

export default App
