import { defineStore } from "pinia";

export const useGameStore = defineStore('GameStore', {
    state:()=>({
        score: 0,
        maxHealth: 100,
        maxAttack: 30,
        maxDefense: 10 
    }),
    getters:{
        getScore() {
            return this.score;
        },
        getNextAttack() {
            let attack = Math.floor(Math.random() * this.maxAttack) + 1;
            console.log('NextAttack: ' + attack);
            return attack;
        },
        getNextDefense() {
            let defense = Math.floor(Math.random() * this.maxDefense) + 1;
            console.log('NextDefense: ' + defense);
            return defense;
        },
        getNextAttackWithCacheHack() {
            let attack = Math.floor(Math.random() * this.maxAttack) + 1;
            console.log('NextAttack: ' + attack);
            return this.score + attack;
        },
        getNextDefenseWithCacheHack() {
            let defense = Math.floor(Math.random() * this.maxDefense) + 1;
            console.log('NextDefense: ' + defense);
            return this.score - defense;
        }
    },
    actions:{
        setNextAttack() {
            let attack = Math.floor(Math.random() * this.maxAttack) + 1;
            console.log('NextAttack: ' + attack);
            this.score += attack;
        },
        setNextDefense() {
            let defense = Math.floor(Math.random() * this.maxDefense) + 1;
            console.log('NextDefense: ' + defense);
            this.score -= defense;
        },
    }
})