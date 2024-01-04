function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    // console.log(name1 +" " + name2);
    // console.log(name2);

    if(name1==="" || name2===""){
        alert("Please enter both names to proceed...");
    }else{
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}`;

    if(lovePercentage < 30){
        result.innerHTML += " Not a great Match. Keeping searching!"
    }else if(lovePercentage >= 30 && lovePercentage < 70){
        result.innerHTML += " There is potential. Just go ahead and give it a try!"

    }else{
        result.innerHTML += " Good Match Buddies. Love in the Air!";
    }
    }
}