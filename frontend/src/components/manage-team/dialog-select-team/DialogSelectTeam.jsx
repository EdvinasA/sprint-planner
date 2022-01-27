import Dialog from "@mui/material/Dialog";
import { AppBar, IconButton, Slide,
  Typography, Toolbar, List, ListItem,
  ListItemText, Divider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeam } from "../../../redux/manageTeams/manageTeamActions";
import { getMember } from "../../../redux/member/memberActions";

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogSelectTeam(props) {
  const { onClose, open } = props;
  const loggedMember = useSelector((state) => state?.member.member.memberTeamListDisplays);
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  const handleSelectTeam = (memberTeamId) => {
    dispatch(getTeam(memberTeamId));
    dispatch(getMember(localStorage.getItem("access_token")));
    localStorage.setItem("selectedTeamId", memberTeamId);
    onClose();
  };

  return (
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Teams
                    </Typography>
                </Toolbar>
            </AppBar>
            {loggedMember !== undefined ? (
                <>
                <List>
                    {loggedMember.map((team) => (
                        <>
                            <ListItem button onClick={() => handleSelectTeam(team.memberTeamId)}>
                                <ListItemText primary={team.teamName} secondary={team.memberTeamId} />
                            </ListItem>
                            <Divider />
                        </>
                    ))}
                </List>
                </>
            ) : (null)}
        </Dialog>
  );
}

export default DialogSelectTeam;
