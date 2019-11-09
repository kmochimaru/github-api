function onInit(){
    axios.get('https://api.github.com/users/kmochimaru')
        .then(function(response){
            console.log(response);
            console.log(response.data.avatar_url);
            document.getElementById('avatar').src = response.data.avatar_url;
            document.getElementById('username').innerHTML = response.data.login;
        });
}