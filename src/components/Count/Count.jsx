import React,{useState,useEffect} from 'react';
import {fetchData} from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Count.module.css'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';

export default function Count({countData}) {
    console.log("in count");
    console.log(countData);
   
    if(countData){
        return (
        <div className={styles.container} >

            <Typography color="textSecondary" gutterBottom > 
             Click on chart legend to get individual visualizations.               
            </Typography>
           <Line 
            data={{
                labels:countData.map(({date})=>date),
                datasets:[
                    {   label:"total Infected",
                        data:countData.map(({totalconfirmed})=>totalconfirmed),
                        borderColor:'#ff0000',
                       backgroundColor:'rgba(255,0,0,0.1)'
                    },
            
                    {
                        label:"total cured",
                        data:countData.map(({totalrecovered})=>totalrecovered),
                        borderColor:'#00ff00',
                        backgroundColor:'rgba(0,255,0,0.6)'
                    },

                    {
                        label:"total deceased",
                        data:countData.map(({totaldeceased})=>totaldeceased),
                        borderColor:'#0000ff',
                        backgroundColor:'rgba(0,0,255,0.6)'
                    }
                ],
            
        }}
            />
        </div>
    )
    }
    else
    {
        return(
            <div>
                Cant load chart...please wait...
            </div>
        )
    }
}
