// const host = process.env.NODE_ENV === "production" ? "https://webalarm.herokuapp.com" : "http://localhost:8080";
const host = process.env.NODE_ENV === "production" ? "https://webalarm.herokuapp.com" : "http://codewithsudeep:8080";

function post(path, body) {
  console.log(host+""+path);
  return fetch(`${host}${path}`, {
    credentials: "omit",
    headers: { 
      "content-type": "application/json;charset=UTF-8", 
      "sec-fetch-mode": "cors",
      "Accept": "application/json",
    },
    body: JSON.stringify(body),
    method: "POST",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

function get(path) {

  return fetch(host+'sk', {
    credentials: "omit",
    headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
    method: "GET",
    mode: "cors"
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data;
    });
}

const http = {
  post: post,
  get: get,
  host: host,
};

export default http;
