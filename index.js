const treeForm = document.querySelector('#treeForm')
const details = document.querySelector('#details')

function markFavorite(index){
    if (index.value === 'Unfavorite'){
        index.value = 'Press to favorite'
    }
    else {
        index.value = 'Unfavorite'
    }  
}

function deleteEntry(index){
    index.id = 'deleteme'
    const button = document.getElementById('deleteme')
    const parent = button.parentNode
    const grandparent = parent.parentNode
    while (grandparent.firstChild){
        grandparent.removeChild(grandparent.firstChild)
    }
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target

  const list = document.createElement('ul')

  const listTreeName = document.createElement('li')
  listTreeName.textContent = f.treeName.value

  const button = document.createElement('input')
  button.type = 'button'
  button.value = 'Press to favorite'
  button.id = 'favoriteButton'

  const deleteButton = document.createElement('input')
  deleteButton.type = 'button'
  deleteButton.value = 'Press to delete'
  deleteButton.id = 'deleteButton'
  listTreeName.appendChild(deleteButton)
  listTreeName.appendChild(button)

  const div = document.createElement('div')
  div.innerHTML = listTreeName.outerHTML + '<hr> </hr>'
  details.insertBefore(div, details.firstChild)

  const btn = document.getElementById('favoriteButton')
  btn.addEventListener('click', function() {markFavorite(this)})

  const dbtn = document.getElementById('deleteButton')
  dbtn.addEventListener('click', function() {deleteEntry(this)})
}  

treeForm.addEventListener('submit', handleSubmit)