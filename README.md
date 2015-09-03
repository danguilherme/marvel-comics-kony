# Marvel Comics
[Kony](http://www.kony.com/) application using the [Marvel Comics API](http://developer.marvel.com/).

## Setup
* Clone the repository

`$ git clone https://github.com/danguilherme/marvel-comics-kony.git`

* Enter in repository folder

`$ cd marvel-comics-kony`

* **Visualizer Project**
	* **Mac OS X**
	  * Close Visualizer, if it's opened
	  
	  * Create symlink in Kony Visualizer workspace pointing to the project inside this repo (Kony Visualizer's workspace [cannot be changed](https://www.linkedin.com/grp/post/4981807-6012212004817752065))
	  
	  `$ ln -s {Absolute path for your repository}/visualizer/ {Absolute path for Kony Visualizer workspace}/Marvel`
	  
	  * Open Visualizer and change to project "Marvel"

* **Studio Project**
  * **Mac OS X**
    * Create symlink in Kony Studio workspace pointing to the project inside this repo
    
	  `$ ln -s {Absolute path for your repository}/studio/ {Absolute path for Kony Studio workspace}/Marvel`

    * Open Studio.
    * Select menu `File > Import...`
    * On Import modal, select `General > Existing projects into Workspace`
    * Click Next
    * On Select root directory, click on `Browse...` and select the symlink folder created in the first step
    * Click Finish

