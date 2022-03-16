from backend.file_handler.main import get_numpy_array
from backend.core.main import get_response


def get_analysis_data(filename: str, file_type: str) -> dict:
    file_status = get_numpy_array(filename, file_type)
    if file_status["good"]:
        matrix = file_status["data"]
        response = get_response(matrix)
        return response
    else:
        return {"OK": {"status": False, "message": file_status["message"]}}
