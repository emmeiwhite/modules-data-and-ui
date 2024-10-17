import { persons } from './modules/data.js'
import showPersons from './modules/showPersons.js'

const personsDOM = document.querySelector('.persons-wrapper')
const btnDOM = document.querySelector('.btn')

btnDOM.addEventListener('click', () => {
  personsDOM.innerHTML = showPersons(persons)
})
