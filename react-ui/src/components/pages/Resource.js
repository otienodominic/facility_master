import React, { useEffect, useState, useMemo } from 'react'
import { Container } from 'reactstrap';
import TableContainer from '../Facility/TableContainer';

function Resource(props) {
console.log(props)


// console.log(data)
//   const columns = useMemo(
//     () => [
//       {
//         Header: () => null,
//         id: 'expander', // 'id' is required
//         Cell: ({ row }) => (
//           <span {...row.getToggleRowExpandedProps()}>
//             {row.isExpanded ? '👇' : '👉'}
//           </span>
//         ),
//       },      
//       {
//         Header: 'ID',
//         accessor: 'id',
//       },
//       {
//         Header: 'Resource Name',
//         accessor: 'displayName',
//       },
      
//     ],
//     []
//   );

  return (
    // <Container style={{ marginTop: 100 }}>
    //   <TableContainer
    //     columns={columns}
    //     data={data}       
    //   />
    // </Container>

    <div>hello</div>
  );
}

export default Resource
