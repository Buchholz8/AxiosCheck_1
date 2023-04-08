axios.request({
    url: `https://www.themealdb.com/api/json/v1/1/random.php`
}).then(success).catch(fail);
function success(response){
document.body.insertAdjacentHTML(`beforeend` , `<div>
<p> ${response[`data`][`meals`][0][`strMeal`]} </p>
<p> ${response[`data`][`meals`][0][`strArea`]} </p>
<p> ${response[`data`][`meals`][0][`strInstructions`]} </p>
</div>`)
}
function fail(response){
    document.body[`innerHTML`] = `something went wrong`
}

function sec_success(response){
      document.body.insertAdjacentHTML(`beforeend` , `<div>
    <p> ${response[`data`][`meals`][0][`strMeal`]} </p>
    <img src="${response[`data`][`meals`][0][`strMealThumb`]}"></img>

    </div>`)
    }
    
    function sec_fail(response){
        document.body[`innerHTML`] = `something went wrong`
    }

    function click_me(details){
let user_inp = document.querySelector(`inp`);
let user_val = user_inp[`value`];
axios.request({
    url:`https://www.themealdb.com/api/json/v1/1/filter.php`,
    params: {
c:`chicken`,
c: user_val
    }

}) .then(sec_success).catch(sec_fail);
    }
let button = document.querySelector(`.btn`);
button.addEventListener(`click` , click_me);
function user_changes(details){
    axios.request({
url:`https://jsonplaceholder.typicode.com/`,
methode:`POST`,
data: {
    title :user_val,
    body :user_val,
    userid:user_val
}
    }).then(third_success).catch(third_fail);
}
function third_success(response){
    document.body[`innerHTML`] = `your post has been sent`
}
function third_fail(response){
    document.body[`innerHTML`] = `something went wrong`
}
