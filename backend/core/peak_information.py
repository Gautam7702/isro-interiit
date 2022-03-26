from scipy.signal import find_peaks, peak_widths
import numpy as np


def get_peaks(array: list) -> list:
    """
    Get peaks from data.
    """
    x = (np.max(array) - np.average(array)) / 5 + np.average(array)
    peaks, p_data = find_peaks(array, x, width = 60)
    return peaks


def get_peak_information(array: list) -> list:
    """
    Get peaks from data.
    """
    peaks = get_peaks(array)
    widths = peak_widths(array, peaks, 0.9)

    peaks_list = [
        {
            "peak_position": peaks[i],
            "range": [widths[2][i], widths[3][i]],
            "rise_time": peaks[i] - widths[2][i],
            "decay_time": widths[3][i] - peaks[i],
            "peak_flux": array[peaks[i]],
            "duration": widths[0][i],
        }
        for i in range(len(peaks))
    ]

    return peaks_list
