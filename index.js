let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let score3 = document.getElementById("score3")

let player1SavedScore = document.getElementById("player1SavedScore")
let player2SavedScore = document.getElementById("player2SavedScore")
let player3SavedScore = document.getElementById("player3SavedScore")

let count1 = 0
//Player 1

    function player1Add1(){
        count1 += 1
        score1.textContent = count1
    }

    function player1Add2(){
        count1 += 2
        score1.textContent = count1
    }
    function player1Add3(){
        count1 += 3
        score1.textContent = count1
    }

//Player 2
let count2 = 0
    function player2Add1(){
        count2 += 1
        score2.textContent = count2
    }

    function player2Add2(){
        count2 += 2
        score2.textContent = count2
    }

    function player2Add3(){
        count2 += 3
        score2.textContent = count2
    }
//Player 3
let count3 = 0
    function player3Add1(){
        count3 += 1
        score3.textContent = count3
    }
    function player3Add2(){
        count3 += 2
        score3.textContent = count3
    }
    function player3Add3(){
        count3 += 3
        score3.textContent = count3
    }

//Reset
    function resetScores(){
        score1.textContent = count1=0
        score2.textContent = count2=0
        score3.textContent = count3=0
    }

//Save
    function saveScores(){
        let count1Str = count1 + " - "
        let count2Str = count2 + " - "
        let count3Str = count3 + " - "
        player1SavedScores.textContent += count1Str
        player2SavedScores.textContent += count2Str
        player3SavedScores.textContent += count3Str
        
    }