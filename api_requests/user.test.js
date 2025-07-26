const axios = require('axios');

test("User can login successfully", async () => {
    var response = await axios.post(`http://dmoney.roadtocareer.net/user/login/user/login`,
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
})