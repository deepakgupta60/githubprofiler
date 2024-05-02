let searchInput = document.querySelector("#search");


searchInput.addEventListener("change",function(e){
    if(e.target.value)
    {
        getUserDetails(e.target.value);
    }
    else
    {
        null;
    }
    
})

async function getUserDetails(username)
{
    let dataRawData = await fetch(`https://api.github.com/users/${username}`);
    let finalData = await dataRawData.json();
    console.log(finalData)
    createUserCard(finalData);
    return finalData;

}
function createUserCard(username)
{
    let container=document.querySelector("#container");
    let cardFromDom = ` <div class="card mb-3 w-md-70" >
    <div class="row g-0">
      <div class="col-md-4 col-12">
        <img
          src=${username.avatar_url}
          class="imgClass"
          alt="..."
        />
      </div>
      <div class="col-md-8 col-12">
        <div class="card-body">
          <h5 class="card-title text-center text-sm-center text-md-start text-lg-start">${username.name}</h5>
          <p class="card-text text-center text-sm-center text-md-start text-lg-start">
           ${username.bio}
          </p>
          <p class="card-text"></p>
          <div class="row">
            <div class="col-4 col-lg-4"><strong>Followers:</strong> ${username.followers}</div>
            <div class="col-4 col-lg-4"><strong>Following:</strong>${username.following}</div>
            <div class="col-4 col-lg-4"><strong>Repos:</strong>${username.public_repos} </div>
              <div class="col-6"><strong>Twitter: </strong>${username.twitter_username} </div>
              <div class="col-6"><strong>Location:</strong> ${username.location}</div>


          </div>
        </div>
      </div>
    </div>
  </div>`

  container.innerHTML=cardFromDom;

}