# SwapSpace
 
By: Benjamin Thom

### Purpose
_The project's purpose is to provide users with a simple way to trade items based on their perceived monetary value._

### List the absolute minimum features the project requires to meet this purpose or goal:
* _An **NewItemForm.js** component with inputs for the item's (**Item.js**) **name**, **description**, **image(s)**, **monetaryValue** ($0-$20, $20-$40, $40-$60, ...), and **zipCode**_
  * _A **SeeTrades** button_
* _A **TradeItemsList.js** component with a list of items that match the same **monetaryValue** of the item being traded_
* _A **TradeItemDetail.js** component with the trade item's **name**, **description**, **image(s)**, **monetaryValue**, and **zipCode**_
  * _A **ProposeTrade** button_
  * _A **SeeOtherTrades** button_
* _**AddNewItem** button that returns to the **NewItemForm**_

### What tools, frameworks, libraries, APIs, modules and/or other resources will you use to create this MVP?
* _ReactJS_
* _NodeJS_
* _ExpressJS_
* _Bootstrap_
* _MongoDb_

### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next?
* _**EditItemForm.js** component with inputs to update an item's **name**, **description**, **image(s)**, and **monetaryValue** ($0-$20, $20-$40, $40-$60, etc.)_
  * _A **UpdateItem** button_
  * _A **DeleteItem** button_
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