const fs = require('fs')

function readScores(){
    let scores = fs.readFileSync('scores.txt', 'utf-8').split('\n')
    let scoreArr = []
    for (let i = 0; i < scores.length-1; i++){
        let tempArr = []
        let tempScores = scores[i].split(', ')
        for (let o = 0; o < tempScores.length; o++){
            tempArr.push(tempScores[o])
        }
        scoreArr.push(tempArr)
    }
    return scoreArr
}

function tallyScores(scores){
    let finalTally = []
    for (let i = 0; i < scores.length; i++){
        let tempArr = []
        tempArr.push(scores[i][0])
        let counter = 0
        for (let o = 1; o < scores[i].length; o++){
            counter += parseInt(scores[i][o])
        }
        tempArr.push(counter)
        finalTally.push(tempArr)
    }
    finalTally.sort(sortArray)
    console.log(finalTally[0][0]+' '+finalTally[0][1])
}

function sortArray(a,b){
    return b[1]-a[1]
}

tallyScores(readScores())

module.exports = {
    readScores,
    tallyScores,
    sortArray
}