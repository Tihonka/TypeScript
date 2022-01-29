interface TodosResponse{
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
  
function getTodosByCount(count: number){
  for(let i=1; i<=count; i++){
    fetch('https://jsonplaceholder.typicode.com/todos/' + i)
      .then<TodosResponse>(response => response.json())
      .then(json => console.log(json))
      .catch (error => console.log(error)
      )
  }
}
  
getTodosByCount(10)