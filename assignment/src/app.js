//const logger=require('./util/logger')
//const helper=require('./util/helper')
//const formatter=require('../validator/formatter')
const obj=require('lodash')
//module-1
//logger.log('Hritik Pradhan')
//logger.welcome()
//console.log('Here is the url'+logger.url)
//module-2
//helper.printDate()
//helper.printMonth()
//helper.getBatchInfo()
//module-3
//formatter.trimString()
//formatter.changetoLowerCase()
//formatter.changetoUpperCase()
//console.log('--------------------------')
console.log(obj._.chunk(['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],4))
console.log('-----------------------------------------------')
console.log(obj._.tail([ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]))
console.log('-----------------------------------------------')
console.log(obj._.union([1,2,3,4],[2,1,2],[1,2,3],[1,2],[1]))
console.log('-----------------------------------------------')
console.log(obj._.fromPairs([['horror','the shining'],['anime','jujustu kaisen'],['drama','titanic']]))