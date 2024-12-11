function appendPost(post) {
    let postContainer = document.getElementById("myPost");
    for (let i = 0; i < post.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = 'Name: ' + post[i].firstName + ' ' + post[i].lastName;
        postContainer.appendChild(div);
    }
}

fetch('posts.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (post) {
    appendPost(post);
  })
  .catch(function (err) {
    console.log(err);
});
