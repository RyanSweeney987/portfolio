## Quick utility file to copy SVG icons into Vue template files

from os import listdir
from os.path import isfile, join

sourcePath = "./src/assets/icons/prog-langs/"
destPath = "./src/components/icons/prog-langs/"

filenames = [f for f in listdir(sourcePath) if isfile(join(sourcePath, f))]

for filename in filenames:
	fullFile = sourcePath + filename
	fileData = "<template>"

	with open(fullFile, "r") as reader:
		fileData = fileData + reader.read()

	fileData = fileData + "</template>"

	fullFile = destPath + filename.split(".")[0] + ".vue"

	with open(fullFile, "w") as writer:
		writer.write(fileData)
