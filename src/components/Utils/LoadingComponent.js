import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import { makeStyles } from '@material-ui/core/styles'

const Loading = (props) => {

  const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },

    },
    muiLinearProgress: {
      position: 'fixed',
      width: '100%',
      zIndex: '1080',
    },
    barColorPrimary: {
      backgroundColor: '#b068ff'
    }
  }));

  const classes = useStyles();
  // const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    // let i = 0;
    //
    // function progress () {
    //   console.log('====', i++)
    //   setCompleted(oldCompleted => {
    //     if (oldCompleted === 100) {
    //       return 0;
    //     }
    //     const diff = Math.random() * 10;
    //     return Math.min(oldCompleted + diff, 100);
    //   });
    // }
    //
    // const timer = setInterval(progress, 500);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgress
        variant="determinate"
        classes={{
          determinate: classes.muiLinearProgress,
          barColorPrimary: classes.barColorPrimary
        }}
        value={props.completed}
        color={'primary'}

      />
      {/*<LinearProgress variant="determinate" value={completed} color="secondary" />*/}
    </div>
  );

}
export default Loading;
