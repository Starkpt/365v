import Textarea  from "@mui/joy/Textarea";
import { Box, Card, Divider, FormGroup, TextField, Typography } from "@mui/material";

export const contactsResponsiveStyles = {
  height: {
    xs: "50vh",
    sm: "50vh",
    md: "50vh",
    lg: "60vh",
    xl: "60vh",
  },
  minHeight: {
    xs: "500px",
    sm: "550px",
    md: "550px",
    lg: "600px",
    xl: "600px",
  },
};

const contactsSectionStyles = {
  ...contactsResponsiveStyles,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
};

const cardStyles = {
  width: { xs: "75vw", sm: "55vw", md: "50vw", lg: "65vw", xl: "60vw" },
  minWidth: "300px",
  // height: "350px",
  // padding: "20px 25px",
  boxSizing: "border-box",
  zIndex: 1,
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#f5f6f8",
  border: 0,
};

const resizableLabelStyles = {
  flex: 1,
  fontFamily: "sans-serif",
  fontSize: ".90rem",
  height: "100%",
  lineHeight: 1,
  top: "0",
};

function ContactsSection() {
  const center = { lat: 39.915091591266, lng: -8.630858742967073 };
  const zoom = 6;

  return (
    <Box sx={contactsSectionStyles}>
      <Card variant="outlined" sx={cardStyles}>
        <Box className="map" sx={{ width: "50%", height: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6120.387034770452!2d-8.635259075586644!3d39.914685339615644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd226671c6afac3f%3A0x6bc64af481f14343!2s365%20Viagens%20-%20Ag%C3%AAncia%20de%20viagens%20Lda!5e0!3m2!1spt-PT!2spt!4v1682984462968!5m2!1spt-PT!2spt"
            // width="600"
            // height="450"
            style={{ width: "100%", height: "100%", border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Box sx={{ padding: " 20px 45px 25px", width: "50%" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "left", fontWeight: 500 }}
            color={"primary.main"}
          >
            Contact
          </Typography>
          <Divider sx={{ marginBottom: "24px" }} />
          <FormGroup>
            <TextField size="small" variant="outlined" label="Name" />
          </FormGroup>
          <FormGroup>
            <TextField size="small" variant="outlined" label="E-mail" />
          </FormGroup>
          <FormGroup>
            <TextField size="small" variant="outlined" label="Phone no." />
          </FormGroup>
          <FormGroup>
            <Textarea size="sm" placeholder="Message" variant="solid" />
          </FormGroup>
        </Box>
      </Card>
    </Box>
  );
}

export default ContactsSection;
