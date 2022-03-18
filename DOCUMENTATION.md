# Documentation

The following sections explain the necessary parts of the code.

- [Input](#input)
- [File handling](#file-handling)
- [Core](#core)
	- [Curve completion](#curve-completion)
	- [Error smoothening](#error-smoothening)
	- [Peak detection](#peak-detection)
- [Output](#output)

# Input

Folder: [frontend/](https://github.com/team19techmeet/isro-interiit/tree/main/frontend)

The frontend accepts an appropriate file and its type. The user can choose between FITS, ASCII and XLS file formats. There are specifications that the file has to follow for the backend to process. This is described in detail in [FILES.md](https://github.com/team19techmeet/isro-interiit/blob/main/FILES.md)

For web, the frontend stores the file in the server. For the app, the file is already in the local filesystem. Next, it passes the filename to the backend.

# File handling

Folder: [file_handler/](https://github.com/team19techmeet/isro-interiit/tree/main/backend/file_handler)

The backend is designed to attempt to open the file depending on the file type. If it cannot open the file (either due to errors in file, incompatible types, or corrupted files), it sends an error message to the frontend.

If successful, it returns a [numpy](https://numpy.org/) array of shape (`length_of_data`, 2). The first column is the timestamps and the second one is the xsm rates.

# Core

The core of the backend consists of 3 steps:
- [Curve completion](#curve-completion)
- [Error smoothening](#error-smoothening)
- [Peak detection](#peak-detection)

## Curve completion

File: [curve_completion.py](https://github.com/team19techmeet/isro-interiit/blob/main/backend/core/curve_completion.py)

The data in the matrix maybe incomplete due to bad sun angles. Several of this voids are present during the flares. To accurately detect those, the algorithm attempts to fill the incomplete data by interpolating between the nearest data it can find around the void.

## Error smoothening

File: [smoothen_curve.py](https://github.com/team19techmeet/isro-interiit/blob/main/backend/core/smoothen_curve.py)

The data is very noisy. To reduce the error, instead of working with the error values provided, we smoothen the curve by taking the moving average of the curve.

As some errors are positive while the others negative, taking a local mean averages out the errors, leaving us with data that is closer to the ground truth.

## Peak detection

File: [peak_information.py](https://github.com/team19techmeet/isro-interiit/blob/main/backend/core/peak_information.py)

The backend uses [scipy's](https://scipy.org/) `detect_peaks` and `peak_widths` functions to extract the peaks. We use several parameters to fine-tune our predictions.

### Fit Parameters
Scipy uses several fit parameters which we have fine-tuned for the best quality predictions.

We have used the find_peaks function for finding solar X-ray bursts and calculating their duration some of the parameters that we have changed in the function are listed below.  

**Width**: we have taken the minimum time of solar width to be 60 seconds as we classify a peak as a solar X-ray burst if it lasts for more than 1 minute that is why we have taken width to be 60.

**Height**: We have assumed the minimum height as half between the maximum flux value and the average. This was done because throughout our testing, we saw that all the bursts that are detected below avg/2 are either false positives or very low-key solar bursts that are not prominent enough to be classified.

**rel_height**. We have taken its value to be 0.9 because the peaks would have at least 90% of the detected range inside them. Else, the function would return extreme values.

> Occasionally the algorithm will trim a total of 1 second (at max) of data around the edges for better prediction accuracy.


# Output

If successful, the backend returns a dictionary with the `graph_data` and relevant information about the `peaks`. The frontend then [plots the graph](https://github.com/team19techmeet/isro-interiit/blob/main/frontend/templates/results.html) using [chart.js](https://www.chartjs.org/) and displays the relevant parameters.
