import { WALLET_LIMIT } from "../constants/wallet-constants.js";

let walletAmount = 200;

/**
 * Recharge wallet
 * @returns updated wallet amount
 */
export const rechargeWallet = () => {
    const rechargeAmount = parseFloat(prompt('Please enter the amount to be recharged')); 
    
    if (!rechargeAmount || rechargeAmount <= 0) { 
        console.log('Invalid input. Please enter a valid positive amount');
        return false;
    } 
    
    const updatedWalletAmount = walletAmount + rechargeAmount;
    if (updatedWalletAmount > WALLET_LIMIT) {
        console.log(`Limit exceeded. Limit is ${WALLET_LIMIT}. You can recharge up to ${WALLET_LIMIT - walletAmount}`);
        return false;
    }
    
    walletAmount = updatedWalletAmount;
    return updatedWalletAmount;
};

/**
 * Check wallet balance
 * @returns wallet amount
 */
export const checkWalletBalance = () => walletAmount;

/**
 * Update wallet on checkout
 * @param {*} updatedWalletAmount 
 * @param {*} cartPrice 
 * @returns wallet amount
 */
export const updateWalletOnCheckout = (updatedWalletAmount, cartPrice) => {
    walletAmount = updatedWalletAmount - cartPrice;
} 