This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

- [Assignment](#assignment)
- [Questions ](#questions)


## Assignment

- **Basic Definition:** 
  The React App should be able to fetch data from a giving API on as set interval and set it to the state. Each interval of the fetch process will set the state with the new incoming data

- **external API:** The following API should be used https://source.unsplash.com/random 
This API will return (most of the times) a different image URL. The following data structure is expected (partial example, there are fields that are not needed for this assignment): 

{
.
.
.
url: "https://images.unsplash.com/photo-1583210654773-ed1c958ed81a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
.
.
.
}

You will need to get the url value from the fetched data structure and set it as a state in the Container component. 

**- Provided Components** 

 1.  App: An base component that initialize the Container Component

 2. A Container: has a constructor with an initial state ({url: undefined}). A componentDidUpdate function that call the fetchData function. A render function that renders
 a string sentence if the url in the state is undefined or an html <img> with the url if it's not undefined.
 
**- Requirements:**

1. Implement the fetchData function. It should fetch the data from the provided external API url.

2. Implement fetch data to occur on a set interval 

3. Refactor the <img> to be it's own component (e.g <ImageContainer) with a set width of 640px and height of 400px

4. Add a button component that has two states, play and pause. Pause is the initial state and when clicked it will let the image component to change base on the external api response. 
The button text should changed based on the state. When pause the image shouldn't be changed.

5. Implement a Counter component that will display the counter of how many times the image changed 

6. Please do not use react hooks, redux, router or any other frameworks/add-ons (they are not needed) 

**- Bonus Requirements** 

1. A Counter component for duplicate data. If the same image was loaded more than once sequentially, a duplicate counter will appear. This counter stay after the first occurrence
and increment when a duplicate was found.

2. The Interval and API url will be fetched from an external config file (not hard coded)

4. Catch and log (console) errors when fetching data

**- Design**

This part is left for you. We don't require and fancy CSS or extravagant animations but it should look neat and easily displayed on a single screen (no scrollbars)

**- Submitting the solution**

Please clone this repository, complete the assignment and sent back either a link to your repository or a zip of your solution. 

## Questions

If you have anu questions regarding this assignment (during or after) please feel free to reach out to the email that was provided with the assignment details. 

