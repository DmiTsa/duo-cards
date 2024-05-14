import { v4 as uuidv4 } from 'uuid';

export default function levelSetCreator(gameSet) {

    return gameSet.map((set) => {
        return {
            id: uuidv4(),
            name: set.name,
            dif: set.dif,
            sets: set.sets,
            tiles: [],
            imgLib: 'Hearts'
        }
    })
}