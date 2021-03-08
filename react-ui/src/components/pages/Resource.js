import React, { useEffect, useState, useMemo } from 'react'
import { Container } from 'reactstrap';
import TableContainer from '../Facility/TableContainer';

function Resource(props) {  
const [data, setData] = useState([]);

useEffect(() => {
  const doFetch = async () => {
    let url = `https://cors-anywhere.herokuapp.com/https://play.dhis2.org/2.34.3/api/${props.location.plural}`
            let username = 'admin';
            let password = 'district';
            let headers = new Headers();

            headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

            const response = await fetch(url, {method:'GET',
                    headers: headers,               
                })                
            const body = await response.json()  
            
            // destructure the required object here
            const allowed = [props.location.plural]
            Object.keys(body)
                .filter(key => !allowed.includes(key))
                .forEach(key => delete body[key]); 
            // get the object 
        const mural = Object.values(body)[0]
        setData(mural)
  };
  doFetch();
}, [props]);

  const columns = useMemo(
    () => [
      
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Resource Name',
        accessor: 'displayName',
      },
      
    ],
    []
  );

  return (
    <Container style={{ marginTop: 100 }}>
      <TableContainer
        columns={columns}
        data={data}       
      />
    </Container>    
  );
}

export default Resource
