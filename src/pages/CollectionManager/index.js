import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useCollectionManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import axios from 'axios'

export default function CollectionManagerPage() {
  const { table, setTable } = useCollectionManager('https://api-kenkoon.herokuapp.com/api/admin/collection')



  return (
    <Fragment>
      <MaterialTable
        title="Collection Manager"
        columns={table.columns}
        data={table.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              axios.post('https://api-kenkoon.herokuapp.com/api/admin/collection/create', newData).then(check => {
                if (check) {
                  window.location.reload()
                  console.log(check);
                  setTimeout(() => {
                    resolve();

                    setTable(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      console.log(newData);

                      return { ...prevState, data };
                    });
                  }, 600);
                }
              });

            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              axios.put(`https://api-kenkoon.herokuapp.com/api/admin/collection/update/${oldData._id}`, newData).then(check => {
                if (check) {
                  // window.location.reload()
                  console.log(check);
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setTable(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        console.log(newData);
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }
              });
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {

              axios.delete(`https://api-kenkoon.herokuapp.com/api/admin/collection/remove/${oldData._id}`, oldData).then(check => {
                if (check) {
                  window.location.reload()
                  console.log(check);
                  // setTimeout(() => {
                  //   resolve();
                  //   setTable(prevState => {
                  //     const data = [...prevState.data];
                  //     data.splice(data.indexOf(oldData), 1);
                  //     return { ...prevState, data };
                  //   });
                  // }, 600);
                }
              });

            }),
        }}
        // options={{
        //   actionsColumnIndex: -1
        // }}

        detailPanel={rowData => {
          return (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
            }}>
              <div>
                <div>
                  <img src={rowData.main_img !== undefined ? rowData.main_img.base64 : ""} style={{ width: 600, borderRadius: '10px' }} />
                </div>
                <div style={{
                  display: "flex"
                }}>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img0 !== undefined ? rowData.sub_img0.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img1 !== undefined ? rowData.sub_img1.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img2 !== undefined ? rowData.sub_img2.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img3 !== undefined ? rowData.sub_img3.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      />
      {/* <TransitionsModal open={open} onClose={handleClose} data={rowDataPayment} /> */}
    </Fragment>
  );
}