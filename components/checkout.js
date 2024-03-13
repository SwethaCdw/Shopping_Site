import { calculateCartPrice, clearCart } from "./cart.js";
import { checkWalletBalance, updateWalletOnCheckout } from "./wallet.js";

export const checkout = () => {
    const totalCartPrice = calculateCartPrice();
    const walletAmount = checkWalletBalance();

    if (totalCartPrice <= 0) {
        alert('There are no items in the cart. Press "A" to add items.');
        return;
    }

    if (totalCartPrice > walletAmount) {
        alert("You do not have enough money in the wallet. Click 'R' to recharge wallet");
        return;
    }

    const confirmation = prompt(`Type 'yes' to confirm checkout! Total price : ${totalCartPrice}`);
    if (confirmation !== 'yes') {
        console.log('Checkout cancelled due to invalid statement');
        return;
    }

    clearCart();
    updateWalletOnCheckout(walletAmount, totalCartPrice);
    console.log('Checkout completed');
};