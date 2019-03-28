const pressed =[];
const secretcode= "secret";


window.addEventListener("keyup", (e)=>{
    pressed.push(e.key);
    pressed.splice(-secretcode.length -1, pressed.length - secretcode.length);

    if(pressed.join("").includes(secretcode)){
        console.log("YYYAAAAAASSSSSS !!!");
        cornify_add();
    }
});
