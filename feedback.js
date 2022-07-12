
window.addEventListener("load", function(){
  submit=document.getElementById("submit");
  submit.addEventListener("click",createIssue,false);
},false)

const createIssue = () => {
  const uri = "https://api.github.com/repos/kazuo278/hugo-sample/issues";
  const pat = document.getElementById("pat");
  const title = document.getElementById("title");
  const body = document.getElementById("body");

  fetch(uri, {
    method: "POST",
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": "token " +  pat.value
    },
    body: createIssueJson(title.value, body.value)

  }).then(response => {
    console.log(response);
    if(response.ok){
      return response.json().then(resJson => {
        console.log(JSON.stringify(resJson));
      });
    }
    throw new Error("ISSUE登録に失敗しました");
  }).catch(error => {
    console.error(error);
  })
}

const createIssueJson = (title, body) => {
  let data = {
    "title": title,
    "body": body
  }
  return JSON.stringify(data);
}
