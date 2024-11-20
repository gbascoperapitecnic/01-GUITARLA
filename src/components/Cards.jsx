import Card from "./Card"

export default function Cards({data, addToCart}){
   
    // se pasan las props desde padre a hijo
    return(
        <div className="row mt-5">
            {
                data.map((guitar) =>
                    <Card 
                        key={guitar.id}
                        guitar={guitar}
                        addToCart={addToCart}
                    />
                )
            }
        </div>
    )
}