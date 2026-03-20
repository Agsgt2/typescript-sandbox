import { returnIfElse } from "./ifWeCanDoIt.mts";

export type point = {
    x: number;
    y: number;
}

class BasePoint {
    protected x = 0;
    protected y = 0;
}

export class Point extends BasePoint {
    constructor(x: number, y: number){
        super()
        this.x = x
        this.y = y
    }

    get X(): number {
        return this.x
    }

    set X(newx: number) {
        this.x = newx
    }

    get Y(): number {
        return this.y
    }

    set Y(newy: number) {
        this.y = newy
    }

    returnPoint(asPoint: boolean = false): [number, number] | point {
        if (asPoint == true){
            return {
                x: this.x,
                y: this.y
            }
        } else {
            return [this.X, this.y]
        }
    }

    setPartial(x?: number, y?: number){
        this.x = x ? x : this.x
        this.y = y ? y : this.y
    }

    move(x?: number, y?: number){
        this.setPartial(x ? (this.x + x) : this.x, y ? (this.y + y) : this.y)
    }
}

export function MakePoint(x?: number, y?: number, P?: point){
    if (x !== undefined && y !== undefined){
        return new Point(x, y)
    } else if (P !== undefined) {
        return new Point(P.x, P.y)
    }
}