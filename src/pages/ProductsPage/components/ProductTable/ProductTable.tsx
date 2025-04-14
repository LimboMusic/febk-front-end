/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { Typography } from '@mui/material'
import styles from './ProductTable.module.less'
import tableData from '../../assets/data'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const columnGroupingModel = [
  {
    groupId: '基本尺寸',
    description: '',
    renderHeaderGroup: () => (
      <div className={styles.groupHeader}>
        <Typography>Principal Dimensions</Typography>
        <Typography>基本尺寸</Typography>
      </div>
    ),

    children: [{ field: 'd' }, { field: 'D' }, { field: 'B' }],
  },
  {
    groupId: '基本额定负荷',
    renderHeaderGroup: () => (
      <div className={styles.groupHeader}>
        <Typography>Basic Load Ratings</Typography>
        <Typography>基本额定负荷</Typography>
      </div>
    ),
    children: [{ field: 'Cr' }, { field: 'Cor' }],
  },
  {
    groupId: '极限转速',
    renderHeaderGroup: () => (
      <div className={styles.groupHeader}>
        <Typography>Limiting Speeds</Typography>
        <Typography>极限转速</Typography>
      </div>
    ),
    children: [{ field: 'Crease' }, { field: 'Oil' }],
  },
  {
    groupId: '轴承代号',
    renderHeaderGroup: () => (
      <div className={styles.groupHeader}>
        <Typography>Bearing Number</Typography>
        <Typography>轴承代号</Typography>
      </div>
    ),
    children: [{ field: 'Net' }, { field: 'Old' }],
  },
  {
    groupId: '参考型号',
    renderHeaderGroup: () => (
      <div className={styles.groupHeader}>
        <Typography>Reference Number</Typography>
        <Typography>参考型号</Typography>
      </div>
    ),
    children: [{ field: 'SKF' }, { field: 'NTN' }],
  },
]

function ProductTable() {
  const [data, setData] = useState({ rows: [], columns: [] })
  const { productName } = useParams()

  console.log('productName==>', productName)

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
          columnGroupingModel={columnGroupingModel}
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
