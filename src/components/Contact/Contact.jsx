import {
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Divider,
  DialogContentText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import MUIButton from "../MUIButton/MUIButton";
import { useDispatch } from "react-redux";
import { updateContact, deleteContact } from "../../redux/phone/operations";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = ({ id, name, number }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters long")
      .max(50, "Name must be less than 50 characters long")
      .required("This is a required field")
      .test(
        "is-not-empty",
        "Name cannot be just spaces",
        (value) => value?.trim().length > 0
      ),
    number: Yup.string()
      .min(3, "Phone number must be at least 3 characters long")
      .max(50, "Phone number must be less than 50 characters long")
      .required("This is a required field")
      .test(
        "is-not-empty",
        "Phone number cannot be just spaces",
        (value) => value?.trim().length > 0
      ),
  });

  const formik = useFormik({
    initialValues: {
      name,
      number,
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      handleEdit(values);
    },
  });

  const openDeleteDialog = () => setIsDeleteDialogOpen(true);
  const closeDeleteDialog = () => setIsDeleteDialogOpen(false);
  const handleConfirmDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully");
        closeDeleteDialog();
      })
      .catch((error) => {
        toast.error(
          `Failed to delete contact: ${error.message || "An error occurred"}`
        );
      });
  };

  const openEditDialog = () => setIsEditDialogOpen(true);
  const closeEditDialog = () => setIsEditDialogOpen(false);
  const handleEdit = ({ name, number }) => {
    dispatch(updateContact({ id, name, number }))
      .unwrap()
      .then(() => {
        toast.success("Contact updated successfully");
        closeEditDialog();
      })
      .catch((error) => {
        toast.error(
          `Failed to update contact: ${error.message || "An error occurred"}`
        );
      });
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="edit" onClick={openEditDialog}>
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={openDeleteDialog}
            >
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={name} secondary={number} />
      </ListItem>
      <Divider light />

      <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this contact?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MUIButton onClick={closeDeleteDialog} variant="outlined">
            Cancel
          </MUIButton>
          <MUIButton onClick={handleConfirmDelete} color="primary">
            Confirm
          </MUIButton>
        </DialogActions>
      </Dialog>

      <Dialog open={isEditDialogOpen} onClose={closeEditDialog}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Edit Contact</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              {...formik.getFieldProps("name")}
              error={formik.touched.name && formik.errors.name}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              margin="dense"
              label="Phone Number"
              type="text"
              fullWidth
              variant="outlined"
              {...formik.getFieldProps("number")}
              error={formik.touched.number && formik.errors.number}
              helperText={formik.touched.number && formik.errors.number}
            />
          </DialogContent>
          <DialogActions>
            <MUIButton onClick={closeEditDialog} variant="outlined">
              Cancel
            </MUIButton>
            <MUIButton type="submit" color="primary">
              Save
            </MUIButton>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Contact;
