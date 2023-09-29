// almostIncreasingSequence
// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
function solution(sequence) {
    let counter = 0;
    const s = sequence;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] >= s[i]) {
            counter++
            if (counter > 1) return false;
            if (s[i - 2] >= s[i] && s[i - 1] >= s[i + 1]) return false;
        }
    }
    return true;
}