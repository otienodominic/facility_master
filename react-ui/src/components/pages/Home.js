import React, { useEffect, useState, useMemo } from 'react'
import { Container } from 'reactstrap';
import TableContainer from '../Facility/TableContainer';
import {useHistory, withRouter} from 'react-router-dom'
import { SelectColumnFilter } from '../Facility/Filters';
import { encode } from "base-64";
import AuthContext from '../../context/authContext/authContext'
import { Link } from 'react-router-dom';


export default function Home(props) {
  const history = useHistory()
       const [data, setData] = useState([])
    useEffect(() => {
        const fetchData =async()=>{
            let url = 'https://play.dhis2.org/2.34.3/api/resources'
            let username = 'admin';
            let password = 'district';
            let headers = new Headers();

            //headers.append('Content-Type', 'text/json');
            headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

            fetch(url, {method:'GET',
                    headers: headers,               
                })                
                .then(response => response.json())
                .then(json => setData(json.resources));
            
        }
        fetchData()         
        }, [])
  
    const renderRowSubComponent = (row) => {
      const { 
        plural
      } = row.original;

      const viewResource = async() => {  
        let url = `https://play.dhis2.org/2.34.3/api/${plural}`
            let username = 'admin';
            let password = 'district';
            let headers = new Headers();

            headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

            const response = await fetch(url, {method:'GET',
                    headers: headers,               
                })                
            const body = await response.json()  
            
            // destructure the required object here
            const allowed = [plural]
            Object.keys(body)
                .filter(key => !allowed.includes(key))
                .forEach(key => delete body[key]); 
            // get the object 
        const mural = Object.values(body)[0]
        console.log(mural)
        props.history.push('/resource/'+plural)
        history.push({
            url, body, plural, mural
        })
      }
      return (        
        <button  color="primary" variant="contained" onClick={viewResource} >View Resource</button>        
      );
    };
  
    const columns = useMemo(
      () => [
        {
          Header: () => null,
          id: 'expander', // 'id' is required
          Cell: ({ row }) => (
            <span {...row.getToggleRowExpandedProps()}>
              {row.isExpanded ? '👇' : '👉'}
            </span>
          ),
        },       
        {
          Header: 'Resource Name',
          accessor: 'displayName',
        },
        {
          Header: 'Singular',
          accessor: 'singular',
        },
        {
          Header: 'Plural',
          accessor: 'plural',
        },    
        
      ],
      []
    );
  
    return (
      <Container style={{ marginTop: 100 }}>
        <TableContainer
          columns={columns}
          data={data}
          renderRowSubComponent={renderRowSubComponent}
        />
      </Container>
    );
}
