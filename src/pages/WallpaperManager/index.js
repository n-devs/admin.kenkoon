import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useWallpaperManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import axios from 'axios'

export default function WallpaperManagerPage() {
  const { table, setTable } = useWallpaperManager('https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper')



  return (
    <Fragment>
      <MaterialTable
        title="Wallpaper Manager"
        columns={table.columns}
        data={table.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              axios.post('https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper/create', newData).then(check => {
                if (check) {
                  window.location.reload()
                  console.log(check);
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
              axios.put(`https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper/update/${oldData._id}`, newData).then(check => {
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

              axios.delete(`https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper/remove/${oldData._id}`, oldData).then(check => {
                if (check) {
                  // window.location.reload()
                  // console.log(check);
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
        options={{
          actionsColumnIndex: -1
        }}

        detailPanel={rowData => {
          return (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
            }}>
              <img src={rowData.image.base64} style={{ width: 400, borderRadius: '10px' }} />
            </div>
          )
        }}
      />
      {/* <TransitionsModal open={open} onClose={handleClose} data={rowDataPayment} /> */}
    </Fragment>
  );
}