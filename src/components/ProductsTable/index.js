import React from 'react';
import * as S from './style';
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';


const columns = [
  
  {
    field: 'name',
    headerName: 'Nome do Produto',
    width: 500,
    editable: true,
  },
  {
    field: 'qty_stock',
    headerName: 'Quantidade em estoque',
    width: 250,
    editable: true,
  }
];


function TaskCard({ products }) {  
  return (
    <Container maxWidth="md" style={{ marginBottom: '100px' }}>
      <div style={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
        />
      </div>
    </Container>
     
  )
}

export default TaskCard;