function showPersons(persons) {
  const personsUIString = persons
    .map(person => {
      const { name, job } = person
      return `<p><strong>Name</strong>: ${name} & <strong>Profession</strong>: ${job}</p>`
    })
    .join('')

  return personsUIString
}

export default showPersons
