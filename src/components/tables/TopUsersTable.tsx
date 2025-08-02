import type { TopUserSpending } from '../../types/analytics';

export default function TopUsersTable({ data }: { data: TopUserSpending[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
          <th>Spending</th>
          <th>Income</th>
          <th>Ratio</th>
        </tr>
      </thead>
      <tbody>
        {data.map(user => (
          <tr key={user.user_id}>
            <td>{user.user_name}</td>
            <td>${user.spending.toLocaleString()}</td>
            <td>${user.reported_income.toLocaleString()}</td>
            <td>{user.ratio.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}