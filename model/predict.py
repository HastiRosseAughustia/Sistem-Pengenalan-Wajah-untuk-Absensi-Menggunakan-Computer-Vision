import numpy as np
from tensorflow.keras.models import load_model
import argparse

def load_and_predict(model_path, input_data):
    # Memuat model dari file .h5
    model = load_model(model_path)

    # Melakukan prediksi pada data input
    predictions = model.predict(input_data)

    return predictions

def main():
    # Parsing argumen dari command line
    parser = argparse.ArgumentParser(description='Prediksi menggunakan model terlatih.')
    parser.add_argument('--model', type=str, required=True, help='Path ke file model .h5')
    parser.add_argument('--data', type=str, required=True, help='Path ke file data input (CSV)')

    args = parser.parse_args()

    # Memuat data input dari file CSV
    input_data = np.loadtxt(args.data, delimiter=',')

    # Melakukan prediksi
    predictions = load_and_predict(args.model, input_data)

    # Menampilkan hasil prediksi
    print('Predictions:')
    print(predictions)

if __name__ == '__main__':
    main()

