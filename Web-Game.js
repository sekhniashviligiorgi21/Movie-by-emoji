let h=0
let t
let correct
document.getElementById("hint").style.display="none"
document.getElementById("emoji").style.display="none"
document.getElementById("submit").style.display="none"
document.getElementById("movie").style.display="none"
document.getElementById("label").style.display="none"
//-------------------------------------------Level 1------------------------------------------------
document.getElementById("start").onclick=()=> step("Let's start, Level 1:",3, "🦁👑")
function step(level,numwords,emoji){
    document.getElementById("rules").style.display="none"
    document.getElementById("start").style.display="none"
    document.getElementById("intro").innerText = `${level} Which movie is this? Type ${numwords} words.`
    document.getElementById("click").style.display="none"
    document.getElementById("emoji").style.display="block"
    document.getElementById("submit").style.display="block"
    document.getElementById("movie").style.display="block"
    document.getElementById("label").style.display="block"
    document.getElementById("emoji").innerText = `${emoji}`;
    document.getElementById("hint").style.display="block"
    document.getElementById("hint").onclick=function(){
        document.getElementById("hints").style.display="block"
        document.getElementById("hints").innerText="It is a cartoon."
        if (h>=50){
            h-=50};  
        document.getElementById("score").innerText = "Score: " + h;
    }
    document.getElementById("submit").onclick=function(){
        document.getElementById("hints").style.display="none"
        t=document.getElementById("movie").value
        if (t.trim().toLowerCase().replace(/\s+/g,"")===`thelionking`){
            h+=100
            step1("Correct, Level 2: Which movie is this?",2 ,"⭐🔫")  
        }
        else
            {step1("Wrong, correct answer was the Lion King. Level 2: Which movie is this?",2, "⭐🔫")
    }
        document.getElementById("movie").value = ""
    }}

//--------------------------------------Level 2 ------------------------------------------------
function step1(level, numwords, emoji){
    document.getElementById("movie").style.display="block"
    document.getElementById("label").style.display="block"
    document.getElementById("hint").style.display="block"
    document.getElementById("hint").onclick=function(){
            document.getElementById("hints").style.display="block"
            document.getElementById("hints").innerText="This movie was directed by George Lucas."
            if (h>=50){
                h-=50
            }
            document.getElementById("score").innerText="score:"+h
    }
    document.getElementById("score").style.display="block"
    document.getElementById("score").innerText="score:"+h
    document.getElementById("rules").style.display="none"
    document.getElementById("start").style.display="none"
    document.getElementById("intro").innerText=`${level}, Type ${numwords} words`
    document.getElementById("click").style.display="none"
    document.getElementById("emoji").innerText=`${emoji}`
    document.getElementById("emoji").style.display="block"
    document.getElementById("submit").style.display="block"
    document.getElementById("submit").onclick=function(){
        document.getElementById("hints").style.display="none"
        t=document.getElementById("movie").value
        if (t.trim().toLowerCase().replace(/\s+/g,"")===`starwars`){
            h+=100
            step2("Correct! Now Level 3: Which movie is this?",2,"🤵🏻‍♂️🚬🌹🖤⚜️🇮🇹💲")  
        }
        else 
            step2("Wrong, correct answer was Star Wars. Level 3: Which movie is this?",2,"🤵🏻‍♂️🚬🌹🖤⚜️🇮🇹💲")
        document.getElementById("movie").value = ""}}
