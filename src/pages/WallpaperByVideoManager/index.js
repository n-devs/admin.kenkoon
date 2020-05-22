import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useWallpaperByVideoManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import axios from 'axios'

export default function WallpaperManagerPage() {
  const { table, setTable } = useWallpaperByVideoManager('https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper_by_video')



  return (
    <Fragment>
      <MaterialTable
        title="Wallpaper By Video Manager"
        columns={table.columns}
        data={table.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              axios.post('https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper_by_video/create', newData).then(check => {
                if (check) {
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
              axios.put(`https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper_by_video/update/${oldData._id}`, newData).then(check => {
                if (check) {
                  window.location.reload()
                  console.log(check);
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

              axios.delete(`https://api-kenkoon.herokuapp.com/api/admin/components/wallpaper_by_video/remove/${oldData._id}`, oldData).then(check => {
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
              {/* <img src={rowData.image.base64} style={{ width: 400, borderRadius: '10px' }} /> */}
              <iframe
                // ref={activedRef}
                id="video"
                src={rowData.link}
                frameBorder="0"
                allowFullScreen=""
                style={{
                  width: 400,
                  height: 250,
                  borderRadius: '10px'
                }}
              ></iframe>
            </div>
          )
        }}
      />
      {/* <TransitionsModal open={open} onClose={handleClose} data={rowDataPayment} /> */}
    </Fragment>
  );
}