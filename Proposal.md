# SwapSpace
 
By: Benjamin Thom

### Purpose
_A web application that provides users with a simple to use tool for finding and trading items by simply filtering trade items by their monetary value._ 
* Example: _If a user were to add a $100 bicycle they would see trade offers for all items listed for $100-1$20. Items may include anything from a fishing pole and tackle box listed for $110 to a rare baseball card collection for $120._

_**SwapSpace** provides users with a fun and tastfully simplictic trading experience!_

### Minimum Viable Product
* _An **NewItemForm.js** component with inputs for the item's (**Item.js**) **name**, **description**, **image(s)**, **monetaryValue** ($0-$20, $20-$40, $40-$60, ...), and **zipCode**_
  * _A **SeeTrades** button_
* _A **TradeItemsList.js** component with a list of items added_
* _**AddNewItem** button that returns to the **NewItemForm**_

### What tools, frameworks, libraries, APIs, modules and/or other resources will you use to create this MVP?
* **ReactJS** _will be used to build UI components that create the client-side of the web application._
* **NodeJS** and **ExpressJS** _will work together to as the server-side of the web application to serve the frontend components._
* **MongoDb** _any interaction that causes a data change request is sent to the NodeJS based Express server, which grabs data from the MongoDB database if required, and returns the data to the frontend of the application, which is then displayed to the user._
* **Bootstrap** _will be used to design the web application's typography, forms, buttons, navigation, images, etc._

### Stretch Goals
* _A **TradeItemDetail.js** component with the trade item's **name**, **description**, **image(s)**, **monetaryValue**, and **zipCode**_
  * _A **ProposeTrade** button_
  * _A **SeeOtherTrades** button_
* _**EditItemForm.js** component with inputs to update an item's **name**, **description**, **image(s)**, and **monetaryValue** ($0-$20, $20-$40, $40-$60, etc.)_
  * _A **UpdateItem** button_
  * _A **DeleteItem** button_
* _Filter **TradeItemsList.js** component by **monetaryValue** and/or **zipCode** of the item being traded_
* _**RegisterForm.js** component with inputs for a new user's (**User.js**) **password**, and **email**_
  * _**CreateAccount** button_
  * _**ReturnToLogin** button_
* _**LoginForm.js** component where current users can log in with their **email** and **password**_
  * _**AccountLogin** button_
  * _**ReturnToRegister** button_
* _**AccountDetail.js** component where current users can review their **password**, and **email**_
  * _**EditAccount** button_
* _EditAccountForm.js component where current user can update user details (password, or email) or delete account_
  * _**UpdateAccount** button_
  * _**DeleteAccount** button_
* _Provide an option to filter the **TradeItemList.js** component by **zipCode**_

### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
_No additional resources required at this time_

### Is there anything else you'd like your instructor to know?
_Not at this time_