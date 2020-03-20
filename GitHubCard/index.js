/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



axios.get('https://api.github.com/users/HDPearlman')
.then(result => {
  console.log(result)
  console.log(result.data.avatar_url)
  console.log(result)

 
 
  console.log(githubCard(result))
  const cardContainer = document.querySelector('.cards')
  cardContainer.appendChild(githubCard(result))
  
  
})



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell]']

followersArray.forEach(name =>{
  axios.get(`https://api.github.com/users/${name}`)
.then(result => {
  console.log(result)
  console.log(result.data.avatar_url)
  console.log(result)

 
 
  console.log(githubCard(result))
  const cardContainer = document.querySelector('.cards')
  cardContainer.appendChild(githubCard(result))
  
  
})
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const githubCard = (object) =>{

  const divCard = document.createElement('div')
  divCard.classList.add('card')

    const userImg = document.createElement('img')
    userImg.src = object.data.avatar_url
    divCard.appendChild(userImg)

    const divCardInfo = document.createElement('div')
    divCardInfo.classList.add('card-info')
    divCard.appendChild(divCardInfo)

      const h3Name = document.createElement('h3')
      h3Name.classList.add('name')
      h3Name.textContent = object.data.name
      divCardInfo.appendChild(h3Name)

      const pUsername = document.createElement('p')
      pUsername.classList.add('username')
      pUsername.textContent = object.data.login
      divCardInfo.appendChild(pUsername)

      const pLocation = document.createElement('p')
      pLocation.textContent = `Location: ${object.data.location}`

      const pProfile = document.createElement('p')
      const profileLink = document.createElement('a')
      profileLink.href = object.data.html_url
      profileLink.textContent = object.data.html_url
      pProfile.appendChild(profileLink)

      const pFollowers = document.createElement('p')
      pFollowers.textContent = `Followers: ${object.data.followers}`
      
      const pFollowing = document.createElement('p')
      pFollowing.textContent = `Following: ${object.data.following}`

      const pBio = document.createElement('p')
      pBio.textContent = `Bio: ${object.data.bio}`

      divCardInfo.append(pLocation, pProfile, pFollowers, pFollowing, pBio)







  return divCard
}







/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
