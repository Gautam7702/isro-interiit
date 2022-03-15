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

dropDownHoverEl.addEventListener('mouseenter',
    e=>{
        document.getElementsByClassName('Op1')[0].style.display = "block";
        document.getElementsByClassName('Op2')[0].style.display = "block";
        document.getElementsByClassName('Op3')[0].style.display = "block";
        document.getElementsByClassName('Op4')[0].style.display = "block";
    })
dropDownHoverEl.addEventListener('mouseleave',
    e=>{
        document.getElementsByClassName('Op1')[0].style.display = "none";
        document.getElementsByClassName('Op2')[0].style.display = "none";
        document.getElementsByClassName('Op3')[0].style.display = "none";
        document.getElementsByClassName('Op4')[0].style.display = "none";
    }
)
correctFileFormat = 'NaN';
document.getElementsByClassName('Op1')[0].addEventListener('click',
    e=>{document.getElementsByClassName('selectedOp')[0].innerHTML = 'FITS';
        correctFileFormat = 'FITS';
        }
);
document.getElementsByClassName('Op2')[0].addEventListener('click',
    e=>{
        document.getElementsByClassName('selectedOp')[0].innerHTML = 'ASCII';
        correctFileFormat= 'ASCII'
    }
);
document.getElementsByClassName('Op3')[0].addEventListener('click',
    e=>{document.getElementsByClassName('selectedOp')[0].innerHTML = 'CDF';
        correctFileFormat = 'CDF';
}
);
document.getElementsByClassName('Op4')[0].addEventListener('click',
    e=>{document.getElementsByClassName('selectedOp')[0].innerHTML = 'XLS';
        correctFileFormat = 'XLS';
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