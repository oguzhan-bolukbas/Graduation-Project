import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Link} from "react-router-dom";
import GestureIcon from '@material-ui/icons/Gesture';
import AppsIcon from '@material-ui/icons/Apps';
import BookIcon from '@material-ui/icons/Book';
import PersonIcon from '@material-ui/icons/Person';
import LowPriorityIcon from '@material-ui/icons/LowPriority';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {
  BubbleChart,
  BubbleChartTwoTone, EmojiFlagsTwoTone,
  Subject
} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import European from "../images/European.png";

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    align: "center",
    marginLeft: "10px",
    marginRight: "10px"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: "-20px"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openMutation, setOpenMutation] = React.useState(false);
  const handleClickMutation = () => {
    setOpenMutation(!openMutation);
  };
  const [openCrossingOver, setOpenCrossingOver] = React.useState(false);
  const handleClickCrossingOver = () => {
    setOpenCrossingOver(!openCrossingOver);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar position="fixed" className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}>
        <Toolbar>
          <Grid item className={classes.title}>
            <ButtonBase component={Link} to={"/"}>
              <img className={classes.img} alt="complex" src={European} width={50}/>
            </ButtonBase>
            <ButtonBase className={classes.image} component={Link} to={"/"}>
              <Typography variant="h6" color="inherit">İSPİNOZ</Typography>
            </ButtonBase>
          </Grid>
          <ButtonBase className={classes.button} component={Link} to={"/"}>
            <Typography variant="subtitle1" color="inherit">ANA SAYFA</Typography>
          </ButtonBase>
          <ButtonBase className={classes.button} component={Link} to={"/problemler"}>
            <Typography variant="subtitle1" color="inherit">PROBLEMLER</Typography>
          </ButtonBase>
          <ButtonBase className={classes.button} component={Link} to={"/quiz"}>
            <Typography variant="subtitle1" color="inherit">QUIZ</Typography>
          </ButtonBase>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <AccountBoxIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}>fit
        <div className={classes.toolbar}/>
        <List>
          <ListItem button component={Link} to="/dersler/genetik-algoritma-nedir">
            <ListItemIcon> <GestureIcon/> </ListItemIcon>
            <ListItemText primary="GA Nedir?"/>
          </ListItem>
          <Divider/>
          <ListItem button component={Link} to="/dersler/genetik-algoritma-uygulamalari">
            <ListItemIcon> <AppsIcon/> </ListItemIcon>
            <ListItemText primary="GA Uygulamaları"/>
          </ListItem>
          <Divider/>
          <ListItem button component={Link} to="/dersler/genetik-algoritma-nasil-calisir">
            <ListItemIcon> <LowPriorityIcon/> </ListItemIcon>
            <ListItemText primary="GA Çalışma Mekanizması"/>
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemIcon> <Subject/> </ListItemIcon>
            <ListItemText primary="GA Terimleri"/>
          </ListItem>
          <ListItem button component={Link} to="/dersler/gen-kromozom-populasyon">
            <ListItemIcon> <BubbleChartTwoTone/> </ListItemIcon>
            <ListItemText primary="Gen, Kromozom ve Populasyon"/>
          </ListItem>
          <ListItem button onClick={handleClickCrossingOver}>
            <ListItemIcon> <BubbleChartTwoTone/> </ListItemIcon>
            <ListItemText primary="Çaprazlama (Crossover)"LowPriorityIcon/>
            {openCrossingOver ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openCrossingOver} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/dersler/caprazlama/caprazlama-nedir">
                <ListItemIcon> <BubbleChart/> </ListItemIcon>
                <ListItemText primary="Çaprazlama Nedir?" />
              </ListItem>
              <ListItem button component={Link} to="/dersler/caprazlama/caprazlama-cesitleri"   >
                <ListItemIcon> <BubbleChart/> </ListItemIcon>
                <ListItemText primary="Çaprazlama Çeşitleri" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={handleClickMutation}>
            <ListItemIcon> <BubbleChartTwoTone/> </ListItemIcon>
            <ListItemText primary="Mutasyon"/>
            {openMutation ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>
          <Collapse in={openMutation} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/dersler/mutasyon/mutasyon-nedir">
                <ListItemIcon> <BubbleChart/> </ListItemIcon>
                <ListItemText primary="Mutasyon Nedir?"/>
              </ListItem>
              <ListItem button className={classes.nested} component={Link} to="/dersler/mutasyon/mutasyon-cesitleri">
                <ListItemIcon> <BubbleChart/> </ListItemIcon>
                <ListItemText primary="Mutasyon Çeşitleri"/>
              </ListItem>
            </List>
          </Collapse>
          <ListItem button component={Link} to="/dersler/uygunluk">
            <ListItemIcon> <BubbleChartTwoTone/> </ListItemIcon>
            <ListItemText primary="Uygunluk (Fitness)"/>
          </ListItem>
          <ListItem button component={Link} to="/dersler/genetik-kodlama">
            <ListItemIcon> <BubbleChartTwoTone/> </ListItemIcon>
            <ListItemText primary="Genetik Kodlama"/>
          </ListItem>
          <ListItem button component={Link} to="/dersler/secim-turleri">
            <ListItemIcon> <BubbleChartTwoTone/> </ListItemIcon>
            <ListItemText primary="Seçim Türleri"/>
          </ListItem>
          <Divider/>
          <ListItem button component={Link} to="/referanslar">
            <ListItemIcon> <BookIcon/> </ListItemIcon>
            <ListItemText primary="Referanslar"/>
          </ListItem>
          <Divider/>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}/>
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          <ListItem button component={Link} to="/profil">
            <ListItemIcon> <PersonIcon /> </ListItemIcon>
            <ListItemText primary="Profil"/>
          </ListItem>
          <ListItem button component={Link} to="/genel-puan-tablosu">
            <ListItemIcon> <EmojiFlagsTwoTone/> </ListItemIcon>
            <ListItemText primary="Genel Puan Tablosu"/>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}