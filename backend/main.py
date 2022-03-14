from mock.file_handler import handle_file
from mock.analyse import analyse


def get_analysis_data(filename: str) -> dict:
    file_status = handle_file(filename)
    if file_status[0]:
        return analyse(filename)
    else:
        return {"OK": {"status": False, "message": file_status[1]}}
