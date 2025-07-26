const axios = require('axios');
const jsonData = require('../env.json');
const fs = require('fs')

test("User can login successfully", async () => {
        var response = await axios.post(`${jsonData.baseUrl}/user/login`,
            {
                "email": "salman@roadtocareer.net",
                "password": "1234"
            },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            })
        console.log(response.data)
        expect(response.data.message).toContain("Login successfully")
        let token_value = response.data.token;
        jsonData.token = token_value;
        fs.writeFileSync('env.json', JSON.stringify(jsonData))
    })

test("Get all book list", async () => {
    const response = await axios.get('https://demoqa.com/bookstore/v1/books', { //calling the get API
        headers: {
            'Content-Type': 'application/json',
        }
    });
    console.log(response.data);
    expect(response.status).toEqual(200); //asserting if the response code is 200
})

test("Admin can get user list", async () => {
    const jsonData = require('../env.json');
        var response = await axios.get(`${jsonData.baseUrl}/user/list`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": jsonData.token
                }
            })
        console.log(response.data.users);
    })


    
    