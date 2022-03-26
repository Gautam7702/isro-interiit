from astropy.io import fits
import pandas as pd
import numpy as np

def read_fits(file_path):
    """
    Reads a fits file and returns the data as a numpy array.
    """
    try:
        data = fits.open(file_path)
        data_ = data[1].data
        if len(data_) > 0 and len(data_[0]) > 0:
            return {
                "good": True,
                "data": np.array(data_.tolist())[:,:2]
            }
        else:
            return {
                "good": False,
                "message": "No data found in file or data has one axis."
            }
    except:
        return {
            "good": False,
            "message": "Not a fits file or data not in second element."
        }

def read_csv(file_path, retry_as_csv = False):
    """
    Reads a csv file and returns the data as a numpy array.
    """
    try:
        if retry_as_csv:
            data = pd.read_csv(file_path).to_numpy()
        else:
            data = []
            for line in open(file_path):
                row = [int(x) for x in line.strip().split(' ') if len(x) > 0]
                if len(row) == 2:
                    data.append(row)

            data = np.asarray(data)

        if len(data) > 0 and len(data[0]) > 0:
            return {
                "good": True,
                "data": data
            }
        else:
            return {
                "good": False,
                "message": "No data found in file or data has one axis."
            }
    except:
        if retry_as_csv:
            return {
                "good": False,
                "message": "Could not read file."
            }
        else:
            return read_csv(file_path, True)

def read_xls(file_path):
    """
    Reads an xls file and returns the data as a numpy array.
    """
    try:
        data = pd.read_excel(file_path).to_numpy()
        if len(data) > 0 and len(data[0]) > 0:
            return {
                "good": True,
                "data": data[:,:2]
            }
        else:
            return {
                "good": False,
                "message": "No data found in file or data has one axis."
            }
    except:
        return {
            "good": False,
            "message": "Could not read file."
        }