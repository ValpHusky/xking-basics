export function aspectRatio(width, height) {
    return width /height
}

export function trueSize(width, height, density) {
    return [(width * density),(height * density)]
}

export function screenPercentageSize(originalWidth, originalHeight, percentage) {
    return [(originalWidth * percentage), (originalHeight * percentage)]
}