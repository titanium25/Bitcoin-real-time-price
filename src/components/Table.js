import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Date',
        selector: row => row.Date,
        sortable: true,

    },
    {
        name: 'High',
        selector: row => row.High,
        sortable: true,

    },
    {
        name: 'Low',
        selector: row => row.Low,
        sortable: true,

    },
    {
        name: 'Open',
        selector: row => row.Open,
        sortable: true,

    },
    {
        name: 'Close',
        selector: row => row.Close,
        sortable: true,

    },
];

const Table = (props) => {
    return (
        <div>
            <DataTable
                defaultSortFieldId={1}
                pagination
                // dense
                columns={columns}
                data={props.data}
            />
        </div>
    );
};

export default Table;