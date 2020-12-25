const wordExamples  = {
    'знак': ['знак', 'знака', 'знаков'],
    'слово': ['слово', 'слова', 'слов'],
    'абзац': ['абзац', 'абзаца', 'абзацев'],
}

const firstGroup = ['01', '21', '31', '41', '51', '61', '71', '81', '91']
const secondGroup = ['02', '03', '04', '22', '23', '24', '32', '33', '34', '42', '43', '44', 
                    '52', '53', '54', '62', '63', '64', '72', '73', '74', '82', '83', '84', '92', '93', '94']

export function rightWord(number, word) {
  let baseNumber = 0;
  let rightWord = '';
  if (number.toString().slice(-2).length < 2) {
    baseNumber = '0'.concat(number.toString().slice(-2))
  } else {
    baseNumber = number.toString().slice(-2)
  }
  if (firstGroup.includes(baseNumber)) {
    rightWord = wordExamples[word][0]
  } else if (secondGroup.includes(baseNumber)) {
    rightWord =  wordExamples[word][1]
  } else rightWord = wordExamples[word][2]
  return `${number} ${rightWord}`
}