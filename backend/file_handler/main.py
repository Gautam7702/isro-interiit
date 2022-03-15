from backend.file_handler.handle_types import read_fits, read_csv, read_xls

def get_numpy_array(file_path: str, file_type: str):
    """
    Reads a file and returns the data as a numpy array.
    """
    if file_type.lower() == "fits":
        return read_fits(file_path)
    elif file_type.lower() == "csv":
        return read_csv(file_path)
    elif file_type.lower() == "xls":
        return read_xls(file_path)
    else:
        return {
            "good": False,
            "message": "File type not supported. Only FITS, CSV, and XLS are supported."
        }