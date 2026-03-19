export function divide(num: number, den: number): number{
    if (den !== 0){
        return num/den
    } else {
        throw new Error("Dividing by 0 is not possible.")
    }
}