
const postMovie = async () => {

    let movieInfo = document.getElementById('movieInfo')
    console.log(movieInfo)

    const url = "https://striveschool-api.herokuapp.com/api/movies/"

    movieInfo.addEventListener('submit', async(event) => {

        event.preventDefault()

        let response = await fetch(url, {
          
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2MzkxMzE4MTMsImV4cCI6MTY0MDM0MTQxM30.ofSSpWSsxVlPnYi8DKMpDrWKIy4H10plB5VvVJOkx90" 
            },

            body : JSON.stringify({

                  name: `${event.target.name.value}`,
                  description:`${event.target.description.value}`,
                  category:`${event.target.category.value}`,
                  imageUrl:`${event.target.imageUrl.value}`,

            })

       })
     
       let data = await response.json()
       console.log(data)
    })

}



//  retrieve Movie Info

const getMovieInfo = async () => {

    
     let movieId= new URLSearchParams(location.search).get('_id');
     let movieName = document.getElementById('name')
     let movieDescription = document.getElementById('description')
     let movieCategory = document.getElementById('category')
     let movieImage = document.getElementById('imageUrl')


     
     let response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/Action${movieId}`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2MzkxMzE4MTMsImV4cCI6MTY0MDM0MTQxM30.ofSSpWSsxVlPnYi8DKMpDrWKIy4H10plB5VvVJOkx90" 
        }
    })   

    let movie = await response.json()

    movieName.value = movie.name
    movieDescription.value = movie.description
    movieCategory.value = movie.category
    movieImage.value = movie.imageUrl 
}



const editMovie = async () => {

       let editBtn = document.getElementById('editBtn')
      
       let movieId = new URLSearchParams(location.search).get('_id')

       editBtn.addEventListener('click', async () => {

            let response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2MzkxMzE4MTMsImV4cCI6MTY0MDM0MTQxM30.ofSSpWSsxVlPnYi8DKMpDrWKIy4H10plB5VvVJOkx90" 
                },

                

                body : JSON.stringify({

                    name: document.getElementById('name').value,
                    description: document.getElementById('description').value,
                    category: document.getElementById('category').value,
                    imageUrl: document.getElementById('imageUrl').value,


                })
            })
           
            let data = await response.json()
            console.log(data)
       })
    
}

window.onload = async () => {
    await postMovie()
    await getMovieInfo()
    await editMovie()
}
