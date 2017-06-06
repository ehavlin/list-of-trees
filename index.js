const treeForm = document.querySelector('#treeForm')

function renderListItem(label, value) {
  const item = document.createElement('li')
  item.innerHTML = `${value}`

  return item
}

function renderList(tree) {
  const list = document.createElement('ul')

  Object.keys(tree).map(function(label) {
    const item = renderListItem(label, tree[label])
    list.appendChild(item)
  })

  return list
}

function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const details = document.querySelector('#details')

  const tree = {
    name: f.treeName.value
  }
  
  const list = renderList(tree)
  details.insertBefore(list, details.firstChild)
}

treeForm.addEventListener('submit', handleSubmit)