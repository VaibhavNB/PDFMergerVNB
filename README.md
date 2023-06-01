# PDFMergerVNB
This is a Node.js project that allows you to merge two or more PDF files into a single PDF file. It utilizes the power of Node.js and the pdf-lib library to achieve this functionality.

Prerequisites
Before you can run this project, ensure that you have the following installed on your machine:

Node.js (version 10 or above)
NPM (Node Package Manager)
Getting Started
Clone this repository to your local machine or download the source code as a ZIP file.

Open a terminal or command prompt and navigate to the project directory.

Install the project dependencies by running the following command:

Copy code
npm install
Place the PDF files you want to merge into the input directory.

Open the index.js file and modify the fileNames array to include the names of the PDF files you want to merge. Ensure that the file names are in the correct order of merging.


Copy code
npm start
This command will execute the server.js file, which will merge the PDF files and create a new file named merged.pdf in the public directory.

Once the process is complete, you can find the merged PDF file in the output directory.

Configuration
You can customize the behavior of the PDF merger by modifying the following variables in the index.js file:

outputFileName: Specify the desired name of the merged PDF file (default: merged.pdf).
outputDirectory: Specify the directory where the merged PDF file will be saved (default: ./output/).
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork this repository.

Create a new branch with a descriptive name for your feature or bug fix.

Make the necessary changes and additions.

Test your changes to ensure they work as expected.

Commit your changes and push them to your forked repository.

Submit a pull request to the main repository, describing the changes you've made.


Acknowledgments
This project utilizes the pdf-lib library, developed by the PDF-LIB team. Special thanks to the developers for their excellent work.

Contact
If you have any questions or suggestions regarding this project, feel free to contact me at badigervaibhav8@gmail.com
