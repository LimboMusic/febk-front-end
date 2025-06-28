/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import styles from './ProductTable.module.less'
import tableData from '../../assets/data'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductTable() {
  const [data, setData] = useState({
    rows: [],
    columns: [],
    columnGroupingModel: [],
  })
  const { productName } = useParams()

  useEffect(() => {
    if (productName) {
      setData(tableData[`${productName}`])
    }
  }, [productName])

  return (
    <div style={{ width: '100%' }} className={`${styles.wrapper}`}>
      <div className={'lg:px-[126px] md:px-[88px] h-[500px]'}>
        <DataGrid
          className={styles.table}
          rows={data.rows}
          columns={data.columns}
          columnGroupingModel={data.columnGroupingModel}
          // pageSizeOptions={[5, 10, 25, 30]}
          autoPageSize
          pagination
          paginationMode="client"
          slots={{ toolbar: GridToolbar }}
          checkboxSelection
          sx={{
            '.MuiDataGrid-columnHeaderTitleContainerContent': {
              width: '100%',
            },
          }}
        />
      </div>
    </div>
  )
}

export default ProductTable
