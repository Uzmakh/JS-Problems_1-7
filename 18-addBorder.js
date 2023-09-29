/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

    Example

For

picture = ["abc",
    "ded"]
the output should be

solution(picture) = ["*****",
    "*abc*",
    "*ded*",
    "*****"]
    */
        
function solution(picture) {
    const newPicture = picture.map(element => '*' + element + '*')
    let border = []
    for (let i = 0; i < newPicture[0].length; i++) {
        border.push('*')
    }
    border = border.join('')
    newPicture.push(border)
    newPicture.unshift(border)
    return newPicture
}