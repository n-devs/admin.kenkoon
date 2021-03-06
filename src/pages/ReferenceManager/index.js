import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useReferenceManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import axios from 'axios'

export default function ReferenceManagerPage() {
  const { table, setTable } = useReferenceManager('https://api-kenkoon.herokuapp.com/api/admin/reference')



  return (
    <Fragment>
      <MaterialTable
        title="Collection Manager"
        columns={table.columns}
        data={table.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              axios.post('https://api-kenkoon.herokuapp.com/api/admin/reference/create', newData).then(check => {
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
              axios.put(`https://api-kenkoon.herokuapp.com/api/admin/reference/update/${oldData._id}`, newData).then(check => {
                if (check) {
                  window.location.reload()
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

              axios.delete(`https://api-kenkoon.herokuapp.com/api/admin/reference/remove/${oldData._id}`, oldData).then(check => {
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
                  display: "flex",
                  overflowY: 'auto',
                  maxWidth: 600,
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
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img4 !== undefined ? rowData.sub_img4.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img5 !== undefined ? rowData.sub_img5.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img6 !== undefined ? rowData.sub_img6.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img7 !== undefined ? rowData.sub_img7.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img8 !== undefined ? rowData.sub_img8.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.sub_img9 !== undefined ? rowData.sub_img9.base64 : ""} style={{ width: 140, borderRadius: '10px' }} />
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