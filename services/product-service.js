
export const productData = await fetch('./resources/productsData.json')
.then(response => response.json())
.then(data => {
    console.log(data);
    return data;
})
.catch(error => console.error('Error reading JSON file:', error));
