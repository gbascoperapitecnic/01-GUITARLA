import { useState } from "react"

export default function Header({cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart}){

    //state derivado
    const isEmpty = () => cart.length === 0

    //funcion propia (no está creando un nuevo arreglo)
    //let i = 0;
    // const cartTotal= () =>{
    //     cart.forEach(item => {
    //         i += item.price * item.quantity
    //     });
    //     return i
    // }

    //funcion con reduce
    const cartTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)

    const handleDecrement = (guitar) =>{
        decreaseQuantity(guitar)
    }
    const handleIncrement = (guitar) =>{
        increaseQuantity(guitar)
    }
    const handleRemove = (guitar) =>{
        removeFromCart(guitar)
    }
    const handleClear = (guitar) =>{
        clearCart(guitar)
    }

    return (
        <header className="py-5 header">
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div 
                            className="carrito"
                        >
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {isEmpty() ? (
                                    <p className="text-center">El carrito está vacío</p>
                                ) : ( 
                                <>
                                    <table className="w-100 table">
                                        <thead>
                                            <tr>
                                                <th>Imagen</th>
                                                <th>Nombre</th>
                                                <th>Precio</th>
                                                <th>Cantidad</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart.map((guitar) =>
                                                    <tr key={guitar.id}>
                                                        <td>
                                                            <img className="img-fluid" src={`/img/${guitar.image}.jpg`} alt="imagen guitarra" />
                                                        </td>
                                                        <td>{guitar.name}</td>
                                                        <td className="fw-bold">
                                                            {guitar.price} €
                                                        </td>
                                                        <td className="flex align-items-start gap-4">
                                                            <button
                                                                onClick={() => handleDecrement(guitar)}
                                                                type="button"
                                                                className="btn btn-dark"
                                                            >
                                                                -
                                                            </button>
                                                                {guitar.quantity}
                                                            <button
                                                                onClick={() => handleIncrement(guitar)}
                                                                type="button"
                                                                className="btn btn-dark"
                                                            >
                                                                +
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                onClick={() => handleRemove(guitar)}
                                                                className="btn btn-danger"
                                                                type="button"
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    <p className="text-end">Total pagar: <span className="fw-bold">{cartTotal()}€</span></p>
                                </>
                                )}

                                <button 
                                    onClick={handleClear}
                                    className="btn btn-dark w-100 mt-3 p-2"
                                >
                                    Vaciar Carrito
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}