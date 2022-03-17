from backend.core.curve_completion import complete_curve
from backend.core.smoothen_curve import moving_average
from backend.core.peak_information import get_peak_information
from backend.utils import vars

def trim_graph(array: list) -> list:
    """
    Trim graph to the right.
    """
    if len(array) > 2 * vars.array_trim:
        return array[vars.array_trim:-vars.array_trim]
    else:
        return array


def get_response(matrix) -> dict:
    """
    Get response from data.
    """
    array = complete_curve(matrix)
    array = moving_average(array, 300)
    array = trim_graph(array)
    peaks_info = get_peak_information(array)

    return {
        "graph_data": array,
        "peaks": peaks_info,
        "OK": {"status": True, "message": "All OK"},
    }
