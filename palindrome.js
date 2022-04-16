const palindrome = (str) => {
  let palindromeCount = 0
  let palindromeWord = []
  let palindromeIndex = []
  let notPalindromeIndex = []
  wordArray = str.split(' ')
  
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i]
    let reverseWord = ''

    for (let j = word.length - 1; j >= 0; j--) {
      reverseWord += word[j]
    }

    if (word == reverseWord) {
      palindromeCount++
      palindromeWord.push(word)
      palindromeIndex.push(i)
    } else {
      notPalindromeIndex.push(i)
    }
  }

  console.log(`Total detected palindrome : ${palindromeCount}`)
  console.log(`Palindrome words : ${palindromeWord.join(',')}`)
  console.log(`Palindrome index : ${palindromeIndex.join(',')}`)
  console.log(`Invalid palindrome index : ${notPalindromeIndex.join(',')}`)
}

palindrome('kakak menjual katak dengan harga 12021')