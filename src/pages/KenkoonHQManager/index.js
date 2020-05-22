import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useKenkoonHQManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import axios from 'axios'

export default function KenkoonHQManagerPage() {
  const { table, setTable } = useKenkoonHQManager('https://api-kenkoon.herokuapp.com/api/admin/kenkoon_hq')



  return (
    <Fragment>
      <MaterialTable
        title="Kenkoon HQ Manager"
        columns={table.columns}
        data={table.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              axios.post('https://api-kenkoon.herokuapp.com/api/admin/kenkoon_hq/create', newData).then(check => {
                if (check) {
                  // window.location.reload()
                  // console.log(check);
                  setTimeout(() => {
                    resolve();

                    setTable(prevState => {
                      const data = [...prevState.data];
                      data.push(newData);
                      // console.log(newData);

                      return { ...prevState, data };
                    });
                  }, 600);
                }
              });

            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              axios.put(`https://api-kenkoon.herokuapp.com/api/admin/kenkoon_hq/update/${oldData._id}`, newData).then(check => {
                if (check) {
                  // window.location.reload()
                  // console.log(check);
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setTable(prevState => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        // console.log(newData);
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }
              });
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {

              axios.delete(`https://api-kenkoon.herokuapp.com/api/admin/kenkoon_hq/remove/${oldData._id}`, oldData).then(check => {
                if (check) {
                  // window.location.reload()
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
                <div style={{
                  display: "grid"
                }}>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.img0 !== undefined ? rowData.img0.base64 : ""} style={{ width: 400, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.img1 !== undefined ? rowData.img1.base64 : ""} style={{ width: 400, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.img2 !== undefined ? rowData.img2.base64 : ""} style={{ width: 400, borderRadius: '10px' }} />
                  </div>
                  <div style={{
                    margin: 5
                  }}>
                    <img src={rowData.img3 !== undefined ? rowData.img3.base64 : ""} style={{ width: 400, borderRadius: '10px' }} />
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