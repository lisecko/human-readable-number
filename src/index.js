module.exports = function toReadable (number) {
  let arr_1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
  let arr_2 = [ 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  let str = number.toString()
  let result = ''

  if(number < 13)
  {
    return arr_1[number]
  }

  if(number > 12 && number < 20)
  {
    if(number === 13) return 'thirteen'
    if(number === 15) return 'fifteen'
    if(number === 18) return 'eighteen'
    return arr_1[number - 10] + 'teen'
  }

  if(number > 19 && number < 100)
  {
    if(parseInt(str[1]) === 0)
    {
      return arr_2[parseInt(str[0]) - 2]
    }
    else
    {
      return arr_2[parseInt(str[0]) - 2] + ' ' + arr_1[parseInt(str[1])]
    }    
  }

  if(number > 99 && number < 1000)
  {
    let result = arr_1[parseInt(str[0])] + ' hundred'

    if(parseInt(str[1]) === 0 && parseInt(str[2]) === 0) return result // Проверка на сотню   
    
    if((parseInt(str[1]) != 0 || parseInt(str[2]) != 0) && parseInt(str[1] + str[2]) < 13) return result + ' ' + arr_1[parseInt(str[1] + str[2])] // Проверка на число от .01 до .12
    
    if(parseInt(str[1] + str[2]) > 12 && parseInt(str[1] + str[2]) < 20)
    {
      if(parseInt(str[1] + str[2]) === 13) return result += ' thirteen'
      if(parseInt(str[1] + str[2]) === 15) return result += ' fifteen'
      if(parseInt(str[1] + str[2]) === 18) return result += ' eighteen'
      return result += ' ' + arr_1[parseInt(str[1] + str[2]) - 10] + 'teen'
    }
    if(parseInt(str[1] + str[2]) > 19 && parseInt(str[1] + str[2]) < 100)
    {
      if(parseInt(str[2]) === 0)
      {
        return result + ' ' + arr_2[parseInt(str[1]) - 2]
      }
      else
      {
        return result + ' ' + arr_2[parseInt(str[1]) - 2] + ' ' + arr_1[parseInt(str[2])]
      }    
    }
  }  
}