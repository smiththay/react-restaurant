
# class App
import axios

component did mount

component did update 

call axios

render
    The restaurant's name 
    The restaurant's address
    The restaurant's hours of operation
    NavBar


# class Menu Sections

# class menu Items


# requirements 


Generate the following information:


Access the API using Axios. Learn more

Create a dynamic restaurant menu

Must include at least five sections for unique meal type (appetizers, lunch, main course, sides, dessert, etc) with unique food items
One meal section must have at least 12 unique items, and 3 other different meal sections must have at least 8 unique items each. (think 12 main courses, 10 appetizers, 1 special, 8 sides, etc)
Since the api generates random foods, you will need to sort them into their meal types if you get a random amount that is not sorted.
A price for the food item
Each Menu Section must be viewable separately in an organism (for example, a bootstrap accordion or nav tabs)
Each menu item must be an molecule (for example, using a bootstrap card or list item with a picture of the meal, as well as the name, and the price, etc)
Manage the React Component State

Each time you access the API, you get different random meals. Use React Lifecycle Methods to save the results in local storage so that every time your website is accessed, the user gets the same menu (Different users will see different menus; that's okay). Make sure that if you delete local storage, you retrieve a new menu from the API