/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace hello {
    //% block
    export function plotAt(index: number): void {
        index |= 0
        const y = Math.floor(index/5)
        const x = Math.floor(index%5)
        led.plot(x,y)
    }

    // note that Caml casing yields lower case
    // block text with spaces

    //% block
    export function plotled() {
        led.plot(4,3)

    }
}