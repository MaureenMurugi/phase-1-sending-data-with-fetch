function submitData(name, email) {
    const formData = {name, email }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = data.id
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    });
}

submitData();