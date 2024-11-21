import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Cards from './components/Cards'
import useCart from './Hooks/useCart'

function App() {

    const {data, cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart} = useCart()

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
