# About the App
<hr>

LIRI is a Language Interpretation and Recognition Interface. 
LIRI is a command line node app that takes in parameters and gives you back data.
The user has the option of using four commands in conjunction with specific parameters associated with the commands.
Those commands are:
<li>concert-this
<br>
<li>movie-this
<br>
<li>spotify-this
<br>
<li>do-what-it-says

<hr>

# How to Use LIRI

## Step-by-step Instructions
1. 1 Open your terminal, is Bash
1. 2 Navigate to the folder that contains the file titled liri.js
1. 3 Depending on the command you run, the output will differ.
    * Example 1. Run concert-this command
    <br>
        node liri.js concert-this <"name of band or artist">
        <br>
        Output: The terminal will display a list of all events and locations where the artist or band will perform.
        It can result in multiple records. The system will also log the results to the log.txt file.
        <!-- Screenshot -->
        <br>
    <li>Example 2. Run movie-this command
    <br>
        node liri.js movie-this <"name of movie">
        <br>
        Output: The terminal will display information associated with the movie.
        The system will also log the results to the log.txt file.
        <br>
        [movie-this screenshot](https://raw.githubusercontent.com/reharr4/liri-node-app/master/screenshots/movie-this.jpg)
        <br>
    <li>Example 3. Run spotify-this-song command
    <br>
        node liri.js spotify-this-song <"name of song">
        <br>
        Output: The terminal will display a list of information associated with the song. 
        It can result in multiple records. The system will also log the results to the log.txt file.
        <!-- screenshot -->
        <br>
    <li>Example 4. Run do-what-it-says command
    <br>
        node liri.js do-what-it-says
        <br>
        Output: The terminal will display and perform the command listed in the random.txt file.
        <!-- screenshot -->
        <br>
    
# Techonologies Used
<hr>
* Javascript
* Node.js
* Node packages:
    * Node-Spotify-API
    * Request
    * Axios
    * Moment
    * DotEnv
* APIs Used
    * Bands In Town
    * OMDB
* Git
* Github