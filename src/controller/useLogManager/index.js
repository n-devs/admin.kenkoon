import React, { useState, useEffect, Fragment } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
// import PropTypes from 'prop-types'
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function useLogManager(url) {
    const [data, setData] = useState([])
    // const [groupImage, setGroupImage] = useState(rowData.image.group)
    const [val, setVal] = React.useState('');
    const classes = useStyles();
    const theme = useTheme();
    const handleChange = (event) => {
        setVal(event.target.value);
    };

    const [columns] = useState([
        { title: '_id ', field: '_id', editable: 'onUpdate' },
        // { title: 'type', field: 'type', editable: 'never' },
        { title: 'hostname', field: 'hostname' },
        {
            title: 'ip', field: 'ip', render: rowData => (
                <div>
                    {`${rowData.ip}`}
                </div>
            )
        },
        { title: 'pid', field: 'pid' },
        { title: 'platform', field: 'platform' },
        { title: 'updated', field: 'updated' },
        { title: 'view', field: 'view' },
    ]);

    const [table, setTable] = useState(
        {
            columns: columns,
            data: data
        }
    )

    useEffect(() => {
        if (url !== "" || null || undefined) {
            axios.get(`${url}`).then(data => {
                setData(data.data.result)
                setTable({
                    columns: columns,
                    data: data.data.result
                })
                console.log(data.data.result);
            })
        }
    }, [url])

    return { table, setTable }
}

export default useLogManager;