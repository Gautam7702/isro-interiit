from xml.dom.minidom import Document
from flask import Flask, render_template,request,redirect,jsonify,flash
import os
import sys
cwd = os.getcwd()
sys.path.insert(1, cwd)  
from backend.main import get_analysis_data
app = Flask(__name__)
UPLOADFOLDER = 'frontend\\uploads'
def uploadFile(FILETYPE):
    if(request.method == 'POST'):
        if 'file' not in request.files :
            return redirect('/')
        file = request.files['file']
        filename = file.filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        path = "frontend\\uploads\\"+filename 
        f = get_analysis_data(path,FILETYPE)
        os.remove("frontend\\uploads\\"+filename)
        if(f['OK']['status']==False):
           return render_template('results.html',graphData = f,error=1)
        return render_template('results.html',graphData = f,error=0)

app.config['UPLOAD_FOLDER'] = UPLOADFOLDER
@app.route('/')
def homePage():
    return render_template('index.html')

@app.route('/submitFITS',methods=['GET','POST'])
def fits():
    return uploadFile('fits')

@app.route('/submitASCII',methods=['GET','POST'])
def ascii():
    return uploadFile('ascii')

@app.route('/submitCDF',methods=['GET','POST'])
def cdf():
    return uploadFile('cdf')

@app.route('/submitXLS',methods=['GET','POST'])
def xls():
    return uploadFile('xls')

@app.route('/documentation')
def showDoc():
    return render_template('documentation.html')
if(__name__=='__main__'):
    app.run(debug=True,port=5000)

