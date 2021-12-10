
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

postMovie()

//  edit Movie

const editMovie = async () => {

     let url = window.location.href
     let movieID= new URLSearchParams(url.split("?")[1].get('id'));
     let movieName = document.getElementById('name')
     let movieDescription = document.getElementById('description')
     let movieCategory = document.getElementById('category')
     let movieImage = document.getElementById('imageUrl')


     
     let response = await fetch(`https://striveschool-api.herokuapp.com/api/movies/${movieID}`, {
        method: 'GET',
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2MzkxMzE4MTMsImV4cCI6MTY0MDM0MTQxM30.ofSSpWSsxVlPnYi8DKMpDrWKIy4H10plB5VvVJOkx90" 
        }
    })   
}