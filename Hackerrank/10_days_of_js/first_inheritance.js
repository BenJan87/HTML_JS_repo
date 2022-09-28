class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
Rectangle.prototype.area = function() {return this.w*this.h} 

class Square extends Rectangle {
    constructor(a) {
        super(a, a)
    }
}

let rec = new Rectangle(3, 4)
console.log(rec.area())
let sq = new Square(4)
console.log(sq.area())