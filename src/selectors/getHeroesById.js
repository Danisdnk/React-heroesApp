import { heroes } from "../data/heroes";

export const getHeroresById = (id) => {
    return heroes.filter(heroes => heroes.id === id);
}