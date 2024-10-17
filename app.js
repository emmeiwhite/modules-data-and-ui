import { random } from './modules/random.js'

console.log(random)
const persons = [
  {
    id: 1,
    name: 'John Doe',
    job: 'Software Engineer'
  },
  {
    id: 2,
    name: 'Jane Smith',
    job: 'Data Scientist'
  },
  {
    id: 3,
    name: 'Emily Johnson',
    job: 'Product Manager'
  }
]

const personsDOM = document.querySelector('.persons-wrapper')
const btnDOM = document.querySelector('.btn')

btnDOM.addEventListener('click', () => {
  const personsUIString = persons
    .map(person => {
      const { name, job } = person
      return `<p><strong>Name</strong>: ${name} & <strong>Profession</strong>: ${job}</p>`
    })
    .join('')

  personsDOM.innerHTML = personsUIString
})
