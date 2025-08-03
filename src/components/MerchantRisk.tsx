import { useEffect, useState } from 'react';
import { fetchMerchantRisk } from '../api/client';
import {
  Box,
  Typography,
  TextField,
  Paper,
  CircularProgress,
} from '@mui/material';

interface MerchantRiskDashboardProps {
  mcc: string;
  onMccChange: (mcc: string) => void;
}

export default function MerchantRiskDashboard({ mcc, onMccChange }: MerchantRiskDashboardProps) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!mcc) return;
    setLoading(true);
    fetchMerchantRisk(mcc)
      .then(setData)
      .finally(() => setLoading(false));
  }, [mcc]);

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3, maxWidth: 800, mx: 'auto' }}>
      <Box sx={{ p: 3 }}>

        <TextField
          label="Enter MCC code"
          variant="outlined"
          value={mcc}
          onChange={(e) => onMccChange(e.target.value)}
          fullWidth
          sx={{ mb: 3 }}
        />

        {loading && <CircularProgress />}

        {!loading && data && (
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="body1">
              <strong>Category:</strong> {data.category}
            </Typography>
            <Typography variant="body1">
              <strong>Fraud Rate:</strong> {(data.fraud_rate * 100).toFixed(2)}%
            </Typography>
          </Paper>
        )}
      </Box>
    </Paper >
  );
}
