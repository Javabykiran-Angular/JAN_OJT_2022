import {Shape} from './shape';

export class Circle extends Shape {
    radius:number;
    area:number;

    constructor(rad:number){
          super();
          this.radius=rad;
          this.area=0;
    }

    Myarea(): void {
      this.area=3.14*this.radius*this.radius;
    }

    Display(){
      console.log(`
      ----------- Circle area -----------------
        Radius :: ${this.radius}
        Area   :: ${this.area}

      `)
    }


}
