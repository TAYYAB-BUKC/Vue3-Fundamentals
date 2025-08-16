import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useGameStore = defineStore('GameStore', () => {
    // state:()=>({
    //     score: 0,
    //     maxHealth: 100,
    //     maxAttack: 30,
    //     maxDefense: 10 
    // }),
    // getters:{
    //     getScore() {
    //         return this.score;
    //     },
    //     getNextAttack() {
    //         let attack = Math.floor(Math.random() * this.maxAttack) + 1;
    //         console.log('NextAttack: ' + attack);
    //         return attack;
    //     },
    //     getNextDefense() {
    //         let defense = Math.floor(Math.random() * this.maxDefense) + 1;
    //         console.log('NextDefense: ' + defense);
    //         return defense;
    //     },
    //     getNextAttackWithCacheHack() {
    //         let attack = Math.floor(Math.random() * this.maxAttack) + 1;
    //         console.log('NextAttack: ' + attack);
    //         return this.score + attack;
    //     },
    //     getNextDefenseWithCacheHack() {
    //         let defense = Math.floor(Math.random() * this.maxDefense) + 1;
    //         console.log('NextDefense: ' + defense);
    //         return this.score - defense;
    //     }
    // },
    // actions:{
    //     setNextAttack() {
    //         let attack = Math.floor(Math.random() * this.maxAttack) + 1;
    //         console.log('NextAttack: ' + attack);
    //         this.score += attack;
    //     },
    //     setNextDefense() {
    //         let defense = Math.floor(Math.random() * this.maxDefense) + 1;
    //         console.log('NextDefense: ' + defense);
    //         this.score -= defense;
    //     },
    //     resetScore(){
    //         this.score = 0;
    //     }
    // }


    const score = ref(0);
    const maxHealth = ref(100);
    const maxAttack = ref(30);
    const maxDefense = ref(10);
   
    const getScore = computed(()=> {
                        return score.value;
                    });

    const getNextAttack = computed(()=> {
                                let attack = Math.floor(Math.random() * maxAttack.value) + 1;
                                console.log('NextAttack: ' + attack);
                                return attack;
                          });

    const getNextDefense = computed(()=> {
                                let defense = Math.floor(Math.random() * maxDefense.value) + 1;
                                console.log('NextDefense: ' + defense);
                                return defense;
                           });

   const  getNextAttackWithCacheHack = computed(()=> {
                                            let attack = Math.floor(Math.random() * maxAttack.value) + 1;
                                            console.log('NextAttack: ' + attack);
                                            return score.value + attack;
                                        });
    const getNextDefenseWithCacheHack = computed(()=> {
                                            let defense = Math.floor(Math.random() * maxDefense.value) + 1;
                                            console.log('NextDefense: ' + defense);
                                            return score.value - defense;
                                        });
    
    const setNextAttack = () => {
        let attack = Math.floor(Math.random() * maxAttack.value) + 1;
        console.log('NextAttack: ' + attack);
        score.value += attack;
    };
    
    const setNextDefense = () => {
        let defense = Math.floor(Math.random() * maxDefense.value) + 1;
        console.log('NextDefense: ' + defense);
        score.value -= defense;
    };
    
    const resetScore = () => {
        score.value = 0;
    }

    return {
        // State
        score,
        maxHealth,
        maxAttack,
        maxDefense,
        // Getters
        getScore,
        getNextAttack,
        getNextDefense,
        getNextAttackWithCacheHack,
        getNextDefenseWithCacheHack,
        // Actions
        setNextAttack,
        setNextDefense,
        resetScore
    }
});