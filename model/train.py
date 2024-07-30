import numpy as np
import pandas as pd
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.models import save_model
import argparse

def load_data(data_path):
    # Memuat data dari file CSV
    data = pd.read_csv(data_path)
    X = data.drop('target', axis=1).values
    y = data['target'].values
    return X, y

def create_model(input_shape):
    # Membangun model Sequential
    model = Sequential([
        Dense(64, activation='relu', input_shape=(input_shape,)),
        Dense(32, activation='relu'),
        Dense(1, activation='sigmoid')
    ])

    # Mengkompilasi model
    model.compile(optimizer=Adam(learning_rate=0.001), 
                  loss='binary_crossentropy', 
                  metrics=['accuracy'])
    return model

def train_model(X_train, y_train, model, epochs, batch_size):
    # Melatih model
    history = model.fit(X_train, y_train, 
                        epochs=epochs, 
                        batch_size=batch_size, 
                        validation_split=0.2, 
                        verbose=1)
    return history

def main():
    # Parsing argumen dari command line
    parser = argparse.ArgumentParser(description='Melatih model machine learning.')
    parser.add_argument('--data', type=str, required=True, help='Path ke file data CSV')
    parser.add_argument('--model', type=str, required=True, help='Path ke file model .h5')
    parser.add_argument('--epochs', type=int, default=10, help='Jumlah epoch untuk pelatihan')
    parser.add_argument('--batch_size', type=int, default=32, help='Ukuran batch untuk pelatihan')

    args = parser.parse_args()

    # Memuat data
    X, y = load_data(args.data)

    # Membuat model
    model = create_model(X.shape[1])

    # Melatih model
    train_model(X, y, model, args.epochs, args.batch_size)

    # Menyimpan model ke file .h5
    model.save(args.model)
    print(f'Model disimpan ke {args.model}')

if __name__ == '__main__':
    main()

