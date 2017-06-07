const treeForm = document.querySelector('#treeForm')
const details = document.querySelector('#details')

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

  const div = document.createElement('div')
  div.innerHTML = listTreeName.outerHTML + button.outerHTML + '<hr> </hr>'
  details.insertBefore(div, details.firstChild)

  const btn = document.getElementById('favoriteButton')
  btn.addEventListener('click', function() {highlightRow(this)})}

function highlightRow(index){
    if (index.value === 'Unfavorite'){
        index.value = 'Press to favorite'
    }
    else {
        index.value = 'Unfavorite'
    }  
}

treeForm.addEventListener('submit', handleSubmit)