interface Coordinates {
    x: number,
    y: number
}

abstract class MyGraphicsPrimitive2D {
  leftTop: Coordinates
  rightBottom: Coordinates

  movePrimitive(moveLT: Coordinates, moveRB: Coordinates): void{
    this.leftTop.x += moveLT.x
    this.leftTop.y += moveLT.y
    this.rightBottom.x += moveRB.x
    this.rightBottom.y += moveRB.y
  }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {

  abstract getArea(): void 
}

class MyCircle extends MyAreaPrimitive2D {
  center: Coordinates
  radius: number
  
  constructor(c: Coordinates, r: number){
    super()
    this.center = c
    this.radius = r
  }
  
  getArea(): void {
    const areaCircle = (this.radius * this.radius) * 3.14
    console.log('area: ', areaCircle)
  }
}

class MyRectangle  extends MyAreaPrimitive2D {
  height: number
  width: number
  
  constructor(h: number, w: number){
    super()
    this.height = h
    this.width = w
  }

  getArea(): void {
    const areaRectangle = this.height * this.width
    console.log('area: ', areaRectangle)
  }
}