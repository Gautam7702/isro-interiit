# isro-interiit

Authored by [Debjit Bhowal](https://github.com/debjit-bw), [Gautam Sethia](https://github.com/Gautam7702), [Jugal Chapatwala](https://github.com/TakluBalm) and [Jignesh Agrawal](https://github.com/agjignesh) from IIT Ropar.

This program searches for solar flares in lightcurve data. The input is the lightcurve file in FITS, ASCII or XLS formats. The output is a visual representation of the identified solar flares along with some representative information for each. Specifications regarding input files can be found in [FILES.md](https://github.com/debjit-bw/isro-interiit/blob/main/FILES.md).

- [Installation](#installation)
- [Usage](#usage)
    - [Web version](#web-version)
    - [Standalone app](#standalone-app)
- [Documentation](#documentation)

# Installation

The web version is hosted [here](URL). The standalone application can be installed by cloning the [git repository](https://github.com/debjit-bw/isro-interiit) and executing the [install.sh](https://github.com/debjit-bw/isro-interiit/blob/main/install.sh).


# Usage

Both the web and app versions have an easy to use and intuitive UI.

## Web version

Here we show how to use the web version of the software. For example, we will use the sample lightcurve file [fits_data.lc](https://github.com/debjit-bw/isro-interiit/blob/main/sample_files/fits_data.lc) which is in the FITS format. Sample files for all supported formats are present inside the [sample_files](https://github.com/debjit-bw/isro-interiit/tree/main/sample_files) folder.

1. The homepage tells the user about the app and its function.

![Homepage](Images/i1.jpeg)

2. On scrolling down, the input form is revealed. The user can drag-and-drop the files onto the upload box or click upload to open the file explorer. The user can choose between FITS, ASCII and XLS file formats.

![File input dialogue](Images/i2.jpeg)

3. We upload the sample file and see the output. Here we chose the file in FITS format.

![File input dialogue](Images/i5.jpeg)

4. The output is a visual representation of the identified solar flares.

![File input dialogue](Images/i3.jpeg)

5. On scrolling, it shows other information about the flare, like the peak position, the rise and decay times of the peak, the duration and the peak flux.

> Time related info like peak time are given as miliseconds since the start of the data. For example, it the peak position is 60000 ms, it means the peak is present 1 minute from the starting of the data.

![File input dialogue](Images/i4.jpeg)

## Standalone app

HOW TO USE WITH SS


# Documentation

Detailed documentation can be found in [DOCUMENTATION.md](https://github.com/debjit-bw/isro-interiit/blob/main/DOCUMENTATION.md).


# Accuracy and reliability

Since no labelled data was provided to us, no number for accuracy and reliability can be shown. However, we have tested the software on a few datasets and it seems to work well.

Our confidence in this model stems from our approach. We used a robust error removal procedure to smoothen the curve and bring it near ground truth.

After that the fit parameters we used were extensively fine-tuned based on several sample datasets. We prioritized false positives to false negatives.

In other words, even if the algorithm can sometimes find a false positive, it will very rarely find a false negative. This means almost no real flare will be missed.

Our reasoning and explanation for choosing the fit parameters is detailed in [DOCUMENTATION.md](https://github.com/debjit-bw/isro-interiit/blob/main/DOCUMENTATION.md).