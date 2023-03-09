class ApiService {

    url = 'https://usmegalottery.com/api/'
    tableName = ''
    token = ''
    options = {}

    constructor(tableName) {
        this.tableName = tableName
    }

    Test = ()=>{
        alert(this.url)
    }
    
    getApiToken = async ()=>{
        
        let data = await localStorage.getItem('token')
        this.token = JSON.parse(data)
    }

    Authenticate = async (params)=>{
        try {
            let address = this.url+this.tableName;
            const response = await fetch(address,{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            const Data = await response.json();

            return Data;

        } catch (error) {

            console.error(error);

        }
    }

    Get = async () => {
        // Getting all data from table
        await this.getApiToken()

        try {
            const response = await fetch(this.url + this.tableName, {
                method: 'GET',
                headers: {
                    'x-token-auth': this.token,
                    accept: 'application/json',
                    'content-type': 'application/json'
                }
            })

            const Data = await response.json();

            return Data;

        } catch (error) {

            console.log(error);

        }



    }


    GetById = async (Id) => {
        //Getting Data by id
        let address = this.url + this.tableName + "/" + Id + "/"


        await this.getApiToken()

        try {

            const response = await fetch(address, {
                method: 'GET',
                headers: {
                    'x-token-auth': this.token,
                    accept: 'application/json',
                    'content-type': 'application/json'
                }
            })

            const Data = await response.json();

            return Data;

        } catch (error) {
            console.error(error);
        }

    }


    Post = async (params) => {

        await this.getApiToken()        
        
        try {
            const response = await fetch(this.url + this.tableName, {
                method: 'POST',
                headers: {

                    'x-token-auth': this.token,
                    accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            })

            return await response.json();
        } catch (error) {
            console.error(error)

        }
    }


    unsecuredPost = async (params) => {

        
        try {
            const response = await fetch(this.url + this.tableName, {
                method: 'POST',
                headers: {

                    accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            })

            return await response.json();
       
        } catch (error) {
            console.error(error)

        }
    }



    PostById = async (params) => {
        //posting data by ID
        await this.getApiToken()

        try {
            const response = await fetch(this.url + this.tableName + Id, {
                method: 'POST',
                headers: {
                    'x-token-auth': this.token,
                    accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            })

            return await response;

        } catch (error) {
            console.error(error);
        }
    }


    UpdateById = async (params) => {
        //updating table by id
        await this.getApiToken()

        try {
            const response = await fetch(this.url + this.tableName, {
                method: 'PATCH',
                headers: {
                    'x-token-auth': this.token,
                    accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            })

            return await response.json()

        } catch (error) {

            console.error(error);

        }
    }

    




}


