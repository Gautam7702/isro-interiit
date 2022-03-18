
//drag and drop implementation
const dropZoneElement = document.getElementById("drop-zone");
dropZoneElement.addEventListener("dragover",e=> {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone__over");
});
dropZoneElement.addEventListener('click',e=>{
    document.getElementsByClassName('drop-zone__input')[0].click();}
    );
document.getElementsByClassName('drop-zone__input')[0].addEventListener('change',e=>{
    const files = document.getElementsByClassName('drop-zone__input')[0].files;
    updateThumbnail(files[0].name);
});

dropZoneElement.addEventListener("dragend",e=> {dropZoneElement.classList.remove("drop-zone__over")});
dropZoneElement.addEventListener("dragleave",e=> {dropZoneElement.classList.remove("drop-zone__over")});
dropZoneElement.addEventListener("drop",e=> {
    e.preventDefault();
    dropZoneElement.classList.remove("drop-zone__over");
    const el = document.getElementsByClassName('drop-zone__input')[0];
    el.files = e.dataTransfer.files;
    updateThumbnail(e.dataTransfer.files[0].name);
});
function updateThumbnail(fname)
    {
        document.getElementsByClassName('defaultText')[0].style.display = "none";
        document.getElementsByClassName('drop-zone__thumb')[0].setAttribute("data-label",fname);
        document.getElementsByClassName('drop-zone__thumb')[0].style.display = "block";
    }

//hover on arrow
const arrow = document.getElementsByClassName('arr')[0];
arrow.addEventListener('mouseenter',e=>{
    arrow.click();
});

//drop down implementatation
const dropDownHoverEl = document.getElementsByClassName("drop-down")[0];
function hideDropDown(){
    document.getElementsByClassName('Op1')[0].style.display = "none";
    document.getElementsByClassName('Op2')[0].style.display = "none";
    document.getElementsByClassName('Op4')[0].style.display = "none";
}
function showDropDown(){
    document.getElementsByClassName('Op1')[0].style.display = "block";
    document.getElementsByClassName('Op2')[0].style.display = "block";
    document.getElementsByClassName('Op4')[0].style.display = "block";
}
dropDownHoverEl.addEventListener('mouseenter',
    e=>{
        showDropDown();
    })
dropDownHoverEl.addEventListener('mouseleave',
    e=>{
        hideDropDown();
    }
)
correctFileFormat = 'NaN';
document.getElementsByClassName('Op1')[0].addEventListener('click',
    e=>{
        document.getElementsByClassName('selectedOp')[0].innerHTML = 'FITS';
        correctFileFormat = 'FITS';
        document.getElementsByClassName('desc_format')[0].innerHTML = 'The file should contain 2 elements, the second element being the main data. The data should be an array or list where the fields "time" and "rate" must be present. These should be the first 2 elements of each array. <br> <br> For example, "file[1]" should be the main data, where "file[1][0]" should be of the form [&lttime_value&gt, &ltrate_value&gt] at least. The array can optionally contain the "error" and "frace" terms.';
        hideDropDown();
        }
);
document.getElementsByClassName('Op2')[0].addEventListener('click',
    e=>{
        document.getElementsByClassName('selectedOp')[0].innerHTML = 'ASCII';
        correctFileFormat= 'ASCII';
        document.getElementsByClassName('desc_format')[0].innerHTML = "The file must contain rows of values of the form '&lttime_value&gt, &ltrate_value&gt, [optionally, &lterror&gt, ,&ltfrace&gt]' seperated by commas, for each data point. The data points need to be seperated by newlines<br><br> For example, the file must look like this:<br> &lttime_value1&gt,&ltrate_value1&gt<br>&lttime_value2&gt,&ltrate_value2&gt<br>or optionally,<br>&lttime_value1&gt,&ltrate_value1&gt,&lterror1&gt,&ltfrace1&gt<br>&lttime_value2&gt,&ltrate_value2&gt,&lterror2&gt,&ltfrace2&gt";
        hideDropDown();
    }
);

document.getElementsByClassName('Op4')[0].addEventListener('click',
    e=>{document.getElementsByClassName('selectedOp')[0].innerHTML = 'XLS';
        correctFileFormat = 'XLS';
        document.getElementsByClassName('desc_format')[0].innerHTML = "Similar to ASCII, the XLS file must have time in the first column and rate in the second column. The file can optionally contain error and frace in the third and fourth columns.<br>For example, on opening, the file must look like this:<br>&lttime_value1&gt   &ltrate_value1&gt<br>&lttime_value2&gt   &ltrate_value2&gt<br>or optionally,<br>&lttime_value1&gt   &ltrate_value1&gt  &lterror1&gt  &ltfrace1&gt<br>&lttime_value2&gt   &ltrate_value2&gt  &lterror2&gt  &ltfrace2&gt <br>in the XLS cells.";
        hideDropDown();
    }
);

//Submit Button Event Handler
document.getElementsByClassName('submitButton')[0].addEventListener('click',e=>{
    const files = document.getElementsByClassName('drop-zone__input')[0];
    if(correctFileFormat=='NaN'||files.files.length==0)
        {
            if(correctFileFormat=='NaN')
                {
                    alert('Select a file format');
                }
            else    
                {
                    alert('No file submitted');
                }
            e.preventDefault();
        }
    else
        {
            const form = document.getElementsByClassName('form')[0];
            form.setAttribute('action','/submit'+correctFileFormat);
        }
});

