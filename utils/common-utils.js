// export const getIntFromPrompt = (message) => {
//     let userInput;
//     let parsedInt;

//     do {
//         userInput = prompt(message);
//         parsedInt = parseInt(userInput);
//     } while (userInput !== null && (isNaN(parsedInt) || parsedInt.toString() !== userInput));

//     return parsedInt;
// }

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

export const findDuplicateItemById = (cart, productId) => cart.findIndex(item => item.id === productId);