const treeForm = document.querySelector('#treeForm')

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

//   const tree = {
//     name: f.treeName.value
//   }
  const list = document.createElement('ul')
  details.appendChild(list);

  const listTreeName = document.createElement('li')
  listTreeName.textContent = f.treeName.value

  const button = document.createElement('input')
  button.type = 'button'
  button.value = 'Favorite'
  button.id = 'favoriteButton'

  list.appendChild(listTreeName)
  list.appendChild(button)
  details.insertBefore(list, details.firstChild)
}

treeForm.addEventListener('submit', handleSubmit)