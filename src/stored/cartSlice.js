import { createSlice } from "@reduxjs/toolkit";

// example:{
//     id=1234;
//     name:"Wednesday Chicken",
//     category:"slicer",
//     quantity:1;
// }
const cart=createSlice(
    {
        name:'cartslice',
        initialState:{
            items:[],
            count:0
        },
        reducers:{
            AddItems:(state,action)=>{
                state.items.push({...action.payload,quantity:1})
                state.count++;
            },
            IncrementItems:(state,action)=>{
                const element=state.items.find((item=>item.id===action.payload.id));
                element.quantity+=1;
                state.count++;
            },
            DecrementItems:(state,action)=>{
                const element=state.items.find(item=>item.id===action.payload.id);
                if(element.quantity==1){
                    state.items=state.items.filter(item=>item.id!=action.payload.id);
                }
                else{
                    element.quantity-=1;
                    
                }
                state.count--;

            }
        }
    }
)
export const {AddItems,DecrementItems,IncrementItems}=cart.actions;
export default cart.reducer;//to store