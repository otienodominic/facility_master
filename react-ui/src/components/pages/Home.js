import React, { useEffect, useState, useMemo } from 'react'
import { Container } from 'reactstrap';
  import TableContainer from '../Facility/TableContainer';
  import { SelectColumnFilter } from '../Facility/Filters';
import { encode } from "base-64";
import AuthContext from '../../context/authContext/authContext'
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'


export default function Home(props) {
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
        href,
        plural
      } = row.original;

      const viewResource = () => {        
        props.history.push('/resource/'+plural)
        props.history.push({
            href, plural
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
