const loadProducts =document.getElementByID('load-products-btn');
loadProducts.addEventListener('click', async function () {
    try{
        const response =await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        
    }
    
})