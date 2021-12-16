# Running the mock server
On first launch run
`npm install`

Run the following command in this directory
`node server.js`

You can then access the mock API at `localhost:8081/`

# Creating new endpoints

1. Make a new directory (if needed), that corresponds to the endpoint you want to add, in the *api* directory
2. Create a *.mock* file naming it after the request you wish to mock (i.e. *GET.mock*, *POST.mock*)
3. Write the type of request and what should be the response (see examples or the `mockserver` [GitHub page](https://github.com/namshi/mockserver "GitHub page"))
