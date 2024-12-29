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
  Select,
  MenuItem,
} from "@mui/material";
import "./style.css";
import DoNotStepIcon from "@mui/icons-material/DoNotStep";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../../API/api";

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

const mockBrands = ["brand 1", "brand 2", "brand 3"];
const mockConditions = ["cond 1", "cond 2", "condev) 3"];

export function AddPage() {
  const [brand, setBrand] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const [ukSize, setUkSize] = useState<number | null>(null);
  const [usSize, setUsSize] = useState<number | null>(null);
  const [euSize, setEuSize] = useState<number | null>(null);

  const [fitting, setFitting] = useState<boolean>(false);

  const [article, setArticle] = useState<string>("");

  const fir = [
    {
      name: "Модель",
      value: model,
      setState: setModel,
    },
    {
      name: "Цвет",
      value: color,
      setState: setColor,
    },
    {
      name: "Город",
      value: city,
      setState: setCity,
    },
    {
      name: "Место сделки",
      value: place,
      setState: setPlace,
    },
  ];

  const handleChangefitting = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFitting(event.target.checked);
  };

  const handleSubmitClick = async () => {
    const data = {
      brand: brand,
      model: model,
      color: color,
      city: city,
      place: place,
      condition: condition,
      price: price,
      ukSize: ukSize,
      usSize: usSize,
      euSize: euSize,
      fitting: fitting,
      article: article,
    };

    api
      .createSneakersLot(data)
      .then((r) => {
        console.log(r);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  //if (!localStorage.getItem('token')) return <Navigate to='login' />

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
        {fir.map((article, i) => (
          <TextField
            value={article.value}
            onChange={(e) => {
              article.setState(e.target.value);
            }}
            variant="filled"
            label={article.name}
            key={i}
            fullWidth
            sx={{ mb: "24px" }}
          ></TextField>
        ))}

        <FormControl fullWidth>
          <InputLabel>Бренд</InputLabel>
          <Select
          value={brand}
          variant="filled"
          onChange={e => {
            setBrand(e.target.value as string)
          }}
          >
            {
              mockBrands.map((brand, i) => (
                <MenuItem key={i} value={brand}>{brand}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{m: '24px 0'}}>
          <InputLabel>Состояние</InputLabel>
          <Select
          value={condition}
          variant="filled"
          onChange={e => {
            setCondition(e.target.value as string)
          }}
          >
            {
              mockConditions.map((condition, i) => (
                <MenuItem key={i} value={condition}>{condition}</MenuItem>
              ))
            }
          </Select>
        </FormControl>

        <p style={{ margin: "0 0 8px 0", fontWeight: 600 }}>Размеры</p>
        <div className="size" style={{ marginBottom: "24px" }}>
          <TextField
            value={ukSize}
            onChange={(e) => setUkSize(Number(e.target.value))}
            variant="filled"
            label="UK"
            type="number"
            sx={{ width: "33%" }}
          />
          <TextField
            value={usSize}
            onChange={(e) => setUsSize(Number(e.target.value))}
            variant="filled"
            label="US"
            type="number"
            sx={{ width: "33%" }}
          />
          <TextField
            value={euSize}
            onChange={(e) => setEuSize(Number(e.target.value))}
            variant="filled"
            label="EU"
            type="number"
            sx={{ width: "33%" }}
          />
        </div>
        <FormControl variant="filled" sx={{ width: "100%", mb: "18px" }}>
          <InputLabel htmlFor="filled-adornment-amount">Цена</InputLabel>
          <FilledInput
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            id="filled-adornment-amount"
            endAdornment={<InputAdornment position="end">₽</InputAdornment>}
          />
        </FormControl>
        <FormControlLabel
          sx={{ height: "56px", mb: "18px", ml: "2px" }}
          control={
            <Checkbox
              checked={fitting}
              onChange={handleChangefitting}
              icon={<DoNotStepIcon sx={{ color: "red" }} />}
              checkedIcon={<DoNotStepIcon sx={{ color: "green" }} />}
              sx={{ transform: "scale(1.33)" }}
            />
          }
          label={fitting ? "С примеркой" : "Без примерки"}
        />
        <TextField
          value={article}
          onChange={(e) => setArticle(e.target.value)}
          label="Описание"
          fullWidth
          multiline
          rows={4}
          variant="filled"
          sx={{ mb: "32px" }}
        />
        <Button variant="contained" fullWidth onClick={handleSubmitClick}>
          Добавить
        </Button>
      </form>
    </Card>
  );
}

export default AddPage;
