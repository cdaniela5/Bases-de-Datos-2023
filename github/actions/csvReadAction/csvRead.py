import pandas as pd
import os

if __name__ == '__main__':
    file_path = os.environ['INPUT_FILE-PATH']
    df = pd.read_csv(file_path)
    print(df)
