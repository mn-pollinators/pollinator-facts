import React from "react"
import GridView from "../components/grid-view"
import ListView from "../components/list-view"
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';
import Tooltip from '@material-ui/core/Tooltip';
import { viewContext } from '../components/view-provider'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 16
    },
    toggle: {
      '@media screen and (max-width: 600px)' : {
        display: 'none'
      }
    }
  });

export default function ToggleLayout({ title, factsData, titleStyle})  {
    const classes = useStyles();
    console.log(titleStyle);
    return (
        <viewContext.Consumer>
          {context => (
            <React.Fragment>
              <div className={classes.header}>
                <Typography variant="h4" component="h1" className={titleStyle}>
                  {title}
                </Typography>
                <IconButton className={context.listLayout? (classes.toggle) : (null)} onClick={() => { context.changeLayout() }} >
                  {context.listLayout? (<Tooltip title="Grid View" aria-label="grid view"><ViewModuleIcon/></Tooltip>) : (<Tooltip title="List View" aria-label="list view"><ViewListIcon/></Tooltip>)}
                </IconButton>
              </div>
              {context.listLayout? ( <ListView listData={factsData} /> ) : ( <GridView gridData={factsData} />) }
            </React.Fragment>
          )}
        </viewContext.Consumer>
    )
}
