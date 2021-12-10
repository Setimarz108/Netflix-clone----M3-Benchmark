const hideAppear = function(){
    let iconId = document.getElementById("search-icon-nav")
    let searchInput = document.getElementById("nav-form-control")
    iconId.style.display = "none"
    searchInput.style.display = "block"
}
const hideAppear1 = function(){
    let iconId = document.getElementById("search-icon-nav")
    let searchInput = document.getElementById("nav-form-control")
    iconId.style.display = "block"
    searchInput.style.display = "none"
}


// fetch data    

    const getMovies = async () => {
      
        try{
            
            
            const url = "https://striveschool-api.herokuapp.com/api/movies/Action" ;

                  let response = await fetch(url, {
                headers: {"Authorization": 
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjZlNjRjZmY1ZjAwMTU5MGJkYzciLCJpYXQiOjE2MzkxMzE4MTMsImV4cCI6MTY0MDM0MTQxM30.ofSSpWSsxVlPnYi8DKMpDrWKIy4H10plB5VvVJOkx90" 
             }  
        })
               
            let movies = await response.json()
            displayMovies(movies)
            console.log(movies)
                 
    } catch(error){
        console.log(error)
    }
}

const displayMovies = (data)=>{

    let movies_carousel = document.getElementById('movies_row')
    console.log(movies_row)

    data.forEach(movie => {

        let newRow = document.createElement('div')
        newRow.classList.add('col-md-2','pt-2', 'pb-2', 'pl-2', 'pr-1', 'mt-3', 'img-hover-zoom',)

        newRow.innerHTML = `
              
        
            <img src=${movie.imageUrl} class="card-img-top" alt="..." width="100%" height="100%" style="object-fit:cover;"/>
       
                                                
       `

       movies_carousel.appendChild(newRow)
        
    });
}


window.onload = () => {
    getMovies()
    
    }

