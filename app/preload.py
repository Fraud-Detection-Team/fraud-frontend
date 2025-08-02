import pandas as pd
from datetime import datetime, timedelta
import random

# Generate mock transactions data
def generate_transactions(n=1000):
    return pd.DataFrame({
        'transaction_id': [f'txn_{i}' for i in range(n)],
        'amount': [round(random.uniform(1, 1000), 2) for _ in range(n)],
        'timestamp': [datetime.now() - timedelta(days=random.randint(0, 30)) for _ in range(n)],
        'merchant_id': [f'merch_{random.randint(1, 50)}' for _ in range(n)],
        'card_id': [f'card_{random.randint(1, 100)}' for _ in range(n)],
        'is_fraud': [random.random() > 0.95 for _ in range(n)]
    })

# Generate mock users data
def generate_users(n=100):
    return pd.DataFrame({
        'user_id': [f'user_{i}' for i in range(n)],
        'name': [f'User_{i}' for i in range(n)],
        'join_date': [datetime.now() - timedelta(days=random.randint(0, 365)) for _ in range(n)]
    })

# Generate mock cards data
def generate_cards(n=100):
    return pd.DataFrame({
        'card_id': [f'card_{i}' for i in range(n)],
        'user_id': [f'user_{random.randint(0, 99)}' for _ in range(n)],
        'issue_date': [datetime.now() - timedelta(days=random.randint(0, 365)) for _ in range(n)],
        'is_compromised': [random.random() > 0.9 for _ in range(n)]
    })

# Generate mock MCC codes
def generate_mcc():
    return {
        '5411': 'Grocery Stores',
        '5812': 'Restaurants',
        '5912': 'Drug Stores',
        # Add more as needed
    }

# Initialize all data
transactions_df = generate_transactions()
users_df = generate_users()
cards_df = generate_cards()
fraud_labels = transactions_df['is_fraud']
mcc_dict = generate_mcc()