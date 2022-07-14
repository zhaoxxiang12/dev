async function getMovies() {
    let responseData
    await $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies',
        type: 'get',
        contentType: 'application/json',
        success: (data) => {
            responseData = data
        }
    })
    return responseData
}

async function getCinema() {
    let cinema
    await $.ajax({
        url: 'https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas',
        type:'get',
        contentType:'application.json',
        success (data) {
            cinema = data
        }
    })
    return cinema
}

