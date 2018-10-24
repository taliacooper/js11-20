//1.firstlast
function firstLast6(array){

        if(array[0]== 6 || array[array.length - 1]== 6){
            return true;
        }
        else{
            return false;
        }
}

//2.has_23
function has23(array){
    if(array[0]==2 || array[0]== 3 || array[1]==2 || array[1]== 3){
        return true;
    }
    else{
        return false;
    }
}

//3.fix_23
function fix23(array){
    for(var i=0; i<array.length; i++){
        if(array[i]==2 && array[i+1]==3){
            array[i+1]=0
        }

    }
    return array;
}
// 4.countyz
function countYZ(word){
    word = word.toLowerCase();
    count = 0;
    for(var i=0; i<word.length; i++){
        if (word[i] == "y" && word[i+1]==" "){
            count ++;
        }
        if (word[i]== "z" && word[i+1]==" "){
            count ++;
        }

    }
    if(word[word.length -1]=="y" || word[word.length -1]=="z"){
        count++;
    }
    return count;
}

//5.endOther
function endOther(word1, word2) {
    w1 = word1.toLowerCase();
    w2 = word2.toLowerCase();
    if (w1.endsWith(w2) || w2.endsWith(w1)) {
        return true;
    } else {
        return false;
    }
}

//6. starOut
function starOut(exp){
    var answer = "";
    for(var i=0; i<exp.length; i++){
        if(exp[i - 1 ]!= "*" && exp[i+1] != "*" && exp[i] != "*"){
            answer = answer + exp[i];

        }
    }


    return answer;
}

//7.getSandwich

function getSandwich(sndwch) {
    if (sndwch.indexOf("bread") == sndwch.lastIndexOf("bread")){
        return "";
    }
    if (sndwch.indexOf("bread")!= -1 && sndwch.lastIndexOf("bread")!= -1 ){

        return sndwch.substring(sndwch.indexOf("bread") + 5 , sndwch.lastIndexOf("bread"));
    }
}


//8.canBalance
function canBalance(arr){
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < arr.length; i++){
        sum1 += arr[i];
        sum2 = 0;
        for(var a = i+1; a < arr.length; a++){
            sum2 += arr[a];
        }
        if(sum1 == sum2 ){
            return true;
        }

    }
    return false;
}

//9.countClumps
function countClumps(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == arr[i-1] && arr[i] != arr[i+1]){
            count ++;

        }
    }
return count;
}

//10.evenlySpaced


function evenlySpaced(a,b,c){
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    var avg = (max+min)/2;
    if(avg == a || avg == b || avg == c ){
        var answer = true;
    }
    else{
        var answer = false;
    }
    return answer;
}













