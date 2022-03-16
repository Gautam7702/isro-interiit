from backend.core.curve_completion import complete_curve
from backend.core.smoothen_curve import moving_average
from backend.core.peak_information import get_peak_information


def get_response(matrix) -> dict:
    """
    Get response from data.
    """
    array = complete_curve(matrix)
    array = moving_average(array, 300)[500:-500]
    peaks_info = get_peak_information(array)

    return {
        "graph_data": array,
        "peaks": peaks_info,
        "OK": {"status": True, "message": "All OK"},
    }
