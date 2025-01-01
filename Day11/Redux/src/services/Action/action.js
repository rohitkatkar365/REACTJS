import { Add_TO_CART } from '../constant';

export const addToCart = (data) => (
  console.log(data),
  
  {
  type: Add_TO_CART,
  data,
});

// export const removeFromCart = (data) =>{
//     return {
//         type:'Remove_Form_CART',
//         data:data
//     }
// }