#! /bin/bash


if ! which python &> /dev/null
then
    echo "Python not installed. Installing python3"
    sudo apt install python3
fi

if !which pip &> /dev/null
then
    echo "Pip not installed. Installing pip to install dependencies"
    sudo apt install pip
fi

pip install PyQt5
pip install pyqtgraph
pip install scikit-learn
pip install pandas
pip install xlrd

python isro-interiit.py