export default async function getTopics(genres) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ genres: genres });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow"
  };
  if (genres.length > 0) {
    requestOptions.body = raw;
  }
  let resp = await fetch(
    "https://tereda-pustaka.herokuapp.com/api/quotes/topics",
    requestOptions
  );
  resp = resp.json();
  console.log(resp, "here");
  return resp;
}
