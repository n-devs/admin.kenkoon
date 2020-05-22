import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useLogManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
// import './css.css'
export default function LogManagerPage() {
  const { table, setTable } = useLogManager('https://api-kenkoon.herokuapp.com/api/status/log')



  return (
    <Fragment>
      <MaterialTable
        title="Order Manager"
        columns={table.columns}
        data={table.data}
        editable={{
          // onRowAdd: newData =>
          //   new Promise(resolve => {
          //     axios.post('https://api-kenkoon.herokuapp.com/api/admin/order/create', newData).then(check => {
          //       if (check) {
          //         window.location.reload()
          //         console.log(check);
          //         setTimeout(() => {
          //           resolve();

          //           setTable(prevState => {
          //             const data = [...prevState.data];
          //             data.push(newData);
          //             console.log(newData);

          //             return { ...prevState, data };
          //           });
          //         }, 600);
          //       }
          //     });

          //   }),
          // onRowUpdate: (newData, oldData) =>
          //   new Promise(resolve => {
          //     axios.put(`https://api-kenkoon.herokuapp.com/api/admin/order/update/${oldData._id}`, newData).then(check => {
          //       if (check) {
          //         // window.location.reload()
          //         console.log(check);
          //         setTimeout(() => {
          //           resolve();
          //           if (oldData) {
          //             setTable(prevState => {
          //               const data = [...prevState.data];
          //               data[data.indexOf(oldData)] = newData;
          //               console.log(newData);
          //               return { ...prevState, data };
          //             });
          //           }
          //         }, 600);
          //       }
          //     });
          //   }),
          // onRowDelete: oldData =>
          //   new Promise(resolve => {

          //     axios.delete(`https://api-kenkoon.herokuapp.com/api/admin/order/remove/${oldData._id}`, oldData).then(check => {
          //       if (check) {
          //         window.location.reload()
          //         console.log(check);
          //         // setTimeout(() => {
          //         //   resolve();
          //         //   setTable(prevState => {
          //         //     const data = [...prevState.data];
          //         //     data.splice(data.indexOf(oldData), 1);
          //         //     return { ...prevState, data };
          //         //   });
          //         // }, 600);
          //       }
          //     });

          //   }),
        }}
        // options={{
        //   actionsColumnIndex: -1
        // }}

        detailPanel={rowData => {
          return (
            <div style={{
              display: 'grid',
              justifyContent: 'center',
              padding: '10px',
              width: "-webkit-fill-available"
            }}>
              <h1>IP</h1>
              {Object.keys(rowData.ip).map(ip_key => (
                <div style={{
                  textAlign: "center"
                }}>
                  <h4>{[ip_key]}</h4>
                  <table style={{
                    width: "-webkit-fill-available",
                    border: "1px solid"
                  }}>
                    <tr style={{
                      border: "1px solid"
                    }}>
                      {Object.keys(rowData.ip[ip_key][0]).map(head_key => (
                        <th style={{
                          border: "1px solid"
                        }} colspan="1"> <center>{[head_key]}</center></th>
                      ))}

                    </tr>
                    {rowData.ip[ip_key].map(_key => (
                      <tr style={{
                        border: "1px solid"
                      }}>
                        {Object.keys(_key).map(key => (
                          <td style={{
                            border: "1px solid"
                          }}>{`${_key[key]}`}</td>
                        ))}
                      </tr>
                    ))}
                  </table>
                </div>
              ))}

            </div>
          )
        }}
      />
      {/* <TransitionsModal open={open} onClose={handleClose} data={rowDataPayment} /> */}
    </Fragment>
  );
}