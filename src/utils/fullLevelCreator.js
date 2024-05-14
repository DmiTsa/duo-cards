// export default function fullLevelCreator(level) {
export default function fullLevelCreator({ name, dif, sets, imgLib }) {

    const typesTile = []

    for (let i = 0; i < sets; i++) {
        for (let j = 0; j < dif; j++) {
            typesTile.push(i)
        }
    }

    for (let i = typesTile.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [typesTile[i], typesTile[j]] = [typesTile[j], typesTile[i]];
    }

    return {
        name,
        dif,
        sets,
        imgLib,
        tiles: typesTile.map((tileType, i) => {
            return { id: i, type: tileType, isOpened: false, isEnabled: true }
        })
    }
}
