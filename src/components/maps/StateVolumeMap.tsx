import type { StateVolume } from '../../types/analytics';

export default function StateVolumeMap({ data }: { data: StateVolume[] }) {
  // For now, we'll create a simple table
  // Install react-leaflet later for actual maps
  return (
    <table>
      <thead>
        <tr>
          <th>State</th>
          <th>Transactions</th>
          <th>Frauds</th>
          <th>Fraud Rate</th>
        </tr>
      </thead>
      <tbody>
        {data.map(state => (
          <tr key={state.state}>
            <td>{state.state}</td>
            <td>{state.total_transactions.toLocaleString()}</td>
            <td>{state.fraud_count.toLocaleString()}</td>
            <td>{state.fraud_rate.toFixed(2)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}