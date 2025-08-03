import { useEffect, useState } from 'react';
import { fetchCompromisedCards } from '../api/client';

export default function CompromisedCards() {
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    fetchCompromisedCards().then(setCards);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Compromised Cards</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border p-2">Card ID</th>
              <th className="border p-2">Client ID</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card) => (
              <tr key={card.id}>
                <td className="border p-2">{card.id}</td>
                <td className="border p-2">{card.client_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}