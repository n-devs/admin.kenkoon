import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useNewsletManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
import axios from 'axios'
// import './css.css'
export default function NewsletManagerPage() {
  const { table, setTable } = useNewsletManager('https://api-kenkoon.herokuapp.com/api/admin/newsletter')



  return (
    <Fragment>
      <MaterialTable
        title="Newslet Manager"
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

      // detailPanel={rowData => {
      //   return (
      //     <div style={{
      //       display: 'flex',
      //       justifyContent: 'center',
      //       padding: '10px',
      //     }}>

      //       <div>
      //         <div>
      //           <table>
      //             <tr>
      //               <th colspan="2"> <center>User</center></th>
      //             </tr>
      //             <tr>
      //               <td>id :</td>
      //               <td>{rowData._id}</td>
      //             </tr>
      //             <tr>
      //               <td>name :</td>
      //               <td>{rowData.first_name}  {rowData.last_name}</td>
      //             </tr>
      //             <tr>
      //               <td>email :</td>
      //               <td>{rowData.email}</td>
      //             </tr>
      //             <tr>
      //               <td>number_phone :</td>
      //               <td>{rowData.number_phone} </td>
      //             </tr>
      //           </table>
      //           <div>
      //             <table>
      //               <tr>
      //                 <th colspan="2"> <center>Product</center></th>
      //               </tr>
      //               <tr>
      //                 <td>product_id :</td>
      //                 <td>{rowData.product._id}</td>
      //               </tr>
      //               <tr>
      //                 <td>product_name :</td>
      //                 <td>{rowData.product.name}</td>
      //               </tr>
      //             </table>
      //             <img src={rowData.product !== undefined ? rowData.product.main_img.base64 : ""} style={{ width: 400, borderRadius: '10px' }} />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   )
      // }}
      />
      {/* <TransitionsModal open={open} onClose={handleClose} data={rowDataPayment} /> */}
    </Fragment>
  );
}