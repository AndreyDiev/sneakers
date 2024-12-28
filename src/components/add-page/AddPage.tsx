import {
  Checkbox,
  Card,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  FormControlLabel,
  Button,
} from "@mui/material";
import "./style.css";
import DoNotStepIcon from "@mui/icons-material/DoNotStep";
import { useState } from "react";

interface CreateSneakersLot {
  brand: string;
  model: string;
  color: string;
  city: string;
  place: string;
  condition: string;
  uk_size: number;
  us_size: number;
  eu_size: number;
  price: number;
  fitting: boolean;
  article: string;
}

const first = ["Бренд", "Модель", "Цвет", "Город", "Место сделки", "Состояние"];

export function AddPage() {
  const [fitting, setFitting] = useState<boolean>(false);

  const handleChangefitting = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFitting(event.target.checked);
  };

  return (
    <Card
      elevation={8}
      sx={{
        width: "80%",
        m: "12px auto",
        p: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "680px",
      }}
    >
      <Typography variant="h4" textAlign="center" mb="12px">
        Новая пара
      </Typography>
      <form className="form">
        {first.map((name, i) => (
          <TextField
            variant="filled"
            label={name}
            key={i}
            fullWidth
            sx={{ mb: "24px" }}
          ></TextField>
        ))}
        <p style={{ margin: "0 0 8px 0", fontWeight: 600 }}>Размеры</p>
        <div className="size" style={{ marginBottom: "24px" }}>
          <TextField
            variant="filled"
            label="UK"
            type="number"
            sx={{ width: "33%" }}
          />
          <TextField
            variant="filled"
            label="US"
            type="number"
            sx={{ width: "33%" }}
          />
          <TextField
            variant="filled"
            label="EU"
            type="number"
            sx={{ width: "33%" }}
          />
        </div>
        <FormControl variant="filled" sx={{ width: '100%', mb: '18px' }}>
          <InputLabel htmlFor="filled-adornment-amount">Цена</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            endAdornment={<InputAdornment position="end">₽</InputAdornment>}
          />
        </FormControl>
        <FormControlLabel
        sx={{height: '56px', mb: '18px', ml: '2px'}}
          control={
            <Checkbox
              checked={fitting}
              onChange={handleChangefitting}
              icon={<DoNotStepIcon sx={{color: 'red'}} />}
              checkedIcon={<DoNotStepIcon sx={{color: 'green'}}/>}
              sx={{transform: 'scale(1.33)'}}
            />
          }
          label={fitting ? 'С примеркой' : "Без примерки"}
        />
        <TextField
          label="Описание"
          fullWidth
          multiline
          rows={4}
          variant="filled"
          sx={{mb: '32px'}}
        />
        <Button variant="contained" fullWidth>Добавить </Button>
      </form>
    </Card>
  );
}

export default AddPage;
