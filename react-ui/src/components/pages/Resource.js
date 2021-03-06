import React, { useEffect, useState, useMemo } from 'react'
import { Container } from 'reactstrap';
import TableContainer from '../Facility/TableContainer';
import { SelectColumnFilter } from '../Facility/Filters';
function Resource(props) {
    const url = props.location.href
    const plural = props.location.plural    
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData =async()=>{            
            let username = 'admin';
            let password = 'district';
            let headers = new Headers();

            //headers.append('Content-Type', 'text/json');
            headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

            const response = await fetch(url, {method:'GET',headers, })                
                .then(response => response.json([]))
                .then(json => setData(json));            
        }
        fetchData()         
        }, [])
        
        console.log(data)
    return (
        <div>
            
        </div>
    )
}

export default Resource
