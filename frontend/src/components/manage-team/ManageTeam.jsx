import React, { useEffect } from "react";
import {
  Button,
  Container, FormControl, MenuItem, Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import "typeface-roboto";
import {
  getTeam,
  addNewMember,
  deleteMemberFromMemberList,
  updateMemberRole,
  createNewTeam
} from "../../redux/manageTeams/manageTeamActions";
import ManageTeamStyles from "./ManageTeamStyles";
import StyledAddIcon from "./styled-add-icon/StyledAddIcon";
import RemoveButton from "../buttons/remove-button/RemoveButton";
import SaveButton from "../buttons/save-button/SaveButton";
import DialogAddNewMember from "./dialog-add-new-member/DialogAddNewMember";
import DialogRemoveMember from "./dialog-remove-member/DialogRemoveMember";
import GenericButton from "../buttons/generic-button/GenericButton";
import listOfRoles from "../../api/ListOfRoles";
import { getMember } from "../../redux/member/memberActions";
import CreateTeamDialog from "./dialog-create-team/CreateTeamDialog";
import DialogSelectTeam from "./dialog-select-team/DialogSelectTeam";

function ManageTeam() {
  const classes = ManageTeamStyles();

  const team = useSelector((state) => state?.manageTeam.memberTeam);
  const [openRemove, setOpenRemove] = React.useState(false);
  const [openAddNewMember, setOpenAddNewMember] = React.useState(false);

  const [selectedMember, setSelectedMember] = React.useState("");
  const [role, setRole] = React.useState("");
  const [member, setMember] = React.useState("");
  const [changedMemberRole, setChangedMemberRole] = React.useState(null);
  const [editMemberRoleId, setEditMemberRoleId] = React.useState(null);
  const [displaySaveButton, setDisplaySaveButton] = React.useState(false);
  const [openCreateTeam, setOpenCreateTeam] = React.useState(false);
  const [openChangeTeam, setOpenChangeTeam] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMember(localStorage.getItem("access_token")));
    dispatch(getTeam(localStorage.getItem("selectedTeamId")));
  }, [dispatch]);

  const handleExistingMemberRoleChange = (user, event) => {
    const index = team.membersList.findIndex(e => e.id === user.id);
    const updatedObject = { ...team.membersList[index] };
    updatedObject.role = event.target.value;
    setChangedMemberRole(updatedObject.role);
    setDisplaySaveButton(true);
  };

  const handleEditableRole = (event, user) => {
    const index = team.membersList.findIndex(e => e.id === user.id);
    if (editMemberRoleId === null) {
      setEditMemberRoleId(index);
      setChangedMemberRole(user.role);
    }
    if (editMemberRoleId != null) {
      if (team.membersList[editMemberRoleId] !== undefined) {
        if (changedMemberRole === team.membersList[editMemberRoleId].role) {
          setEditMemberRoleId(index);
          setChangedMemberRole(user.role);
        }
      }
    }
  };

  const handleOnSaveRoleChange = (user) => {
    dispatch(updateMemberRole(user.id, changedMemberRole));
    setEditMemberRoleId(null);
    setChangedMemberRole(null);
    setDisplaySaveButton(false);
  };

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const handleChangeInputMember = (event) => {
    setMember(event.target.value);
  };

  const handleOpenAddNewMember = () => {
    setOpenAddNewMember(true);
    setRole(null);
    setMember(null);
  };

  const handleCloseAddNewMemberCreateButton = (roleV, memberV) => {
    dispatch(addNewMember(1, roleV, memberV));
    setOpenAddNewMember(false);
    setRole(null);
    setMember(null);
  };

  const handleCloseAddNewMember = () => {
    setOpenAddNewMember(false);
  };

  const handleOpenRemoveDialog = (value) => {
    setOpenRemove(true);
    setSelectedMember(value);
    setEditMemberRoleId(null);
    setChangedMemberRole(null);
    setDisplaySaveButton(false);
  };

  const handleCloseRemoveDialog = (member) => {
    setOpenRemove(false);
    dispatch(deleteMemberFromMemberList(member.id));
  };

  const handleBackRemoveDialog = () => {
    setOpenRemove(false);
  };

  const handleOpenCreateTeamDialog = () => {
    setOpenCreateTeam(true);
  };

  const handleCloseCreateTeamDialog = () => {
    setOpenCreateTeam(false);
  };

  const handleCreateNewTeam = (teamName) => {
    setOpenCreateTeam(false);
    dispatch(createNewTeam(teamName));
    localStorage.setItem("selectedTeamId", team.id);
  };

  const handleOpenChangeTeam = () => {
    setOpenChangeTeam(true);
  };

  const handleCloseChangeTeam = () => {
    setOpenChangeTeam(false);
  };

  function TableRowHeaderInformation() {
    return (
          <TableRow style={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
            <TableCell />
            <TableCell>Name
            </TableCell>
            <TableCell>Role
            </TableCell>
            <TableCell />
          </TableRow>
    );
  }

  function TableRowBodyInformation() {
    return (
        <TableBody style={{ backgroundColor: "white" }}>
          <DialogRemoveMember
            onCloseBack={handleBackRemoveDialog}
            onCloseSelected={handleCloseRemoveDialog}
            open={openRemove}
            selectedMember={selectedMember}
          />
          {team.membersList?.map((user, index) => (
              <>
                {/*{user.isDeleted === false && (*/}
                    <TableRow hover key={index} style={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                      <TableCell className={classes.displayPictureTableCell}>{index}</TableCell>
                      <TableCell className={classes.displayFullNameAndRoleTableCell}>{user.fullName}
                      </TableCell>
                      {editMemberRoleId === index ? (
                          <TableCell className={classes.displayFullNameAndRoleTableCell}>
                            <FormControl variant="standard">
                              <Select
                                className={classes.displaySelectRoleTableCell}
                                name="role"
                                value={changedMemberRole}
                                onChange={(event) => handleExistingMemberRoleChange(user, event)}
                              >
                                {listOfRoles.map((role, key) => (
                                    <MenuItem key={key} value={role}>
                                      {role}
                                    </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </TableCell>
                      ) : (
                          <TableCell
                            onMouseEnter={(event) => handleEditableRole(event, user)}
                            className={classes.displayFullNameAndRoleTableCell}
                          >
                            {user.role}
                          </TableCell>
                      )}
                      <TableCell>
                        <RemoveButton
                          variant="outlined"
                          color="error"
                          style={{ marginRight: "30px" }}
                          onClick={() => handleOpenRemoveDialog(user)}
                          key={user.id}
                        >
                          Remove
                        </RemoveButton>
                        {editMemberRoleId === index && displaySaveButton && (
                            <SaveButton
                              variant="outlined"
                              onClick={() => handleOnSaveRoleChange(user)}
                            >
                              Save
                            </SaveButton>
                        )}
                      </TableCell>
                    </TableRow>
                {/*)}*/}
              </>
          ))}
        </TableBody>
    );
  }

  const numberOfMembers = team.membersList.filter(member => member).length;

  return (
      <Container maxWidth={false} className={classes.containerRoot}>
        {team.membersList.length !== 0 ? (
            <>
            <h1> Manage team </h1>
            <Table style={{ width: "1320px" }}>
              <TableHead className={classes.manageTeamHeaderTableStyles}>
                <TableRow>
                  <TableCell style={{ width: "460px", paddingLeft: "80px" }}>Team name</TableCell>
                  <TableCell style={{ width: "342px" }}>Members</TableCell>
                  <TableCell style={{ width: "225px" }}>Projects competed</TableCell>
                  <TableCell style={{ width: "305px" }}>Tasks completed</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.manageTeamBodyStyles}>
                <TableRow>
                  <TableCell style={{ width: "460px", paddingLeft: "80px" }}>{team.teamName}</TableCell>
                  <TableCell style={{ width: "342px" }}>{numberOfMembers}</TableCell>
                  <TableCell style={{ width: "225px" }}>0</TableCell>
                  <TableCell style={{ width: "305px" }}>0</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          <div className={classes.manageTeamDisplayTeamHeaderStyles}>
          <div className={classes.displaying} style={{ marginTop: "6px" }}>
          <span style={{ marginInlineStart: "64px" }}>Team members</span>
          </div>
          <div className={classes.displaying}>
          <Stack direction="row" style={{ display: "inline" }}>
          <GenericButton widthInPixels="150px" variant="outlined" onClick={handleOpenAddNewMember}>
          <StyledAddIcon />
          ADD NEW MEMBER
          </GenericButton>
          </Stack>
            <DialogAddNewMember
              onCloseToAdd={handleCloseAddNewMemberCreateButton}
              onClose={handleCloseAddNewMember}
              handleChangeInputMember={handleChangeInputMember}
              handleChangeRole={handleChangeRole}
              member={member}
              role={role}
              open={openAddNewMember}
              listOfRoles={listOfRoles}
            />
          <div />
          </div>
          </div>
          <div className={classes.manageTeamHeaderStyles}>
          <TableContainer>
          <Table>
          <TableHead>
          <TableRowHeaderInformation />
          </TableHead>
          <TableRowBodyInformation />
          </Table>
          </TableContainer>
          </div>
            </>
        ) : (
            <>
            <Button onClick={handleOpenCreateTeamDialog}>Create team</Button>
            <CreateTeamDialog
              open={openCreateTeam}
              onClose={handleCloseCreateTeamDialog}
              onCloseAdd={handleCreateNewTeam}
            />
            </>
        )}
        <div style={{ paddingTop: "100px" }}>
          <Button onClick={handleOpenChangeTeam}>Change team</Button>
          <DialogSelectTeam
            open={openChangeTeam}
            onClose={handleCloseChangeTeam}
          />
        </div>
        <div>
          <Button onClick={handleOpenCreateTeamDialog}>Create new team</Button>
          <CreateTeamDialog
            open={openCreateTeam}
            onClose={handleCloseCreateTeamDialog}
            onCloseAdd={handleCreateNewTeam}
          />
        </div>
      </Container>
  );
}

export default ManageTeam;
