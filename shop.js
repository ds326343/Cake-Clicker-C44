class Shop{
    constructor(){
        
    }
    display(){
        var button1 = createButton("Buy")
        button1.position(50,windowHeight-50)
        fill("green")
        textSize(20)
        text("$50 - +1 Money Per Click",button1.x-50,button1.y-40)
        button1.mousePressed(()=>{
            if(money>=50){
                moneyPerClick = moneyPerClick+1
                money = money-50
            }
        })
            
        
            
        
            
        

    }
}