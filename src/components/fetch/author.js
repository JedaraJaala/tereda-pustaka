export default async function getAuthor(author) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  let resp = await fetch(
    `https://tereda-pustaka.herokuapp.com/api/quotes/author?author=${author}`,
    requestOptions
  );
  resp = resp.json();
  return resp;
}
