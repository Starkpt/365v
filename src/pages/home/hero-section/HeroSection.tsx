import HeroSlider from "@/components/hero-slider/HeroSlider";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeField } from "@mui/x-date-pickers/DateTimeField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import HeroFlightsSlider from "./HeroFlightsSlider";

const boxStyles = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyles = {
  position: "absolute",
  width: { xs: "75vw", sm: "55vw", md: "50vw", lg: "60vw", xl: "60vw" },
  // height: "350px",
  padding: "20px 25px",
  boxSizing: "border-box",
};

const dateTimeFieldStyles = {
  width: "130px",
  label: {
    // color: "#041DB8",
    fontFamily: "sans-serif",
    fontSize: ".90rem",
  },
  "input.MuiInputBase-input.MuiOutlinedInput-input": {
    height: "32px",
    backgroundColor: "#F8F8F8",
    padding: "0px 14px",
    fontFamily: "sans-serif",
    fontSize: "0.80rem",
    fontWeight: 600,
    // color: "#041DB8",
  },
  fieldset: {
    // border: "none",
  },
};

const resizableLabelStyles = {
  fontFamily: "sans-serif",
  fontSize: ".90rem",
  height: "100%",
  lineHeight: 1,
  top: "0",
};

const locationStyles = {
  height: "32px",
  textAlign: "left",
  fontFamily: "sans-serif",
  fontSize: "0.80rem",
  fontWeight: 600,
};

function HeroSection() {
  const [departureDate, setDepartureDate] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const [returnDate, setReturnDate] = useState<Dayjs | null>(dayjs("2022-04-17T15:30"));
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [passengersNo, setPassengersNo] = useState("");

  return (
    <Box sx={boxStyles}>
      <HeroSlider />
      <Card variant="outlined" sx={cardStyles}>
        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 500 }} color={"primary.main"}>
          Promotions
        </Typography>
        <Divider sx={{ marginBottom: "12px" }} />
        <HeroFlightsSlider />

        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 500 }} color={"primary.main"}>
          Search & Go
        </Typography>
        <Divider sx={{ marginBottom: "24px" }} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <DateTimeField
              sx={dateTimeFieldStyles}
              label="Departure"
              value={departureDate}
              onChange={(newDeparture) => setDepartureDate(newDeparture)}
              format="DD/MM/YYYY"
            />
            <DateTimeField
              sx={dateTimeFieldStyles}
              label="Return"
              value={returnDate}
              onChange={(newReturn) => setReturnDate(newReturn)}
              format="DD/MM/YYYY"
            />

            <FormControl sx={{ minWidth: "130px" }} size="small">
              <InputLabel sx={resizableLabelStyles}>From</InputLabel>
              <Select
                value={locationFrom}
                label="From"
                sx={locationStyles}
                onChange={(e: SelectChangeEvent) => setLocationFrom(e.target.value)}
              >
                <MenuItem value="">-</MenuItem>
                <MenuItem value="madrid">Madrid</MenuItem>
                <MenuItem value="lisbon">Lisboa</MenuItem>
                <MenuItem value="london">Londres</MenuItem>
                <MenuItem value="paris">Paris</MenuItem>
                <MenuItem value="porto">Porto</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "130px" }} size="small">
              <InputLabel sx={resizableLabelStyles}>To</InputLabel>
              <Select
                value={locationTo}
                label="To"
                sx={locationStyles}
                onChange={(e: SelectChangeEvent) => setLocationTo(e.target.value)}
              >
                <MenuItem value="">-</MenuItem>
                <MenuItem value="madrid">Madrid</MenuItem>
                <MenuItem value="lisbon">Lisboa</MenuItem>
                <MenuItem value="london">Londres</MenuItem>
                <MenuItem value="paris">Paris</MenuItem>
                <MenuItem value="porto">Porto</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: "130px" }} size="small">
              <InputLabel sx={resizableLabelStyles}>Passengers</InputLabel>
              <Select
                value={passengersNo}
                label="Passengers"
                sx={locationStyles}
                onChange={(e: SelectChangeEvent) => setPassengersNo(e.target.value)}
              >
                <MenuItem value="">-</MenuItem>
                <MenuItem value="1adults">1 Adults, Economy</MenuItem>
                <MenuItem value="2adults">2 Adults, Economy</MenuItem>
                <MenuItem value="1adults-1child">1 Adults + 1 Child, Economy</MenuItem>
                <MenuItem value="1adults-1child">1 Adults + 2 Child, Economy</MenuItem>
                <MenuItem value="etc">etc..</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{
                height: "32px",
              }}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </LocalizationProvider>
      </Card>
    </Box>
  );
}

export default HeroSection;
