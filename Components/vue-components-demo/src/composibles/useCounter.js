
import { ref } from "vue";
    
export function useCounter(initialValue = 10){

    const counter = ref(initialValue);

    const increment = ()=>{
        counter.value++;
    }

    const decrement = ()=>{
        counter.value--;
    }

    return { counter, increment, decrement};
}