let baseURL = 'https://api.unsplash.com/photos/random?client_id=CTmQ7YFpK_hnb_wuuecM9Lc0kbqBOSax3E4DhBobxlI'


const card = document.querySelector('.container');
const cardBody = document.querySelector('.card-body');
const moreInfoBtn = document.querySelector('.btn');
moreInfoBtn.addEventListener('click', fetchData);


function fetchData () {
    fetch(baseURL)
        .then(response => {
            console.log(response.status)
            if(response.status === 403) {
                alert("You've clicked too many times, try again later");
            } else {
            return response.json()
            }
        })
        .then(json => displayImage(json));

}

function displayImage(object) {
    
    let image = object.urls.small;
    console.log(image);

    let img = document.createElement('img');
    //img.className = 'card-img-top';
    img.src = image; //this is where the image should display.

    let title = document.createElement('h1');
    title.className = 'card-title';
    title.innerText = object.alt_description;

    let date = document.createElement('p');
    date.className = 'card-text';
    date.innerText = object.created_at;
    
    moreInfoBtn.addEventListener('click', () => {
        card.removeChild(img);
        cardBody.removeChild(title);
        cardBody.removeChild(date);
    });

    card.appendChild(img);
    cardBody.appendChild(title, moreInfoBtn);
    cardBody.appendChild(date, moreInfoBtn);
}
