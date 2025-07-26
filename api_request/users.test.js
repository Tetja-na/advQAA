const axios = require('axios');
const jsonData = require('../envs.json');
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
    fs.writeFileSync('envs.json', JSON.stringify(jsonData))
})
test("Admin can get user list", async () => {
        var response = await axios.get(`${jsonData.baseUrl}/user/list`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": jsonData.token
                }
            })
        console.log(response.data.users);
        expect(response.data.message).toContain("Login successfully");
    })
