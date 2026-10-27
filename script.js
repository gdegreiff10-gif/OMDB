

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON
        search = document.getElementById("search").value
        let url = "http://www.omdbapi.com/?s=" + search + "&apikey=a57a5f80&"
        const headers = new Headers()
        headers.append("Accept", "application/json")
        const response = await fetch(url, {headers:headers})
        const json = await response.json()
        console.log(json)

        const movieHolder = document.getElementById("movieHolder");
        movieHolder.textContent = ""
        for (movie of json.Search) {
            //  Create a div to hold each image and title 
            //  Give the div the css class of CARD
            const wrapper = document.createElement("div")
            wrapper.classList.add("card")

            // Create an image element
            //      point it to the image from this movie            
            const image = document.createElement("img")
            image.src = movie.Poster


            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container
            const container = document.createElement("div")
            container.textContent = movie.Title + movie.Year
            container.classList.add("container")
            // Add the CONTAINER to the CARD
            wrapper.append(container)

            // Add all the elements to the movieHolder element
            movieHolder.append(image)
            movieHolder.append(wrapper)
        }


    }
    catch (error) {
        console.log(error)
    }
}