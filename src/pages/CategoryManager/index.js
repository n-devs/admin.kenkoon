import React, { useState, Fragment, useEffect } from 'react';
import MaterialTable from 'material-table';
import { useCategoryManager } from '@kenkoon/controller';
// import TransitionsModal from './components/TransitionsModal';

export default function CategoryManagerPage() {
  const { columns, data } = useCategoryManager()
  const [state, setState] = useState({
    columns: columns,
    data: data
  })


  // const [rowDataPayment, setRowDataPayment] = useState(null);
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //     setOpen(true);
  // };

  // const handleClose = () => {
  //     setOpen(false);
  // };

  // useEffect(() => {
  //   setStore(data)
  // }, [data])

  return (
    <Fragment>
      <MaterialTable
        title="Category Manager"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
        options={{
          actionsColumnIndex: -1
        }}
      />
      {/* <TransitionsModal open={open} onClose={handleClose} data={rowDataPayment} /> */}
    </Fragment>
  );
}