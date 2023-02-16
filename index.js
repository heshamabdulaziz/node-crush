function myname(){

    console.log("hello hesham alsofi")
}

function job(){

    console.log("hello team leader")
}
 exports.printmyage=()=>{
const  ag=34;
    console.log(`MY AGE ${ag}`)
}

module.exports.firstfun=myname;
module.exports.secondfun=job;