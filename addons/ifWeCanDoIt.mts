export function returnIfElse<I1, I2>(ifTrue: I1, expression: unknown, ifFalse: I2): I1 | I2 {
    return expression ? ifTrue : ifFalse
}