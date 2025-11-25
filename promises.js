function fetchUser() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("User data loaded");

        }, 2000);
    });
}

fetchUser().then(result => console.log(".then: " + result));

async function loadUser() {
    const data= await fetchUser();
    console.log("async/await:" , data)    
}

loadUser();
