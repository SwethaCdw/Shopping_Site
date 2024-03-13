import { walletLimit } from "../constants/wallet-constants.js";

let walletAmount = 200;

export const rechargeWallet = () => {
    const rechargeAmount = parseFloat(prompt('Please enter the amount to be recharged')); 
    if(rechargeAmount && rechargeAmount > 0) { 
        const updatedWalletAmount = walletAmount + rechargeAmount;
        if(updatedWalletAmount > walletLimit) {
            console.log(`Limit exceeded. Limit is ${walletLimit}. You can recharge upto ${walletLimit - walletAmount}`)
        } else {
            walletAmount = updatedWalletAmount;
            return updatedWalletAmount;
        } 
    } else {
        console.log('Invalid input. Please enter valid price');
        return false;
    }
}

export const checkWalletBalance = () => walletAmount;

export const updateWalletOnCheckout = (updatedWalletAmount, cartPrice) => walletAmount = updatedWalletAmount - cartPrice;