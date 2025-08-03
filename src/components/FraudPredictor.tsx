import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
  MenuItem,
  Alert
} from '@mui/material';
import { predictFraud } from '../api/client';

export default function FraudPredictor() {
  const [form, setForm] = useState({
    amount: 100,
    use_chip: 'Chip Transaction',
    mcc: '5812',
    errors: 'None',
  });
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await predictFraud(form);
    setResult(res.fraud_prediction);
  };

  return (
    <Card elevation={3} sx={{ borderRadius: 3, maxWidth: 800, mx: 'auto', my: 4 }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Use this tool to predict the likelihood of fraud based on transaction details.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} >
          <Stack spacing={2}>
            <TextField
              label="Transaction Amount"
              type="number"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
              fullWidth
              required
            />
            <TextField
              select
              label="Use Chip"
              value={form.use_chip}
              onChange={(e) => setForm({ ...form, use_chip: e.target.value })}
              fullWidth
              required
            >
              <MenuItem value="Chip Transaction">Chip Transaction</MenuItem>
              <MenuItem value="Swipe Transaction">Swipe Transaction</MenuItem>
              <MenuItem value="Online Transaction">Online Transaction</MenuItem>
            </TextField>
            <TextField
              label="MCC Code"
              value={form.mcc}
              onChange={(e) => setForm({ ...form, mcc: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Error Type"
              value={form.errors}
              onChange={(e) => setForm({ ...form, errors: e.target.value })}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Predict Fraud
            </Button>
          </Stack>
        </Box>

        {result && (
          <Alert severity={result === 'Fraud' ? 'error' : 'success'} sx={{ mt: 3 }}>
            Prediction: <strong>{result}</strong>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
