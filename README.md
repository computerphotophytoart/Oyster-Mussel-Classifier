<h1>Oyster Mussel Classifier</h1>
<h2>Image Classification Model</h2>

This is a simple image classification model focused on Oysters and Mussels developed utilizing FastAI library on Jupyter Notebook within Google colab environment.

It utilizes a machine learning model trained on Food-101 dataset to analyze images then provide predictions with acceptable accuracy.
I have created a v2 of this model which is trained on 224x224 images as opposed to 32x32, and it is trained with ResNet50 as opposed to Resnet34.
The v2 model does take much longer to train than this one, because it has to be trained on more detailed images with higher pixels.

You can upload any images of your choice (via Google Collab, Jupyter Notebook or a simple HTML+CSS site i've created.

<h3>-----Use-----</h3>
This program can be operated in a 3 ways.

You can:

1) Open it up in Google colab linked on this document, you can leverage Google's powerful cloud computing system

This is very ideal and efficient as it doesn't run on your system taking up your computer's resources.

It is also helpful for understanding the code which makes up the program.

2)Visit the basic HTML+CSS website at: (insert link when website is up) and upload your image there.

This can be the best choice if you just wish to classify images without viewing the code and executing the program yourself.

3)If all else fails you can always download the code and run it on your own machine, you can upload images on Jupyter Notebook.
However this will mean some functions will not work 

**Notice**
OysterMussel.ipynb is designed to only be executed within Google colab environment. Few functions in the program will not work if you are not using Google colab.

"pd.read_json('/root/.fastai/data/food-101/test.json')" will only work on Google Colab

When running the code on your own machine, change the "pd.read_json('/root/.fastai/data/food-101/test.json')"to the directory of your Jupyter Notebook where fastai data is located.

-----

<h2>Acknowledgements and Credits</h2>
This image classification model has been trained using the FastAI libary

The dataset used is Food-101 dataset
