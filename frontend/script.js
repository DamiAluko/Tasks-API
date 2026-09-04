
const API_URL = "http://localhost:3000/tasks"

const fetchTasks = async() => {
  const res = await fetch(API_URL)
  const tasks = await res.json()

  renderTasks(tasks)
}

const renderTasks = async(tasks) => {
  const list = document.getElementById('task-list')
  list.innerHTML = ''

  tasks.forEach((task) => {
    const li = document.createElement('li')
    li.textContent = `${task.title} - ${task.content}`

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'

    const updateBtn = document.createElement('button')
    updateBtn.textContent = 'Update'

    updateBtn.addEventListener('click', async()=>{
      const title = prompt("Enter new title:", task.title) 
      const content = prompt("Enter new content:", task.content)

      await fetch(`${API_URL}/${task._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title, content})
      })
      fetchTasks()
    })

    deleteBtn.addEventListener('click', async()=>{
      await fetch(`${API_URL}/${task._id}`, {
        method: 'DELETE'
      })
      fetchTasks()
    })

    li.appendChild(updateBtn)
    li.appendChild(deleteBtn)
    list.appendChild(li)
  })

}

fetchTasks()

const form = document.getElementById('task-form')
form.addEventListener('submit', async(e) => {
  e.preventDefault()

  const title = document.getElementById('title-input').value
  const content = document.getElementById('content-input').value

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({title, content})
  })

  form.reset()
  fetchTasks()
})

