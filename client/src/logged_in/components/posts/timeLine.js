import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  timeLine: {
  
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function DownloadHistory(props) {
  const classes = useStyles();
console.log(props.downloadHistory)
  return (
    <Timeline align="alternate" className={classes.timeLine}>

      {!props.downloadHistory &&  <Typography variant="h6" component="h1">
             Not Downloaded Yet
            </Typography>}
            {props.downloadHistory && props.downloadHistory.length===0 &&  <Typography variant="h6" component="h1">
             Not Downloaded Yet
            </Typography>}
   { props.downloadHistory && props.downloadHistory.map((curHistory)=>(
<TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
           {curHistory.time}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Download {curHistory.download_success?"successful":"Failed"} from IP {curHistory.ip}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    ))}
    </Timeline>
  );
}
