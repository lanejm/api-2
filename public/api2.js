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




// const dataContainer = document.querySelector('.dataContainer');

// const btn = document.getElementById('button');
// btn.addEventListener('click', fetchData);

// function fetchData(e) {

//     fetch(baseURL)
//         .then(res => res.json())
//         .then(json => displayData(json));
//     const genData = document.getElementById('genImg');
//     const btn = document.getElementById('getImg');
//     if (btn) {
//         genData.removeChild(btn);
//     }
//     button.style.visibility = 'hidden';
// }

// function displayData (json) {
//     console.log('Display Results', json);
//     const data = json.response.holidays[44].name;
//     const data2 = json.response.holidays[44].description;

//     const dataText = document.createElement('h1');
//     dataText.className = 'data';
//     dataText.innerText = `${data}`;
//     dataText.style = 'font-family: arial; color: black;';

//     const data2Text = document.createElement('h2');
//     data2Text.className = 'data2';
//     data2Text.innerText = `${data2}`;
//     data2Text.style = 'font-family: arial; color; blue;';

//     const button = document.createElement('button');
//     button.className = 'reset';
//     button.innerText = 'Refresh Data';
//     button.style = 'align: center; margin: 0; margin-top: 4em;';

//     dataContainer.appendChild(dataText);
//     dataContainer.appendChild(button);

//     button.addEventListener('click', () => {
//         dataContainer.removeChild(dataText);
//         dataContainer.removeChild(button);
//         fetchData();
//     });

//     let dataLog = json.respone;
// }