const searchFood = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  searchField.value = '';

  const url = ` https://openlibrary.org/search.json?q=${searchText}
    `;
  // console.log(url);
   
  fetch(url)
    .then(res => res.json())
    //.then(data =>displaySearchResult(data.docs))
    .then(data =>displayFound(data.numFound));
    
    fetch(url)
    .then(res => res.json())
    .then(data =>displaySearchResult(data.docs))
    //.then(data =>console.log(data.numFound));
    
    
}

  const displayFound = total =>{
     if(total == 0)
     {
      const result = document.getElementById('error');
      result.textContent='';
      const div = document.createElement('div');
      div.innerHTML=`
      <h4 class="text-center bgcol w-50 mx-auto p-2 rounded">
      Not Found</h4>
      `;
      result.appendChild(div);
     }
    
     else
     {
      const result = document.getElementById('error');
      result.textContent='';
      const div = document.createElement('div');
      div.innerHTML=`
      <h4 class="text-center bgcol w-50 mx-auto p-2 rounded">
      Found Result:${total}</h4>
      `;
      result.appendChild(div);
     }
   //console.log(total);
  }
    

  const displaySearchResult = books => {
  const searchResult = document.getElementById('search-result');

  searchResult.textContent='';
  books.forEach(book => {
    //const pp =book.numFound;
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div onclick="loadMealDetail(${book.title})" class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">Title: ${book.title}</h4>
          <h5 class="card-title">Author: ${book.author_name}</h5>
          <h6 class="card-title">Publisher: ${book.publisher[0]}</h6>
          <p class="card-text">Published Date: ${book.first_publish_year}</p>
          
        </div>
      </div>
        `;
    searchResult.appendChild(div);
    
  })
}



