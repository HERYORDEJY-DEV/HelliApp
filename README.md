<h1>Engineering Challenge</h1>

<h2>Task</h2>
<p>Implement a simple app with the wireframe design given, that shows a view of a mock dataset grouped by their date of creation and can be filtered by their types or status of data with a specific filter component and also can be searched through with a search box.</p>

<h2>Framework</h2>
<ul>
 <li>React Native</li>
</ul>
  

<h2>Packages used</h2>
<ul>
   <li>Typescript</li>
   <li>React Navigation</li>
   <li>Styled Components</li>
   <li>GraphQL</li>
</ul>

<h2>Setup</h2>
<ul>
   <li>Clone repository
   <li>Open project directory in terminal
   <li>Enter the following commands in the terminal,
   <ul> 
    <li><code>yarn install</code></li>
    <li><code>yarn android</code></li>
   </ul>
</ul>

<h2>Functionalities</h2>

<h3>API Call</h3>
<ul>
    <li>A backend service was implemented and hosted on heroku </li>
    <li>Movies datasets were used</li>
    <li>Apollo GraphQL client was setup</li>
    <li>A hook is being used to query the API and a response is recieved</li>
</ul>

<h3>Data Rendering</h3>
<ul>
    <li>The Movies (data) received from the response is then sectioned and grouped based on year (of release)</li>
    <li>The sectioned data is the rendered on a list component</li>
</ul>

<h3>Data Searching</h3>
<ul>
    <li>A search component is being implemented, which is rendered at the topmost part of the screen</li>
    <li>The search is based on movie title. Input the search query in the search-box and press the search-icon in the box, or press the enter button on the device keyboard</li>
    <li>Then, the movies are filter based on (movie) titles which are synonymous to the word being searched</li>
</ul>

<h3>Data Filtering</h3>
<ul>
    <li>A filter component is also being implemented, which is rendered above the list (of data)</li>
    <li>The filter is based on movie genres. List of available genres is mapped out as buttons. Press on the button of any desired genre</li>
    <li>Then, the movies are filter based on (movie) genre which are synonymous to the genre-button's title pressed</li>
</ul>
