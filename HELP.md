# FITS
The file should contain 2 elements, the second element being the main data. The data should be an array or list where the fields "time" and "rate" must be present. These should be the first 2 elements of each array.

For example, ```file[1]``` should be the main data, where ```file[1][0]``` should be of the form ```[<time_value>, <rate_value>]``` at least. The array can optionally contain the "error" and "frace" terms.

-----
<br>

# ASCII
The file must contain rows of values of the form ```<time_value>, <rate_value>, [optionally, <error>, ,frace>]``` seperated by commas, for each data point. The data points need to be seperated by newlines.

For example, the file must look like this:

```
<time_value1>,<rate_value1>
<time_value2>,<rate_value2>
<time_value3>,<rate_value3>
<time_value4>,<rate_value4>
<time_value5>,<rate_value5>
```

or optionally,
```
<time_value1>,<rate_value1>,<error1>,<frace1>
<time_value2>,<rate_value2>,<error2>,<frace2>
<time_value3>,<rate_value3>,<error3>,<frace3>
<time_value4>,<rate_value4>,<error4>,<frace4>
<time_value5>,<rate_value5>,<error5>,<frace5>
```

-----
<br>

# XLS

