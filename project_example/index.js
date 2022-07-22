import { DENSITY, SCREEN_HEIGHT, SCREEN_WIDTH } from "./configs"
import { aspectRatio, trueSize } from "./functions"

function main() {
    console.log("Aspect Ratio is:",aspectRatio(SCREEN_WIDTH,SCREEN_HEIGHT))
    console.log("Aspect Ratio is:",aspectRatio(SCREEN_WIDTH,SCREEN_HEIGHT))
    console.log("True size:", trueSize(SCREEN_WIDTH,SCREEN_HEIGHT, DENSITY))
}

main()