import { persons } from './modules/data.js'
import showPersons from './modules/showPersons.js'
import get from './modules/get.js'

const personsDOM = get('.persons-wrapper')
const btnDOM = get('.btn')

btnDOM.addEventListener('click', () => {
  personsDOM.innerHTML = showPersons(persons)
})
