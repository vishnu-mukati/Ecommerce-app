

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
]

const ProductScreen = () => {
    return (
        productsArr.map((product) => {
            return (
                <>
                    <div>
                        <h3>{product.title}</h3>
                        <img src={product.imageUrl} alt={product.title} width="200" />
                        <div>
                            <p1>{product.price}</p1>
                        </div>
                    </div>
                    <div>

                        <button>ADD TO CART</button>
                    </div>
                </>
            );
        })
    );
}

export default ProductScreen;