import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
//import Count from '../Count/Count';
export default function Cards({cardData}) {
if(!cardData || !cardData.statewise)
return(
//<Typography variant="h5" > 
    "LOADING..PLEASE WAIT..."
//</Typography> 
)
    return (
        <div className={styles.container}>
            <Grid container spacing ={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom > 
                            Infected
                        </Typography>
                        <Typography variant="h5" > 
                            <CountUp start={0} end={cardData.statewise[0].active} duration={2.7}/>
                        </Typography>

                        <Typography variant="body2" > 
                            Active COVID-19 cases 
                        </Typography>
                        <Typography color="textSecondary">Updated on : {cardData.statewise[0].lastupdatedtime}</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom > 
                            Recovered
                        </Typography>
                        <Typography variant="h5" > 
                        <CountUp start={0} end={cardData.statewise[0].recovered} duration={2}/>
                        </Typography>

                        <Typography variant="body2" > 
                            Recovered cases
                        </Typography>
                        <Typography color="textSecondary">Updated on : {cardData.statewise[0].lastupdatedtime}</Typography>
                    </CardContent>
                </Grid>


                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom > 
                            Deceased
                        </Typography>
                        <Typography variant="h5" > 
                        <CountUp start={0} end={cardData.statewise[0].deaths} duration={2}/>
                        </Typography>
                        <Typography variant="body2" > 
                            Total death cases
                        </Typography>
                        <Typography color="textSecondary">Updated on : {cardData.statewise[0].lastupdatedtime}</Typography>
                    </CardContent>
                </Grid>

           </Grid>
        </div>
    )
}
