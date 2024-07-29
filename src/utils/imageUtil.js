const getImageUrl = (imageName) => {
    return new URL(`../assets/images/product/${imageName}.png`, import.meta.url);
}

export {
    getImageUrl
}