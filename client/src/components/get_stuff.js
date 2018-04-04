import React, { Component } from 'react';
import axios from 'axios';

class GetStuff extends Component{

    componentDidMount(){
        axios.get('/api/get-stuff').then(( resp ) =>{
            console.log('response from server:', resp );
        });

        axios.post('/api/get-user').then((resp)=> {
            console.log('response from get user:', resp);
        });
    }

    render(){
        return(
            <div>
                <h1>YOoooooooooo</h1>
            </div>
        )
    }
}

export default GetStuff;