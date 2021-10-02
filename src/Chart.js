import React, { useCallback, useState } from "react";
import FileSaver from "file-saver";
import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useCurrentPng } from "recharts-to-png";
import './styles.css'
import { Document } from 'react-pdf'


function Chart() {

    const [getAreaPng, { ref: areaRef }] = useCurrentPng();

    const handleAreaDownload = useCallback(async () => {
        const png = await getAreaPng();
        if (png) {
            FileSaver.saveAs(png, "line-chart.png");
        }
    }, [getAreaPng]);

    const data = [
        {
            "name": "Jan 2019",
            "Product A": 3432,
            "Product B": 2342
        },
        {
            "name": "Feb 2019",
            "Product A": 2342,
            "Product B": 4246
        },
        {
            "name": "Mar 2019",
            "Product A": 4565,
            "Product B": 3556
        },
        {
            "name": "Apr 2019",
            "Product A": 6654,
            "Product B": 4865
        },
        {
            "name": "May 2019",
            "Product A": 8765,
            "Product B": 10553
        }
    ]

    return (
        <>
            <h1 className='heading'>Line Chart</h1>
            <Document file='area-chart.png' />

            <LineChart
                data={data}
                height={300}
                width={600}
                margin={{ top: 15, left: 10 }}

            >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
                <Line type="monotone" dataKey="Product B" stroke="#FF0000" />
            </LineChart>


        </>
    );
};


export default Chart;