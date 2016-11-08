var obj = [
    {
        name: "Great",
        height: 340
                        },
    {
        name: "Shit",
        height: 270
                        },
    {
        name: "Hello",
        height: 400
                        },
    {
        name: "b1",
        height: 210
                        },
    {
        name: "b2",
        height: 300
                        }
                    ]
var obj_g = [];
window.shipValue = 150;
window.waterlevel = -7;
console.log(window.shipValue);
console.log(window.waterlevel);

//sorting
for (var i = 0; i < obj.length; i++) {
    console.log("inside for every obj[i].height: " + obj[i].height)
    if (window.shipValue + window.waterlevel < obj[i].height)
    //new array of bridges that ship can pass under
    {
        console.log("Inside if op " + obj[i])
        obj_g.push(obj[i]);
    };

};
console.log(obj_g)