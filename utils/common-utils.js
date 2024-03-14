
/**
 * Multiple choice prompt
 * @param {*} message 
 * @param {*} choices 
 * @returns Selected options
 */
export const multipleChoicePrompt = (message, choices) => {
    const selectedOptions = [];
    
    choices.forEach(choice => {
        const isConfirmed = confirm(`${message}\n\n${choice}`);
        if (isConfirmed) {
            selectedOptions.push(choice);
        }
    });

    return selectedOptions;
}

/**
 * find Duplicate and Update the price and quantity
 * @param {*} itemsArray 
 * @param {*} productId 
 * @param {*} isDeletion 
 * @returns deleted item/true/false
 */
export const findDuplicateAndUpdate = (itemsArray, productId, isDeletion) => {
    const duplicateItem = itemsArray.find(item => item.id === productId);

    if (!duplicateItem) {
        return false; // No duplicate item found
    }

    switch (isDeletion) {
        case true:
            if (duplicateItem.quantity > 1) {
                const option = parseInt(prompt(`Click 1 for removing the whole product \n Click 2 for removing one quantity of the product`));
                if(option){
                    switch(option){
                        case 1:
                            itemsArray.splice(itemsArray.indexOf(duplicateItem), 1);
                            break;
                        case 2: 
                            duplicateItem.quantity--;
                            duplicateItem.totalPrice = duplicateItem.price * duplicateItem.quantity;
                            break;
                    }
                } else {
                    console.log('Invalid Input');
                }
            } else {
                itemsArray.splice(itemsArray.indexOf(duplicateItem), 1);
            }
            return duplicateItem;
        case false:
            duplicateItem.quantity++;
            duplicateItem.totalPrice = duplicateItem.price * duplicateItem.quantity;
            return true;
        default:
            return false;
    }
};
