#! /bin/python

import graphSheet
from PyQt5 import QtWidgets
import json

app = QtWidgets.QApplication([])

window = graphSheet.GraphSheet()
MainWindow = QtWidgets.QMainWindow()
window.setupUi(MainWindow)
MainWindow.show()

app.exec_()