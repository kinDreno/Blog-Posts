
// // // function getFirstElementArray(array: (number | string)[]) {
// // //     return array[0]
// // // }

// // // const numbers = [1, 2 ,3];
// // // const firstNum = getFirstElementArray(numbers)

// // // console.log(firstNum);

// // function tryGen<T>(n: T): T {
// //  return n
// // }

// // console.log(tryGen(typeof "as"));

// // type Identity<Id> = {
// //     data: Id;
// //     isVerified: true;
// // }

// // const verification: Identity<[{name: string, age: number}]> = {
// //     data: [{
// //         name: "hi",
// //         age: 1,
// //     }],
// //     isVerified: true,
// // }



// //  console.log(verification);
// //  // OR

// type ResponseConsole = {
//     data: { status: number }[];
//      isTrue: boolean;
// };

// // // // Using the type directly
// const response: ResponseConsole = {
//     data: [{
//          status: 2,
//      }],
//     isTrue: false,
// };

// console.log(response);


// //  type ResponseConsole<Data = { status: number }[]> = {
// //     data: Data;
// //     isTrue: boolean;
// // };

// // // Using the type without explicitly defining the generic type
// // const response: ResponseConsole = {
// //     data: [{
// //          status: 2,
// //      }],
// //      isTrue: false,
// //  };

// // console.log(response);

// // type Psychological<Expression> = {
// //     happy: Expression;
// //     sad: Expression;
// // }

// // const emotions: Psychological<string> = {
// // happy: "yehey",
// // sad: "ermm,,, what the sigma.."
// // }
// // console.log(emotions);

// type CartTypes = {
//     name: string
//     price: number
//     quantity: number
//     isAvailable: boolean
// }
// const message: string = "available!"
// const notmessage: string = "not available!"
// function calculatePrice({name, price, quantity, isAvailable}: CartTypes): number {
//     console.log(`calculating ${name} price.. ${isAvailable ? message : notmessage}`);    
//     return price * quantity
// }

// const carts: CartTypes[] = [
//     {name: "Apple", price: 270, quantity: 2, isAvailable: true}
// ]

// const calculate = calculatePrice(carts[0])
// console.log(calculate);

// type InventoryItem = {
//     name: string;
//     price: number;
//     quantity: number;
//     isAvailable: boolean;
// }


// function addItems(inventory: InventoryItem[], itemName: InventoryItem) {
//     inventory.push(itemName)
//     return inventory
// }

// const removeItems = (inventory: InventoryItem[], itemName: string ): InventoryItem[] => {
//    return inventory.filter((item) => item.name !== itemName)    
// }

// const inventory: InventoryItem[] = [
//     {name: "yessir", price: 299, quantity: 2, isAvailable: true},
//     {name: "sdfsdf", price: 299, quantity: 2, isAvailable: true},
//     {name: "ddsf", price: 29349, quantity: 4, isAvailable: false}
// ]

// const filterRemoval = removeItems(inventory, "yessir")
// console.log(filterRemoval);

