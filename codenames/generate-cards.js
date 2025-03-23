/***
 * Print list of grids, run the script and save the output to cards.js
 * node generate-cards.js > cards.js
 */


/** Generate a grid of 25 cells with 3 shared greens, 6 unique greens per player, and 3 unique blacks per player. */
function generateArrays(gridSize = 25, sharedGreensCount = 3, uniqueGreensPerPlayerCount = 6, uniqueBlacksPerPlayerCount = 3) {
    const array1 = Array(gridSize).fill(0);
    const array2 = Array(gridSize).fill(0);
    
    const green = 1
    const black = 2
    // Place shared greens
    const sharedGreens = getRandomCells(gridSize, sharedGreensCount);
    sharedGreens.forEach(index => {
        array1[index] = green;
        array2[index] = green;
    });

    // Place unique greens
    const uniqueGreens = getRandomCells(gridSize, uniqueGreensPerPlayerCount*2, sharedGreens);
    const uniqueGreenPlayer1 = uniqueGreens.slice(0, uniqueGreensPerPlayerCount);
    const uniqueGreenPlayer2 = uniqueGreens.slice(uniqueGreensPerPlayerCount);
    uniqueGreenPlayer1.forEach(index => { array1[index] = green; });
    uniqueGreenPlayer2.forEach(index => { array2[index] = green; });


    // Place unique blacks
    const uniqueBlacks = getRandomCells(gridSize, uniqueBlacksPerPlayerCount*2, [...sharedGreens, ...uniqueGreens]);
    const uniqueBlackPlayer1 = uniqueBlacks.slice(0, uniqueBlacksPerPlayerCount);
    const uniqueBlackPlayer2 = uniqueBlacks.slice(uniqueBlacksPerPlayerCount);
    uniqueBlackPlayer1.forEach(index => { array1[index] = black; });
    uniqueBlackPlayer2.forEach(index => { array2[index] = black; });

    return { array1, array2 };
}

/* Get random cells indices */
function getRandomCells(gridSize, count, excludeIndices = []) {
    const indices = [];
    while (indices.length < count) {
        const index = Math.floor(Math.random() * gridSize);
        if (!indices.includes(index) && !excludeIndices.includes(index)) {
            indices.push(index);
        }
    }
    return indices;
}

// Generate 100 grids and print them
const grids = []
for (let i = 0; i < 1000; i++) {
    const { array1, array2 } = generateArrays(25, 3, 6, 3);
    grids.push([...array1, ...array2]);
}
console.log("grids="+JSON.stringify(grids));