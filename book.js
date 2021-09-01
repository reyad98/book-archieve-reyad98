const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    const url = ` http://openlibrary.org/search.json?q=${searchText}
    `;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}

const displaySearchResult = books => {
    const searchResult = document.getElementById('search-result');
    books.forEach(book => {
        //console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${book.title})" class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h4 class="card-title">Title:${book.title}</h4>
          <h5 class="card-title">Author:${book.author_name}</h5>
          <h6 class="card-title">Publisher:${book.publisher}</h6>
          <p class="card-text">published Date:${book.publish_date}</p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}


