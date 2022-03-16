function makeVisible(){
    const el  = document.getElementsByClassName("fileInput")[0];
    el.style.display = "inline-block";
}
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
const arrow = document.getElementsByClassName('arr')[0];
arrow.addEventListener('mouseenter',e=>{
    arrow.click();
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
const dropDownHoverEl = document.getElementsByClassName("drop-down")[0];
function hideDropDown(){
    document.getElementsByClassName('Op1')[0].style.display = "none";
    document.getElementsByClassName('Op2')[0].style.display = "none";
    document.getElementsByClassName('Op3')[0].style.display = "none";
    document.getElementsByClassName('Op4')[0].style.display = "none";
}
function showDropDown(){
    document.getElementsByClassName('Op1')[0].style.display = "block";
    document.getElementsByClassName('Op2')[0].style.display = "block";
    document.getElementsByClassName('Op3')[0].style.display = "block";
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
        hideDropDown();
        
        }
);
document.getElementsByClassName('Op2')[0].addEventListener('click',
    e=>{
        document.getElementsByClassName('selectedOp')[0].innerHTML = 'ASCII';
        correctFileFormat= 'ASCII'
        hideDropDown();
    }
);
document.getElementsByClassName('Op3')[0].addEventListener('click',
    e=>{document.getElementsByClassName('selectedOp')[0].innerHTML = 'CDF';
        correctFileFormat = 'CDF';
        hideDropDown();
        document.getElementsByClassName('desc_format')[0].innerHTML = "The file should contain 2 elements, the second element being the main data. The data should be an array or list where the fields 'time' and 'rate' must be present. These should be the first 2 elements of each array.";
}
);
document.getElementsByClassName('Op4')[0].addEventListener('click',
    e=>{document.getElementsByClassName('selectedOp')[0].innerHTML = 'XLS';
        correctFileFormat = 'XLS';
        hideDropDown();
    }
);
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
})