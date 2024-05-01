<h1>Oyster Mussel Classifier</h1>
<h2>Image Classification Model</h2>

This is a simple image classification model focused on Oysters and Mussels developed utilizing FastAI library on Jupyter Notebook within Google colab environment.

It utilizes a machine learning model trained on Food-101 dataset to analyze images then provide predictions with acceptable accuracy.
In order to increase the accuracy of the model, you can increase the number inside Resize function. I recommend having it at 224 for 224x224 images. It will take longer however
You can also easily change the ResNet architecture, currently it is at ResNet34, you can change it to ResNet50 however the free version of 

You can upload any images of your choice (via Google Collab, Jupyter Notebook or a simple HTML+CSS site i've created.

<h3>-----Use-----</h3>
Open it up in Google colab to leverage Google's powerful cloud computing system
Go to the browser and insert link.
The link is: https://colab.research.google.com/github/computerphotophytoart/Oysters-Mussels-Classifier/blob/main/OysterMusselClassifier.ipynb
This is ideal as it doesn't run on your system taking up your computer's resources.
It is also helpful for understanding the code which makes up the program.

I  made a HTML + CSS site for it however ran into issues packaging the program with docker sadly.

If all else fails you can execute it in Jupyter Notebook on local machine however this will need a powerful system. Not recommended.

**Notice**
OysterMussel.ipynb is designed to only be executed within Google colab environment. Few functions in the program will not work if you are not using Google colab.

"pd.read_json('/root/.fastai/data/food-101/test.json')" will only work on Google Colab

When running the code on your own machine, change the "pd.read_json('/root/.fastai/data/food-101/test.json')"to the directory of your Jupyter Notebook where fastai data is located.

-----

<h2>Acknowledgements and Credits</h2>
This image classification model has been trained using the FastAI libary

The dataset used is Food-101 dataset