//------------------------------------Level 3----------------------------------------------------
function step2(level, numwords, emoji){
    document.getElementById("movie").style.display="block"
    document.getElementById("label").style.display="block"
    document.getElementById("hint").style.display="block"
    document.getElementById("hint").onclick=function(){
            document.getElementById("hints").style.display="block"
            document.getElementById("hints").innerText="This movie is about Italian mafia."
            if (h>=50){
                h-=50
            }
            document.getElementById("score").innerText="score:"+h
    }
    document.getElementById("score").style.display="block"
    document.getElementById("score").innerText="score:"+h
    document.getElementById("rules").style.display="none"
    document.getElementById("start").style.display="none"
    document.getElementById("intro").innerText=`${level}, Type ${numwords} words`
    document.getElementById("click").style.display="none"
    document.getElementById("emoji").innerText=`${emoji}`
    document.getElementById("emoji").style.display="block"
    document.getElementById("submit").style.display="block"
    document.getElementById("submit").onclick=function(){
        document.getElementById("hints").style.display="none"
        t=document.getElementById("movie").value
        if (t.trim().toLowerCase().replace(/\s+/g,"")===`thegodfather`){
            h+=100
            step3("Correct! Next, Level 4: Which movie is this? Use articles",7,"😊👿👹")  
        }
        else 
            step3("Wrong, correct answer was the godfather. Next, Level 4: Which movie is this? Use articles",7,"😊👿👹")
        document.getElementById("movie").value = ""}
}
//-------------------------------Level 4---------------------------------------------
function step3(level, numwords, emoji){
    document.getElementById("movie").style.display="block"
    document.getElementById("label").style.display="block"
    document.getElementById("hint").style.display="block"
    document.getElementById("hint").onclick=function(){
            document.getElementById("hints").style.display="block"
            document.getElementById("hints").innerText="This movie was released in 1966."
            if (h>=50){
                h-=50
            }
            document.getElementById("score").innerText="score:"+h
    }
    document.getElementById("score").style.display="block"
    document.getElementById("score").innerText="score:"+h
    document.getElementById("rules").style.display="none"
    document.getElementById("start").style.display="none"
    document.getElementById("intro").innerText=`${level}, Type ${numwords} words`
    document.getElementById("click").style.display="none"
    document.getElementById("emoji").innerText=`${emoji}`
    document.getElementById("emoji").style.display="block"
    document.getElementById("submit").style.display="block"
    document.getElementById("submit").onclick=function(){
        document.getElementById("hints").style.display="none"
        t=document.getElementById("movie").value
        if (t.trim().toLowerCase().replace(/\s+/g,"")===`thegoodthebadandtheugly`){
            h+=100
            step4("Correct! Lastly, Level 5: Which movie is this? (It is not the Lion king)",4,"🦁👑")  
        }
        else 
            step4("Wrong, correct answer was the good the bad and the ugly. Lastly, Level 5: Which movie is this? (It is not the Lion king) use an article",4,"🦁👑")
        document.getElementById("movie").value = ""}
}
//-----------------------------------Level 5-----------------------------------------------------
function step4(level, numwords, emoji){
    document.getElementById("movie").style.display="block"
    document.getElementById("label").style.display="block"
    document.getElementById("hint").style.display="block"
    document.getElementById("hint").onclick=function(){
            document.getElementById("hints").style.display="block"
            document.getElementById("hints").innerText="Ya, this is level 5 You don't get the hint."
            if (h>=50){
                h-=0
            }
            document.getElementById("score").innerText="score:"+h
    }
    document.getElementById("score").style.display="block"
    document.getElementById("score").innerText="score:"+h
    document.getElementById("rules").style.display="none"
    document.getElementById("start").style.display="none"
    document.getElementById("intro").innerText=`${level}, Type ${numwords} words`
    document.getElementById("click").style.display="none"
    document.getElementById("emoji").innerText=`${emoji}`
    document.getElementById("emoji").style.display="block"
    document.getElementById("submit").style.display="block"
    document.getElementById("submit").onclick=function(){
        document.getElementById("hints").style.display="none"
        t=document.getElementById("movie").value
        if (t.trim().toLowerCase().replace(/\s+/g,"")===`thechroniclesofnarnia`){
            document.getElementById("intro").innerText="Correct! Congratulations! You completed the Quiz. Final Score:" + h +"/500"
            h+=100
            document.getElementById("submit").style.display="none"
            document.getElementById("hint").style.display="none"
            document.getElementById("label").style.display="none"
            document.getElementById("movie").style.display="none"
            document.getElementById("emoji").style.display="none"
        }
        else 
            document.getElementById("intro").innerText="Wrong, correct answer was The chronicles of Narnia. Quiz Over! Final score"+ h + "/500"
            document.getElementById("submit").style.display="none"
            document.getElementById("hint").style.display="none"
            document.getElementById("label").style.display="none"
            document.getElementById("movie").style.display="none"
            document.getElementById("score").style.display="none"
            document.getElementById("emoji").style.display="none"

        document.getElementById("movie").value = ""}
} 
