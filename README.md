# Filmetric Wish List

This is a mock of how an Angular front-end component for my [Filmetric](http://github.com/alexwilkinson/filmetric) Rails app would work. My hope is to eventually use this code as a foundation for building the entire front-end of Filmetric in Angular. It uses Rotten Tomatoes styling for fun, which would never go to into production, obviously.

It is a wish-list app, allowing you to search for new movies to add to a list. It includes a discovery feature that is almost identical to the one I implemented in the Rails app. It uses Filmetric's API to fetch movies that match user search criteria. Take a look at that [app](http://filmetric.com) if you're not sure what I'm talking about.

The wish list does not persist, yet. I will need to add the capability of having seperate users into Filmetric first, and will update the README when this has been done. Included below is a portion of the README included in the angular-seed repository, since it describes how to run this project. 

## Getting Started

To get you started you can simply clone the angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get it from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/angular/angular-seed.git
cd angular-seed
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app`.