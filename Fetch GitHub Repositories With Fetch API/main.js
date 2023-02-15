// Main Variables
let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

// Get Repos Function
function getRepos() {

  if (theInput.value == "") { // If Value Is Empty

    reposData.innerHTML = "<span>Please Write Github Username.</span>";

  } else {
  fetch(`https://api.github.com/users/${theInput.value}/repos`)
  .then((response)=>{
    return response.json()
  })
  .then((repos)=>{
    //empty Container
    reposData.innerHTML=" ";
    repos.forEach((repo)=>{
      let mainDiv=document.createElement('div');
      let mainText=document.createTextNode(repo.name);
      mainDiv.appendChild(mainText);

        //mainDiv
      let elementDiv=document.createElement('div');
      let mainRepo=document.createTextNode(repo.language);
      elementDiv.appendChild(mainRepo);

      //create  url link
        
      let urlText=document.createElement('a');
      let urlContent=document.createTextNode("visit");
      urlText.appendChild(urlContent)

      let starsSpan = document.createElement("span");

      // Create The Stars Count Text
      let starsText = document.createTextNode(`Stars is ${repo.stargazers_count}`);

      // Add Stars Count Text To Stars Span
      starsSpan.appendChild(starsText);

      // Append Stars Count Span To Main Div
      mainDiv.appendChild(starsSpan);


      //add hyperText
      urlText.href=` https://github.com/${theInput.value}/${repo.name}`;
      urlText.setAttribute('target', '_blank');
      mainDiv.appendChild(urlText);
   mainDiv.className="repo-box"

      //crete RepoUrl

      reposData.appendChild(mainDiv)
    })
  })
    
  }
}