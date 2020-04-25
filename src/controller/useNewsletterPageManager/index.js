import React, { useState, useEffect } from 'react';
// import { GET, POST, PUT, DELETE } from 'api-request-json';
// import PropTypes from 'prop-types'
import axios from 'axios'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Input from '@material-ui/core/Input';

function useNewsletterPageManager(url) {
    const [data, setData] = useState([])

    const [columns] = useState([
        { title: '_id ', field: '_id', editable: 'onUpdate' },
        { title: 'show', field: 'show', type: 'boolean' },
        { title: 'title_en', field: 'title_en' },
        { title: 'title_th', field: 'title_th' },
        {
            title: 'message_en', field: 'message_en', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="message_en"
                        rowsMin={3} placeholder="message_en"
                        defaultValue={props.rowData.message_en}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },
        {
            title: 'message_th', field: 'message_th', editComponent: props => {
                return (
                    <TextareaAutosize
                        aria-label="message_th"
                        rowsMin={3} placeholder="message_th"
                        defaultValue={props.rowData.message_th}
                        onChange={event => {
                            props.onChange(event.target.value)
                        }}
                    />
                )
            }
        },

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

export default useNewsletterPageManager;